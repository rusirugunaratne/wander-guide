// components/Layout.tsx
"use client";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
  Box,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import logo from "../app/assets/logo.png";
import Image from "next/image";
import { colors } from "./data/colors";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      <html>
        <body>
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
              {/* Left-side links */}
              <Box
                sx={{
                  transition: "opacity 0.5s ease, transform 0.5s ease", // Apply transition to left links
                  opacity: isHomePage ? 1 : 0.7,
                  transform: isHomePage ? "translateX(0)" : "translateX(-20px)",
                }}
              >
                <Link href='/' passHref>
                  <Button
                    sx={{
                      color: "black",
                      fontSize: "1rem",
                      "&:hover": {
                        color: colors.navLink, // Change to desired hover color
                      },
                    }}
                  >
                    Home
                  </Button>
                </Link>
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

              {/* Center logo with transition */}
              {!isHomePage && (
                <Image
                  alt='logo'
                  src={logo}
                  width={200}
                  style={{
                    transition: "opacity 0.5s ease, transform 0.5s ease", // Transition for appearance/disappearance
                    opacity: !isHomePage ? 1 : 0, // Fade in or out
                    transform: !isHomePage ? "scale(1)" : "scale(0.9)", // Scale effect for transition
                  }}
                />
              )}

              {/* Right-side links */}
              <Box
                sx={{
                  transition: "opacity 0.5s ease, transform 0.5s ease", // Apply transition to right links
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
