import { Box, CardMedia, Container, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { EventButton } from "../../parts/buttons";

const Events = () => {
  const listVariants = {
    visible: (i) => ({
      opacity: 1,
      transition: {
        delay: i * 1,
      },
    }),
    hidden: { opacity: 0 },
  };

  const upcomingEvents = [
    {
      name: "Summer party",
      date: "05.06.22",
      img: "https://www.tzkolan-mandre.com/images/galerijafotografija/Plaza_Katarelec/1.jpg",
      desc: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    },
    {
      name: "Night party",
      date: "11.06.22",
      img: "https://cdn-asset.jawapos.com/wp-content/uploads/2019/08/63085489_ML-640x480.jpg",
      desc: "Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    },
    {
      name: "Yellow party",
      date: "21.06.22",
      img: "https://showprokat.pro/wp-content/uploads/2017/01/lasershow.jpg",
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
                custom={i}
              >
                <EventButton key={el} title={el.name} />
              </motion.span>
            ))}
        </Box>
        <Box>
          {upcomingEvents &&
            upcomingEvents.map((el, i) => (
              <div>
                <Typography variant="h2" fontFamily="oswald" fontWeight="Bold">
                  {el.name}
                </Typography>
                <Typography variant="h4" fontFamily="oswald" fontWeight="Bold">
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
              </div>
            ))}
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
