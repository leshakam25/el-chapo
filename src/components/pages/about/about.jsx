import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const textAnimation = {
  hidden: { x: -100, opacity: 0 },
  visible: (custom) => ({
    x: 0,
    opacity: 1,
    transition: { duration: custom * 0.3, delay: custom * 0.2 },
  }),
};

const About = () => {
  return (
    <Container id="about" sx={{ paddingTop: "80px" }} maxWidth="xl">
      <motion.div initial="hidden" whileInView="visible">
        <Box sx={{ color: "white" }}>
          {" "}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 6 }}
          >
            <Typography
              sx={{ margin: "12px 0" }}
              fontFamily="Oswald"
              fontWeight="bold"
              variant="h2"
            >
              El chapo
            </Typography>
          </motion.div>
          <Box
            sx={{ height: "3px", bgcolor: "#f2ee6f", maxWidth: "205px" }}
          ></Box>
          <motion.div custom={1} variants={textAnimation}>
            <Typography
              sx={{ margin: "12px 0" }}
              fontFamily="Oswald"
              fontWeight="bold"
              variant="h2"
            >
              Открытие El Chapo Grande в Санкт-Петербурге!{" "}
            </Typography>
          </motion.div>
          <motion.div custom={1} variants={textAnimation}>
            <Typography
              sx={{ margin: "12px 0" }}
              fontFamily="Oswald"
              fontWeight="light"
              variant="body1"
              fontSize="26px"
              textAlign="justify"
            >
              27 июля в Северной Столице открылся Новый трёхэтажный ресторан, с
              дневной посадкой и бóльшим упором на кухню. <br /> Гранде обещает
              стать самым ярким проектом и одним из самых востребованных в
              городе. <br /> Мы открывается в полдень. До 16:00 в ресторане
              скидка на всё меню, Вечерами здесь танцуют, по выходным играет
              живая музыка. <br /> В коктейльной карте представлена большая
              вариация коктейлей и необычных
            </Typography>
          </motion.div>
        </Box>
      </motion.div>
    </Container>
  );
};

export default About;
