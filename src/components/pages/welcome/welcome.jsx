import s from "./welcome.module.css";
import { CardMedia, Box, Container, Typography } from "@mui/material";
import React from "react";
import Timer from "./timer";
import logo from "../../../image/logo2.svg";
import RegistryButton from "../../parts/buttons/registryButton";
import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <Container id="welcome" className={s.content} maxWidth="xl" sx={{}}>
      <Box
        sx={{
          minHeight: "1024px",
          color: "white",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
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
              position: "releative",
            }}
          >
            <motion.div
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
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
            </motion.div>
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <Typography
                variant="body1"
                fontFamily="Oswald"
                gutterBottom
                sx={{ margin: "12px 0" }}
              >
                EL Chapo Grande – это иммерсивный бар, где каждый может
                погрузиться в мир мексиканской культуры и её незабываемого
                колорита <br />
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
            </motion.div>

            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <Typography
                sx={{ margin: "12px 0" }}
                fontFamily="Oswald"
                variant="body1"
                fontWeight="normal"
              >
                Мы находимся: <br /> Литейный проспект, 57
              </Typography>
              <RegistryButton title="Забронировать столик" />
            </motion.div>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Welcome;
