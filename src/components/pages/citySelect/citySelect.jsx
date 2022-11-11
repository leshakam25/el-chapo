import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import CityButton from "../../parts/buttons/cityButton";
import CityButtonOuter from "../../parts/buttons/cityButtonOuter";
import CookieAlert from "../../parts/cookieNotice";

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
        background: 'url("https://i.postimg.cc/tJBnR0Ys/scullBg.png")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
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
          <CityButtonOuter
            title="Санкт-Петербург Grande"
            link="https://elchapogrande.store/"
          />
        </motion.div>
        <motion.div custom={3} variants={textAnimation}>
          <CityButtonOuter
            title="Санкт-Петербург Lomonosova"
            link="http://elchapo-lomo.tilda.ws"
          />
        </motion.div>
        <motion.div custom={4} variants={textAnimation}>
          <CityButtonOuter
            title="Краснодар"
            link="http://elchapo-krd.tilda.ws/"
          />
        </motion.div>
        <motion.div custom={5} variants={textAnimation}>
          <CityButtonOuter title="Новороссийск" link="http://elchaponvrsk.ru" />
        </motion.div>
      </motion.div>
      <CookieAlert />
    </Box>
  );
};

export default CitySelect;
