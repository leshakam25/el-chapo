import { Box, CardMedia, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import { motion } from "framer-motion";
import EventButton from "../../parts/buttons/eventButton";
import { eventData } from "./eventsData";

const textAnimation = {
  hidden: { x: 100, opacity: 0 },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { duration: custom * 0.3, delay: custom * 0.2 },
  }),
};

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
      <motion.div initial="hidden" whileInView="visible">
        <Box
          sx={{
            color: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {/* eventlist */}
          <motion.div custom={1} variants={textAnimation}>
            <Box
              sx={{
                color: "white",
                display: "flex",
                flexDirection: "column",
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
                    <EventButton
                      id={el.id}
                      click={handleClick}
                      title={el.date + " " + el.name}
                    />
                  </motion.span>
                ))}
            </Box>
          </motion.div>
          <motion.div custom={2} variants={textAnimation}>
            <Box sx={{ maxWidth: "60vw" }}>
              {currentParty &&
                currentParty.map((el, i) => (
                  <Box
                    key={"currentParty" + el.id + i}
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                    }}
                  >
                    <Box>
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
                        sx={{ maxWidth: "400px" }}
                      >
                        {el.desc}
                      </Typography>
                    </Box>
                    <CardMedia
                      sx={{
                        maxWidth: "600px",
                        height: "auto",
                        border: "4px solid white",
                        ml: 10,
                      }}
                      component="img"
                      src={el.img}
                    />
                  </Box>
                ))}
            </Box>
          </motion.div>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Events;
