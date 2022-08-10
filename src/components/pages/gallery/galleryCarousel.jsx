import React from "react";
import Carousel from "better-react-carousel";
import { CardMedia } from "@mui/material";

const YellowDot = ({ isActive }) => (
  <span
    style={{
      height: isActive ? "18px" : "12px",
      width: isActive ? "18px" : "12px",
      background: "#f2ee6f",
    }}
  ></span>
);

const BtrCarousel = (props) => {
  return (
    <Carousel
      cols={2}
      rows={2}
      gap={8}
      loop
      autoplay={3800}
      showDots
      dot={YellowDot}
    >
      {props.gallery &&
        props.gallery.map((el, i) => (
          <Carousel.Item key={"btrCarousel" + i}>
            <CardMedia
              sx={{ height: "410px" }}
              component="img"
              image={el.img}
              alt="no photo"
            />
          </Carousel.Item>
        ))}
    </Carousel>
  );
};

export default BtrCarousel;
