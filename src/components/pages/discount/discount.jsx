import { Box, CardMedia, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import Carousel from "better-react-carousel";
import BlockTitle from "../../parts/blockTitle";
import ReactPlayer from "react-player";

const Discount = (props) => {
  const [upcomingEvents] = useState(props.discountData);

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
    <Container id="discount" maxWidth="xl">
      <BlockTitle title="АКЦИИ" />
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
                {/* <Box
                  key={"video" + i}
                  sx={{ border: "2px solid white", width: "300px" }}
                >
                  <ReactPlayer height="540px" width="100%" url={el.video} />
                </Box> */}
                <Box>
                  <CardMedia
                    sx={{
                      mt: { xs: 4, md: 0 },
                      maxHeight: "700px",
                      maxWidth: "400px",
                    }}
                    component="img"
                    src={el.img}
                  />
                </Box>
              </Box>
            </Carousel.Item>
          ))}
      </Carousel>
    </Container>
  );
};

export default Discount;
