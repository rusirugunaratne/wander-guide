import { Typography, Button, Box } from "@mui/material";
import Link from "next/link";
import { colors } from "./data/colors";

export default function Custom404() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: 2,
            }}
        >
            <Typography fontWeight={800} variant="h1" >404</Typography>
            <Typography variant="h4" gutterBottom>
                Oops! Page Not Found
            </Typography>
            <Typography variant="body1" gutterBottom>
                It seems like you’ve taken a wrong turn on your journey.
                Don’t worry; let’s get you back on track!
            </Typography>
            <Link href="/" passHref>
                <Button sx={{
                    color: "black",
                    fontSize: "1rem",
                    "&:hover": {
                        color: colors.homeButton,
                    },
                }}>
                    Go Back Home
                </Button>
            </Link>
        </Box>
    );
}
