import React from "react";
import { Container, Typography, Box, CardMedia } from "@mui/material";
import { motion } from "framer-motion";
// import RegistryButton from "../../parts/buttons/registryButton";
import logo from "../../../image/logoYellow.svg";

const textAnimation = {
  hidden: { x: -10, opacity: 0 },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { duration: custom * 0.5, delay: custom * 0.2 },
  }),
};

const WelcomeLomo = () => {
  return (
    <Container
      id="welcome"
      maxWidth="xl"
      sx={{ position: "relative", marginTop: "80px", height: "90vh" }}
    >
      {/* backGround */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 4 }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "15%",
            zIndex: "10",
          }}
        >
          <CardMedia
            height="900px"
            component="img"
            src="https://i.postimg.cc/cL0JVnCG/bg-spb-lomo-png.png"
          />
        </Box>
      </motion.div>
      {/* content */}
      <motion.div initial="hidden" whileInView="visible">
        <motion.div custom={1} variants={textAnimation}>
          <Box
            sx={{
              height: "90vh",
              width: "70vw",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              zIndex: "100",
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
                zIndex: "100",
              }}
            >
              <motion.div custom={1} variants={textAnimation}>
                <CardMedia
                  component="img"
                  src={logo}
                  sx={{ maxWidth: "300px" }}
                ></CardMedia>
              </motion.div>{" "}
            </Box>
            {/* right */}
            <Box
              sx={{
                maxWidth: "620px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                flexWrap: "wrap",
                alignItems: "left",
                position: "releative",
                p: "20px 40px",
                bgcolor: "black",
              }}
            >
              <Typography
                variant="h2"
                color="white"
                fontFamily="oswald"
                fontWeight="bold"
              >
                МЕКСИКА
                <br />
                МЕКСИКА
                <br /> МЕКСИКА
              </Typography>
              <br />
              <Typography
                variant="body1"
                color="white"
                fontFamily="oswald"
                fontWeight="light"
                fontSize="22px"
              >
                Бар на Ломоносова про аутентичную Мексику <br /> В меню
                классические блюда в авторской вариации (тако, буррито,
                кесадилья) и шумные вечеринки под латино до утра. Для любителей
                попикантнее - в баре также подают самую острую чимичангу в
                городе, правда съесть ее можно только подписав специальный
                контракт.
              </Typography>
            </Box>
          </Box>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default WelcomeLomo;
