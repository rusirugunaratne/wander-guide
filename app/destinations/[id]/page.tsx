// pages/destinations/[id].tsx
import { Typography, List, ListItem } from "@mui/material";
import { destinations } from "../../data/destinations";

interface Props {
  params: { id: string };
}

export default function DestinationDetail({ params }: Props) {
  const id = params.id;
  const destination = destinations.find((d) => d.id === parseInt(id as string));

  if (!destination) return <p>Destination not found.</p>;

  return (
    <>
      <Typography variant='h3'>{destination.name}</Typography>
      <Typography variant='body1'>{destination.description}</Typography>
      <Typography variant='h5' gutterBottom>
        Attractions:
      </Typography>
      <List>
        {destination.attractions.map((attraction, index) => (
          <ListItem key={index}>{attraction}</ListItem>
        ))}
      </List>
    </>
  );
}
