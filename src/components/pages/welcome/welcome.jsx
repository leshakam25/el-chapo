import { motion } from "framer-motion";
import { CardMedia, Box, Container, Typography } from "@mui/material";
import React from "react";
import Timer from "./timer";
import logo from "../../../image/logo2.svg";
import girlMono from "../../../image/girl-mono.svg";
import girlColor from "../../../image/girl-color.svg";
import RegistryButton from "../../parts/buttons/registryButton";

const textAnimation = {
  hidden: { x: -100, opacity: 0 },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 },
  }),
};

const Welcome = () => {
  return (
    <Container
      id="welcome"
      maxWidth="xl"
      sx={{ position: "relative", marginTop: "80px" }}
    >
      <motion.div initial="hidden" whileInView="visible">
        {/* background */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 6 }}
        >
          <Box
            sx={{
              position: "absolute",
              left: "17%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CardMedia component="img" src={girlMono} />
              <CardMedia component="img" src={girlColor} sx={{ ml: "-1px" }} />
            </Box>
          </Box>
        </motion.div>
        <Box
          sx={{
            minHeight: "1024px",
            color: "white",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
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
              <motion.div custom={1} variants={textAnimation}>
                <CardMedia
                  component="img"
                  src={logo}
                  sx={{ maxWidth: "300px" }}
                ></CardMedia>
              </motion.div>
              {/* timer */}
              <motion.div custom={2} variants={textAnimation}>
                <Box>
                  <Timer />
                </Box>
              </motion.div>
            </Box>
            {/* right */}
            <motion.div custom={1} variants={textAnimation}>
              <Box
                sx={{
                  maxWidth: "620px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "left",
                  position: "releative",
                  bgcolor: "black",
                  p: "20px 40px",
                }}
              >
                <motion.div custom={1} variants={textAnimation}>
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
                <motion.div custom={2} variants={textAnimation}>
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
                    вкраплениями фанка и диско захлестнут улицу любого города,
                    где есть бар EL Chapo
                  </Typography>
                </motion.div>
                <motion.div custom={3} variants={textAnimation}>
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
                </motion.div>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Welcome;
