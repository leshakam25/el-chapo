import s from "./welcome.module.css";
import { CardMedia, Box, Container, Typography } from "@mui/material";
import React from "react";
import Timer from "./timer";
import logo from "../../../image/logo2.svg";
import RegistryButton from "../../parts/buttons/registryButton";
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <Container className={s.content} maxWidth="xl" sx={{ marginTop: "-12px" }}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
      >
        <Box
          sx={{
            minHeight: "100vh",
            color: "white",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{}}>
            {/* content */}
            <Box
              sx={{
                width: "70vw",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              {/* left */}
              <Box
                sx={{
                  paddingTop: "320px",
                  paddingRight: "190px",
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
                  sx={{ maxWidth: "300px" }}
                ></CardMedia>
                {/* timer */}
                <Box>
                  <Timer />
                </Box>
              </Box>
              {/* right */}
              <Box
                sx={{
                  maxWidth: "560px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "left",
                }}
              >
                <Typography
                  variant="h2"
                  gutterBottom
                  fontFamily="Oswald"
                  fontWeight="450"
                  sx={{ margin: "12px 0" }}
                >
                  ДОБРО ПОЖАЛОВАТЬ В МЕКСИКУ!
                </Typography>
                <Typography
                  variant="body1"
                  fontFamily="Oswald"
                  gutterBottom
                  sx={{ margin: "12px 0" }}
                >
                  EL Chapo – это иммерсивный бар, где каждый может погрузиться в
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
                  fontFamily="Oswald"
                  variant="body1"
                  fontWeight="normal"
                >
                  Мы находимся: <br /> Литейный проспект, 57
                </Typography>
                <RegistryButton title="Забронировать столик" />
              </Box>
            </Box>
          </Box>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Welcome;
