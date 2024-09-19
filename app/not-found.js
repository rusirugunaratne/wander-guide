// pages/404.tsx

import { Typography, Button } from "@mui/material";
import Link from "next/link";

export default function Custom404() {
    return (
        <>
            <Typography variant="h4">Page Not Found</Typography>
            <Link href="/" passHref>
                <Button variant="contained">Go Back Home</Button>
            </Link>
        </>
    )
}
