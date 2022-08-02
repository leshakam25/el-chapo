import React from "react";
import { Container, Typography, Box, CardMedia } from "@mui/material";
import { motion } from "framer-motion";
import RegistryButton from "../../parts/buttons/registryButton";
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
      <motion.div initial="hidden" whileInView="visible">
        {/* backGround */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 4 }}
        >
          <Box
            sx={{
              position: "absolute",
              left: "22%",
              display: "flex",
              flexDirection: "row",
              flexWrap: "nowrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CardMedia
              sx={{ zIndex: -1 }}
              height="900px"
              component="img"
              src="https://i.ibb.co/7R1R0XL/colorBg.jpg"
            />
          </Box>
        </motion.div>
        {/* content */}
        <motion.div custom={1} variants={textAnimation}>
          <Box
            sx={{
              height: "90vh",
              width: "70vw",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
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
              <CardMedia sx={{ height: "50%" }} component="img" src={logo} />
            </Box>
            {/* right */}
            <Box
              sx={{
                maxWidth: "400px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "black",
                p: "32px 40px",
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
            </Box>
          </Box>
        </motion.div>
      </motion.div>
    </Container>
  );
};

export default WelcomeLomo;
