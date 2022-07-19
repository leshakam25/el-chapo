import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import image1 from "../../../image/photo/2022-07-05 00-57-01 (1).png";
import { imagesData } from "./imagesData";
import { CardMedia } from "@mui/material";

export default function Images() {
  return (
    <Box sx={{ width: "100%", height: 450, overflowY: "scroll" }}>
      <ImageList variant="masonry" cols={6} gap={8}>
        {imagesData.map((item) => (
          <ImageListItem key={item.img}>
            <CardMedia
              component="img"
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt="no img"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
