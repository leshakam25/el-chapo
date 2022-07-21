import { Box, CardMedia, Container, Typography } from "@mui/material";
import React from "react";

const Events = () => {
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
