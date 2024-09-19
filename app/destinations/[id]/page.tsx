import {
  Typography,
  List,
  ListItem,
  Chip,
  Box,
  CardMedia,
} from "@mui/material";
import { destinations } from "../../data/destinations";
import { colors } from "@/app/data/colors";

interface Props {
  params: { id: string };
}

export default function DestinationDetail({ params }: Props) {
  const id = params.id;
  const destination = destinations.find((d) => d.id === parseInt(id as string));

  if (!destination) return <p>Destination not found.</p>;

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant='h3'>{destination.name}</Typography>
      <CardMedia
        component='img'
        height='300'
        image={destination.image}
        alt={destination.name}
        sx={{ borderRadius: 2, marginBottom: 2 }}
      />
      <Typography variant='body1'>{destination.description}</Typography>
      <Typography variant='h6' gutterBottom sx={{ marginTop: 2 }}>
        Attractions:
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
        {destination.attractions.map((attraction, index) => (
          <Chip
            key={index}
            label={attraction}
            variant='outlined'
            sx={{
              "&:hover": {
                backgroundColor: colors.homeButton,
                color: "white",
                transition: "background-color 0.3s ease",
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
