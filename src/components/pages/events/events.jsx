import { Box, CardMedia, Container, Typography } from "@mui/material";
import React, { useState } from "react";
// import { motion } from "framer-motion";
import EventButton from "../../parts/buttons/eventButton";
import { eventData } from "./eventsData";
import CityButtonOuter from "../../parts/buttons/cityButtonOuter";

// const textAnimation = {
//   hidden: { x: -100, opacity: 0 },
//   visible: (custom) => ({
//     x: 0,
//     opacity: 1,
//     transition: { duration: custom * 0.3, delay: custom * 0.2 },
//   }),
// };
// const listVariants = {
//   visible: (i) => ({
//     opacity: 1,
//     transition: {
//       delay: i * 1,
//     },
//   }),
//   hidden: { opacity: 0 },
// };
const Events = () => {
  const [upcomingEvents] = useState(eventData);
  const [currentParty, setCurrentParty] = useState([eventData[0]]);

  const handleClick = (id) => {
    setCurrentParty([upcomingEvents.find((e) => e.id === id)]);
  };

  return (
    <Container
      id="events"
      maxWidth="xl"
      sx={{
        height: "600px",
        width: "100vw",
        marginBottom: "120px",
        paddingTop: "80px",
      }}
    >
      {/* <motion.div initial="hidden" whileInView="visible">
        <motion.div custom={1} variants={textAnimation}> */}
      <Typography
        gutterBottom
        variant="h2"
        color="white"
        fontFamily="Oswald"
        fontWeight="bold"
      >
        МЕРОПРИЯТИЯ
      </Typography>
      <Box
        sx={{
          height: "3px",
          bgcolor: "#f2ee6f",
          maxWidth: "380px",
          mb: 4,
        }}
      ></Box>
      {/* </motion.div> */}
      <Box
        sx={{
          color: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {/* eventlist */}
        {/* <motion.div custom={1} variants={textAnimation}> */}
        <Box
          sx={{
            color: "white",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {upcomingEvents &&
            upcomingEvents.map((el, i) => (
              <span key={"upcomingEvents" + el.id + i}>
                <EventButton
                  id={el.id}
                  click={handleClick}
                  title={el.name}
                  date={el.date}
                />
              </span>
            ))}
        </Box>
        {/* </motion.div> */}
        {/* <motion.div custom={2} variants={textAnimation}> */}
        <Box sx={{ maxWidth: "80vw" }}>
          {currentParty &&
            currentParty.map((el, i) => (
              <Box
                key={"currentParty" + el.id + i}
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
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
                  <CityButtonOuter
                    title="INSTA"
                    link="https://www.instagram.com/patricksander95/"
                  />
                </Box>
                <CardMedia
                  sx={{
                    maxWidth: "600px",
                    height: "auto",
                    ml: 10,
                  }}
                  component="img"
                  src={el.img}
                />
              </Box>
            ))}
        </Box>
        {/* </motion.div> */}
      </Box>
      {/* </motion.div> */}
    </Container>
  );
};

export default Events;
