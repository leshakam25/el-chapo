import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import CityButton from "../../parts/buttons/cityButton";
import CityButtonOuter from "../../parts/buttons/cityButtonOuter";

const textAnimation = {
  hidden: { x: -20, opacity: 0 },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { duration: custom * 0.3, delay: custom * 0.2 },
  }),
};

const CitySelect = (props) => {
  useEffect(() => {
    if (window.screen.width <= 425) {
      window.location = "http://xn--80avkd2b3af.xn--p1ai/";
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        bgcolor: "black",
      }}
    >
      <motion.div initial="hidden" whileInView="visible">
        <motion.div custom={1} variants={textAnimation}>
          <Typography
            variant="h2"
            fontWeight="bold"
            fontFamily="Oswald"
            color="white"
          >
            Выберите место:
          </Typography>
        </motion.div>
        <motion.div custom={2} variants={textAnimation}>
          <CityButton title="Санкт-Петербург Grande" link="spb-grande" />
        </motion.div>
        <motion.div custom={3} variants={textAnimation}>
          <CityButton title="Санкт-Петербург Lomonosova" link="spb-lomo" />
        </motion.div>
        <motion.div custom={4} variants={textAnimation}>
          <CityButtonOuter
            title="Краснодар"
            link="http://elchapo-krd.tilda.ws/"
          />
        </motion.div>
      </motion.div>
    </Box>
  );
};

export default CitySelect;
