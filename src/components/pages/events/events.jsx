import { Box, CardMedia, Container, Typography } from "@mui/material";
import React from "react";
import motion from "framer-motion";

const Events = () => {
  const events = [
    {
      name: "Summer party",
      date: "05.06.22",
      img: "https://www.tzkolan-mandre.com/images/galerijafotografija/Plaza_Katarelec/1.jpg",
      desc: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    },
    {
      name: "Night party",
      date: "11.06.22",
      img: "https://www.tzkolan-mandre.com/images/galerijafotografija/Plaza_Katarelec/1.jpg",
      desc: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    },
    {
      name: "Yellow party",
      date: "21.06.22",
      img: "https://www.tzkolan-mandre.com/images/galerijafotografija/Plaza_Katarelec/1.jpg",
      desc: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    },
    {
      name: "Crazy party",
      date: "05.07.22",
      img: "https://www.tzkolan-mandre.com/images/galerijafotografija/Plaza_Katarelec/1.jpg",
      desc: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    },
    {
      name: "Ugly party",
      date: "11.07.22",
      img: "https://www.tzkolan-mandre.com/images/galerijafotografija/Plaza_Katarelec/1.jpg",
      desc: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    },
    {
      name: "Hichkok party",
      date: "21.07.22",
      img: "https://www.tzkolan-mandre.com/images/galerijafotografija/Plaza_Katarelec/1.jpg",
      desc: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    },
    {
      name: "Winter coming party",
      date: "29.07.22",
      img: "https://www.tzkolan-mandre.com/images/galerijafotografija/Plaza_Katarelec/1.jpg",
      desc: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    },
  ];
  return (
    <Container maxWidth="xl" sx={{ marginY: "120px" }}>
      <Box
        sx={{
          color: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <ul>
            <li>Event list</li>
            <li>Event list</li>
            <li>Event list</li>
            <li>Event list</li>
            <li>Event list</li>
          </ul>
        </Box>
        <Box>
          <Typography variant="h2" fontFamily="oswald" fontWeight="Bold">
            Event
          </Typography>
          <Typography
            sx={{ maxWidth: "600px" }}
            variant="body1"
            fontFamily="oswald"
            fontWeight="light"
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum
            accusamus ipsa officia eaque, maiores id facere, eius, laborum
            aliquid magni quasi aut alias odit sint quidem iste reiciendis
            recusandae ab.
          </Typography>
        </Box>
        <Box>
          <CardMedia
            component="img"
            src="http://www.johnerskinephotography.co.uk/wp-content/uploads/2014/10/Black-Tie-Event-London_005.jpg"
            sx={{ maxWidth: "800px" }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Events;
