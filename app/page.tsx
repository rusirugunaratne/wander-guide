import AssistantDirectionIcon from "@mui/icons-material/AssistantDirection";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import { Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import logo from "../app/assets/animatedLogo.gif";
import { colors } from "./data/colors";

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
        <Image src={logo} alt='logo' height={300} />
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
