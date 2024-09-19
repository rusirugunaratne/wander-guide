import { Grid, Typography } from "@mui/material";
import DestinationCard from "../components/DestinationCard";
import { destinations } from "../data/destinations";

export default function Destinations() {
  return (
    <>
      <Typography variant='h3' gutterBottom>
        Explore Destinations
      </Typography>
      <Grid container spacing={4}>
        {destinations.map((destination) => (
          <Grid item xs={12} sm={6} md={4} key={destination.id}>
            <DestinationCard destination={destination} />
          </Grid>
        ))}
      </Grid>
    </>
  );
}
