"use client";
import { AppBar, Toolbar, Container, Button, Box } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import logo from "../app/assets/animatedLogo.gif";
import Image from "next/image";
import { colors } from "./data/colors";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      <html>
        <body
          className={poppins.className}
          style={{
            background: `
              linear-gradient(to bottom, rgba(142, 202, 230, 0.3), rgba(33, 158, 188, 0.1), rgba(255, 183, 3, 0.3)),
              url('/path/to/your/background-image.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "100vh",
          }}
        >
          <AppBar
            position='static'
            sx={{
              backgroundColor: "transparent",
              boxShadow: "none",
              paddingY: 1,
            }}
          >
            <Toolbar
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                  opacity: isHomePage ? 1 : 0.7,
                  transform: isHomePage ? "translateX(0)" : "translateX(-20px)",
                }}
              >
                {!isHomePage && (
                  <Link href='/' passHref>
                    <Button
                      sx={{
                        color: "black",
                        fontSize: "1rem",
                        "&:hover": {
                          color: colors.navLink,
                        },
                      }}
                    >
                      Home
                    </Button>
                  </Link>
                )}
                <Link href='/destinations' passHref>
                  <Button
                    sx={{
                      color: "black",
                      fontSize: "1rem",
                      "&:hover": {
                        color: colors.navLink,
                      },
                    }}
                  >
                    Destinations
                  </Button>
                </Link>
              </Box>

              {!isHomePage && (
                <Image
                  alt='logo'
                  src={logo}
                  width={200}
                  style={{
                    transition: "opacity 0.5s ease, transform 0.5s ease",
                    opacity: !isHomePage ? 1 : 0,
                    transform: !isHomePage ? "scale(1)" : "scale(0.9)",
                  }}
                />
              )}

              <Box
                sx={{
                  transition: "opacity 0.5s ease, transform 0.5s ease",
                  opacity: isHomePage ? 1 : 0.7,
                  transform: isHomePage ? "translateX(0)" : "translateX(20px)",
                }}
              >
                <Link href='/gallery' passHref>
                  <Button
                    sx={{
                      color: "black",
                      fontSize: "1rem",
                      "&:hover": {
                        color: colors.navLink,
                      },
                    }}
                  >
                    Gallery
                  </Button>
                </Link>
                <Link href='/contact' passHref>
                  <Button
                    sx={{
                      color: "black",
                      fontSize: "1rem",
                      "&:hover": {
                        color: colors.navLink,
                      },
                    }}
                  >
                    Contact
                  </Button>
                </Link>
              </Box>
            </Toolbar>
          </AppBar>
          <Container sx={{ marginTop: 4 }}>{children}</Container>
        </body>
      </html>
    </>
  );
};

export default Layout;
