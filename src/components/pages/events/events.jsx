import { Box, CardMedia, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";
import EventButton from "../../parts/buttons/eventButton";
import { eventData } from "./eventsData";

const Events = () => {
  const [upcomingEvents, setUpcomingEvents] = useState(eventData);
  const [currentParty, setCurrentParty] = useState([eventData[0]]);

  const handleClick = (id) => {
    setCurrentParty([upcomingEvents.find((e) => e.id == id)]);
  };

  const listVariants = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 1,
      },
    }),
    hidden: { opacity: 0 },
  };

  return (
    <Container
      id="events"
      maxWidth="xl"
      sx={{ paddingTop: "80px", height: "600px" }}
    >
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
            justifyContent: "left",
            alignItems: "left",
            width: "300px",
          }}
        >
          {upcomingEvents &&
            upcomingEvents.map((el, i) => (
              <motion.span
                variants={listVariants}
                initial="hidden"
                animate="visible"
                key={"upcomingEvents" + el.id + i}
              >
                <EventButton id={el.id} click={handleClick} title={el.name} />
              </motion.span>
            ))}
        </Box>
        <Box sx={{ maxWidth: "60vw" }}>
          {currentParty &&
            currentParty.map((el, i) => (
              <Box
                key={"currentParty" + el.id + i}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Box
                  sx={{
                    maxWidth: "30vw",
                  }}
                >
                  <Typography
                    variant="h4"
                    fontFamily="oswald"
                    fontWeight="Bold"
                  >
                    {el.name}
                  </Typography>
                  <Typography
                    variant="h5"
                    fontFamily="oswald"
                    fontWeight="Bold"
                  >
                    {el.date}
                  </Typography>
                  <Typography
                    variant="body1"
                    fontFamily="oswald"
                    fontWeight="light"
                  >
                    {el.desc}
                  </Typography>
                </Box>
                <CardMedia
                  sx={{
                    maxWidth: "600px",
                    height: "auto",
                  }}
                  component="img"
                  src={el.img}
                />
              </Box>
            ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Events;
