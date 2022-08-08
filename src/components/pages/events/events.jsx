import { Box, CardMedia, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import EventButton from "../../parts/buttons/eventButton";
import CityButtonOuter from "../../parts/buttons/cityButtonOuter";
import ReactPlayer from "react-player";

const Events = (props) => {
  const [upcomingEvents] = useState(props.eventData);
  const [currentParty, setCurrentParty] = useState([props.eventData[0]]);

  const handleClick = (id) => {
    setCurrentParty([upcomingEvents.find((e) => e.id === id)]);
  };

  return (
    <Container
      id="events"
      maxWidth="xl"
      sx={{
        marginBottom: "120px",
        paddingTop: "80px",
      }}
    >
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
      <Box
        sx={{
          color: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {/* eventlist */}
        <Box
          sx={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            maxWidth: "300px",
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
        {/* current select party */}
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
                    textAlign="justify"
                    sx={{ maxWidth: "400px" }}
                  >
                    {el.desc}
                  </Typography>
                  <CityButtonOuter title="INSTA" link={el.insta} />
                </Box>
                <CardMedia
                  sx={{
                    maxWidth: "320px",
                    maxHeight: "480px",
                    ml: 10,
                  }}
                  component="img"
                  src={el.img}
                />
              </Box>
            ))}
        </Box>
      </Box>
      {/* <Typography
        sx={{ mt: "120px" }}
        variant="h2"
        fontWeight="bold"
        fontFamily="Oswald"
        color="white"
        gutterBottom
      >
        ВЕЧЕРИНКИ
      </Typography>
      <Box sx={{ height: "3px", bgcolor: "#f2ee6f", maxWidth: "274px" }}></Box> */}

      {/* videos */}
      {/* <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          mt: 4,
        }}
      >
        <Box sx={{ mx: 6, display: "flex" }}>
          {upcomingEvents &&
            upcomingEvents.map((el, i) => (
              <ReactPlayer height="560px" width="320px" url={el.video} />
            ))}
        </Box>
      </Box> */}
    </Container>
  );
};

export default Events;
