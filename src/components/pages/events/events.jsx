import { Box, CardMedia, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import Carousel from "better-react-carousel";
import ReactPlayer from "react-player";
import BlockTitle from "../../parts/blockTitle";

const Events = (props) => {
  const [eventVideos] = useState(props.eventVideo);
  const [upcomingEvents] = useState(props.eventData);

  const YellowDot = ({ isActive }) => (
    <span
      style={{
        height: isActive ? "18px" : "12px",
        width: isActive ? "18px" : "12px",
        background: "#f2ee6f",
      }}
    ></span>
  );

  return (
    <Container id="events" maxWidth="xl">
      {/* events */}
      <BlockTitle title="МЕРОПРИЯТИЯ" />
      <br />
      <Carousel
        dot={YellowDot}
        cols={1}
        rows={1}
        gap={10}
        loop
        autoplay={10000}
        showDots
      >
        {upcomingEvents &&
          upcomingEvents.map((el, i) => (
            <Carousel.Item key={"upcomingEvents" + el.id + i}>
              <Box
                sx={{
                  m: { xs: 0, md: 3 },
                  pt: "40px",
                  color: "white",
                  minHeight: "600px",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  alignItems: "start",
                }}
              >
                <Box
                  sx={{
                    maxWidth: "600px",
                    marginRight: { xs: "0", md: "20px" },
                  }}
                >
                  <Typography
                    fontSize={{ xs: "28px", md: "40px" }}
                    fontFamily="Oswald"
                    fontWeight="Bold"
                  >
                    {el.name}
                  </Typography>
                  <Typography
                    fontSize={{ xs: "24px", md: "42px" }}
                    fontFamily="Oswald"
                    fontWeight="Bold"
                    color="#f2ee6f"
                  >
                    {el.date}
                  </Typography>
                  <Typography
                    fontSize="18px"
                    fontFamily="Oswald"
                    fontWeight="light"
                    textAlign="justify"
                  >
                    {el.desc}
                  </Typography>
                </Box>
                {el.img && (
                  <CardMedia
                    sx={{
                      display: { xs: "none", sm: "none", md: "block" },
                      margin: "0 auto",
                      mt: { xs: 4, md: 0 },
                      maxHeight: "700px",
                      maxWidth: { xs: "auto", md: "auto" },
                    }}
                    component="img"
                    src={el.img}
                  />
                )}
                <CardMedia
                  sx={{
                    display: { xs: "none", sm: "none", md: "block" },
                    margin: "0 auto",
                    mt: { xs: 4, md: 0 },
                    maxHeight: "700px",
                    maxWidth: { xs: "auto", md: "auto" },
                  }}
                  component="img"
                  src={el.imgmd}
                />{" "}
                <CardMedia
                  sx={{
                    display: { xs: "none", sm: "block", md: "none" },
                    margin: "0 auto",
                    mt: { xs: 4, md: 0 },
                    maxHeight: "700px",
                    maxWidth: { xs: "auto", md: "auto" },
                  }}
                  component="img"
                  src={el.imgsm}
                />{" "}
                <CardMedia
                  sx={{
                    display: { xs: "block", sm: "none", md: "none" },
                    margin: "0 auto",
                    mt: { xs: 4, md: 0 },
                    maxHeight: "700px",
                    maxWidth: { xs: "auto", md: "auto" },
                  }}
                  component="img"
                  src={el.imgxs}
                />
              </Box>
            </Carousel.Item>
          ))}
      </Carousel>
      {/* night partys */}
      <Box>
        {/* <BlockTitle title="НОЧНЫЕ ВЕЧЕРИНКИ" /> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-around",
            mt: 4,
          }}
        >
          <Carousel
            cols={1}
            rows={1}
            gap={10}
            loop
            autoplay={15000}
            showDots
            hideArrow
            dot={YellowDot}
          >
            {eventVideos &&
              eventVideos.map((el, i) => (
                <Carousel.Item key={"video" + i}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      flexWrap: "wrap",
                      justifyContent: "center",
                      height: "100%",
                      width: "100%",
                    }}
                  >
                    <ReactPlayer height="533px" width="auto" url={el.video} />
                  </Box>
                </Carousel.Item>
              ))}
          </Carousel>
        </Box>
      </Box>
    </Container>
  );
};

export default Events;
