import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import Link from "next/link";
import { Destination } from "../data/destinations";
import { colors } from "../data/colors";

interface DestinationCardProps {
  destination: Destination;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ destination }) => {
  return (
    <Card
      sx={{
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "scale(1.05)",
          boxShadow: 5,
        },
      }}
    >
      <CardMedia
        component='img'
        height='140'
        image={destination.image}
        alt={destination.name}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {destination.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {destination.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`/destinations/${destination.id}`} passHref>
          <Button
            sx={{
              color: "black",
              fontSize: "1rem",
              "&:hover": {
                color: colors.homeButton,
              },
            }}
          >
            Learn More
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default DestinationCard;
