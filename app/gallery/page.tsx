// pages/gallery.tsx

import { ImageList, ImageListItem, Typography, Box } from "@mui/material";
import { imageData } from "../data/images";

const Gallery = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <ImageList variant='masonry' cols={3} gap={8}>
        {imageData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading='lazy'
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

export default Gallery;
