import { motion } from "framer-motion";
import { CardMedia, Box, Container, Typography } from "@mui/material";
import React from "react";
import Timer from "./timer";
import RegistryButton from "../../parts/buttons/registryButton";

const textAnimation = {
  hidden: { y: -10, opacity: 0 },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { duration: custom * 0.5, delay: custom * 0.2 },
  }),
};

const Welcome = (props) => {
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
          transition={{ duration: 4 }}
        >
          <Box
            sx={{
              position: "absolute",
              left: "15%",
              display: { xs: "none", md: "flex" },
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
              <CardMedia height="900px" component="img" src={props.bg} />
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
              flexWrap: "wrap",
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
                  src={props.logo}
                  sx={{ maxWidth: "300px" }}
                ></CardMedia>
              </motion.div>
              {/* timer */}
              <motion.div custom={5} variants={textAnimation}>
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
                  flexWrap: "wrap",
                  alignItems: "left",
                  position: "releative",
                  p: { xs: "0", md: "20px 40px" },
                  bgcolor: "black",
                }}
              >
                <motion.div custom={1} variants={textAnimation}>
                  <Typography
                    fontSize={{ xs: "32px", md: "48px" }}
                    gutterBottom
                    fontFamily="Oswald"
                    fontWeight="450"
                    sx={{ margin: "12px 0" }}
                  >
                    {props.title}
                  </Typography>
                </motion.div>
                <motion.div custom={2} variants={textAnimation}>
                  <Typography
                    variant="body1"
                    fontFamily="Oswald"
                    gutterBottom
                    textAlign="justify"
                    sx={{ margin: "12px 0" }}
                  >
                    {props.subtitle} <br /> {props.subtitle2}
                  </Typography>
                </motion.div>
                <motion.div custom={3} variants={textAnimation}>
                  {/* Yellow line */}
                  <Box
                    sx={{
                      height: "3px",
                      bgcolor: "#f2ee6f",
                      maxWidth: "100%",
                      margin: "12px 0",
                    }}
                  ></Box>
                  <Typography
                    sx={{ margin: "12px 0" }}
                    fontFamily="Oswald"
                    variant="body1"
                    fontWeight="normal"
                  >
                    Мы находимся: <br /> {props.adress}
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
