import { Box, CardMedia, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import EventButton from "../../parts/buttons/eventButton";
import ReactPlayer from "react-player";
import CityButtonOuter from "../../parts/buttons/cityButtonOuter";

const Events = (props) => {
  const [eventVideos] = useState(props.eventVideo);
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
      {/* events */}
      <Box sx={{ height: { xs: "auto", md: "500px" } }}>
        <Typography
          gutterBottom
          color="white"
          fontSize="44px"
          fontFamily="Oswald"
          fontWeight="bold"
        >
          МЕРОПРИЯТИЯ
        </Typography>
        <Box
          sx={{
            height: "3px",
            bgcolor: "#f2ee6f",
            maxWidth: "285px",
            mb: 4,
          }}
        ></Box>
        <Box
          sx={{
            color: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "left",
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
          {currentParty &&
            currentParty.map((el, i) => (
              <Box
                key={"currentParty" + el.id + i}
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  flexDirection: "row",
                  justifyContent: "left",
                  alignItems: "start",
                }}
              >
                <Box sx={{ maxWidth: "300px" }}>
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
                  {!!el.insta && (
                    <CityButtonOuter title="INSTA" link={el.insta} />
                  )}
                </Box>
                <CardMedia
                  sx={{
                    maxWidth: "400px",
                    ml: 10,
                    border: "2px solid white",
                  }}
                  component="img"
                  src={el.img}
                />
              </Box>
            ))}
        </Box>
      </Box>
      {/* night partys */}
      <Box>
        <Typography
          sx={{ mt: "120px" }}
          variant="h2"
          fontWeight="bold"
          fontFamily="Oswald"
          color="white"
          gutterBottom
        >
          НОЧНЫЕ ВЕЧЕРИНКИ
        </Typography>
        <Box
          sx={{ height: "3px", bgcolor: "#f2ee6f", maxWidth: "274px" }}
        ></Box>
        {/* videos */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            mt: 4,
          }}
        >
          {eventVideos &&
            eventVideos.map((el, i) => (
              <div key={"video" + i}>
                <ReactPlayer height="560px" width="320px" url={el.video} />
              </div>
            ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Events;
