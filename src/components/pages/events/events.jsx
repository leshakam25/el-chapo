import { Box, CardMedia, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import EventButton from "../../parts/buttons/eventButton";

const eventData = [
  {
    id: 0,
    name: "Summer party",
    date: "05.06.22",
    img: "https://www.tzkolan-mandre.com/images/galerijafotografija/Plaza_Katarelec/1.jpg",
    desc: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
  },
  {
    id: 1,
    name: "Night party",
    date: "11.06.22",
    img: "https://cdn-asset.jawapos.com/wp-content/uploads/2019/08/63085489_ML-640x480.jpg",
    desc: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
  },
  {
    id: 2,
    name: "Yellow party",
    date: "21.06.22",
    img: "https://showprokat.pro/wp-content/uploads/2017/01/lasershow.jpg",
    desc: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
  },
];

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

  // useEffect(() => {
  //   setCurrentParty(upcomingEvents);
  // }, [upcomingEvents]);

  return (
    <Container id="events" maxWidth="xl" sx={{ marginY: "120px" }}>
      {/* log button
      <button onClick={logs}>log</button> */}
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
            minWidth: "200px",
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
        <Box>
          {currentParty &&
            currentParty.map((el, i) => (
              <Box
                key={"currentParty" + el.id + i}
                sx={{ display: "flex", flexDirection: "row" }}
              >
                <Box>
                  <Typography
                    variant="h2"
                    fontFamily="oswald"
                    fontWeight="Bold"
                  >
                    {el.name}
                  </Typography>
                  <Typography
                    variant="h4"
                    fontFamily="oswald"
                    fontWeight="Bold"
                  >
                    {el.date}
                  </Typography>
                  <Typography
                    sx={{ maxWidth: "600px" }}
                    variant="body1"
                    fontFamily="oswald"
                    fontWeight="light"
                  >
                    {el.desc}
                  </Typography>
                </Box>
                <CardMedia
                  sx={{
                    maxWidth: "800px",
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
