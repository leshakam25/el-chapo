import { CardMedia, Box, Container, Typography } from "@mui/material";
import React from "react";
import women from "../../../image/image_222.webp";
import Timer from "./timer";
import logo from "../../../image/logo2.svg";
import { YellowButton } from "../../parts/buttons";

const Welcome = () => {
  return (
    <Container maxWidth="xl">
      <CardMedia component="img" src={women} sx={{ width: "50%" }}></CardMedia>
      <Box sx={{ color: "white", marginY: "120px" }}>
        <Box>
          {/* women */}

          {/* content */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            {/* left */}
            <Box
              sx={{
                maxWidth: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* logo */}
              <CardMedia
                component="img"
                src={logo}
                sx={{ width: "220px" }}
              ></CardMedia>
              {/* timer */}
              <Box>
                <Timer />
              </Box>
            </Box>
            {/* right */}
            <Box
              sx={{
                maxWidth: "540px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "left",
              }}
            >
              <Typography
                variant="h3"
                fontWeight="bold"
                gutterBottom
                sx={{ margin: "12px 0" }}
              >
                ДОБРО ПОЖАЛОВАТЬ В МЕКСИКУ!
              </Typography>
              <Typography
                variant="body1"
                fontWeight="bold"
                gutterBottom
                sx={{ margin: "12px 0" }}
              >
                L Chapo – это иммерсивный бар, где каждый может погрузиться в
                мир мексиканской культуры и её незабываемого колорита <br />
                <br /> Огненная текила, ароматы специй, ритмы латино с
                вкраплениями фанка и диско захлестнут улицу любого города, где
                есть бар EL Chapo
              </Typography>
              {/* Yellow line */}
              <Box
                sx={{
                  height: "3px",
                  bgcolor: "#f2ee6f",
                  width: "320px",
                  margin: "12px 0",
                }}
              ></Box>
              <Typography
                sx={{ margin: "12px 0" }}
                variant="body1"
                fontWeight="bold"
              >
                Мы находимся:Литейный проспект, 57
              </Typography>
              <YellowButton title="Забронировать столик" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Welcome;
