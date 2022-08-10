import { Box, CardMedia, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import EventButton from "../../parts/buttons/eventButton";
import ReactPlayer from "react-player";
import CityButtonOuter from "../../parts/buttons/cityButtonOuter";
import BlockTitle from "../../parts/blockTitle";

const Events = (props) => {
  const [eventVideos] = useState(props.eventVideo);
  const [upcomingEvents] = useState(props.eventData);
  const [currentParty, setCurrentParty] = useState([props.eventData[0]]);

  const handleClick = (id) => {
    setCurrentParty([upcomingEvents.find((e) => e.id === id)]);
  };

  return (
    <Container id="events" maxWidth="xl">
      {/* events */}
      <Box sx={{ height: { xs: "auto", md: "500px" } }}>
        <BlockTitle title="МЕРОПРИЯТИЯ" />
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
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignItems: "start",
                  width: { xs: "auto", md: "1000px" },
                }}
              >
                <Box
                  sx={{
                    maxWidth: "100%",
                    marginRight: { xs: "0", md: "12px" },
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
                    textAlign="justify"
                    sx={{ maxWidth: "500px" }}
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
        <BlockTitle title="НОЧНЫЕ ВЕЧЕРИНКИ" />
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
              <Box sx={{ border: "2px solid white" }} key={"video" + i}>
                <ReactPlayer height="560px" width="315px" url={el.video} />
              </Box>
            ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Events;
