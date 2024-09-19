// pages/index.tsx

import { Button, Stack, Typography } from "@mui/material";
import logo from "../app/assets/logo.png";
import Image from "next/image";
import AssistantDirectionIcon from "@mui/icons-material/AssistantDirection";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import { colors } from "./data/colors";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Stack
        direction='column'
        spacing={2}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image src={logo} alt='logo' />
        <Typography variant='body1'>
          Discover beautiful travel destinations around the world.
        </Typography>

        <Stack
          direction='row'
          spacing={2}
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href='/destinations' passHref>
            <Button
              sx={{
                color: "black",
                fontSize: "1rem",
                "&:hover": {
                  color: colors.homeButton,
                },
              }}
              startIcon={<AssistantDirectionIcon />}
            >
              Destinations
            </Button>
          </Link>

          <Link href='/gallery' passHref>
            <Button
              startIcon={<CollectionsBookmarkIcon />}
              sx={{
                color: "black",
                fontSize: "1rem",
                "&:hover": {
                  color: colors.homeButton,
                },
              }}
            >
              Gallery
            </Button>
          </Link>
        </Stack>
      </Stack>
    </>
  );
}
