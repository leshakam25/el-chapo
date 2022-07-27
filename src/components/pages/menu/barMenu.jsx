import { Box, Container, Typography, CardMedia } from "@mui/material";
import React from "react";
import chief from "../../../image/chief.webp";
import { motion } from "framer-motion";

const BarMenu = () => {
  const textAnimation = {
    hidden: { x: 100, opacity: 0 },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      transition: { delay: custom * 0.2 },
    }),
  };
  return (
    <Container id="menu" maxWidth="xl" sx={{ paddingTop: "80px" }}>
      <motion.div initial="hidden" whileInView="visible">
        <Box
          sx={{
            color: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {/* left */}
          <motion.div custom={1} variants={textAnimation}>
            <Box sx={{ maxWidth: "320px" }}>
              <Box>
                <Typography
                  sx={{ margin: "12px 0", fontFamily: "Oswald" }}
                  variant="h2"
                  fontWeight="bold"
                >
                  НАШЕ МЕНЮ
                </Typography>
              </Box>
              <Box
                sx={{ height: "3px", bgcolor: "#f2ee6f", width: "220px" }}
              ></Box>

              <Box sx={{ margin: "12px 0" }}>
                <Typography
                  fontFamily="Oswald"
                  fontWeight="light"
                  variant="body1"
                  fontSize="18px"
                  textAlign="justify"
                >
                  Подача эксклюзивных блюд от нашего шеф-повара, перенесёт вас в
                  изысканный мир мексиканской кухни
                  <br />
                  <br />
                  Ждите новое меню в ближайшее время!{" "}
                </Typography>
              </Box>
            </Box>
          </motion.div>
          {/* right */}
          <motion.div custom={2} variants={textAnimation}>
            <Box sx={{ maxWidth: "400px" }}>
              <CardMedia
                component="img"
                src={chief}
                sx={{ width: "400px" }}
              ></CardMedia>
              <Typography variant="h5" fontFamily="Oswald">
                Дэвид Алехандро
              </Typography>
              <Typography
                textAlign="justify"
                variant="body1"
                fontFamily="Oswald"
                fontWeight="light"
              >
                Шеф-повар <br />
                <br /> "Я приехал из Мексики, чтобы отправить ваши вкусовые
                рецепторы в путешествие по Латинской Америке. Далеко ходить не
                потребуется"
              </Typography>
            </Box>
          </motion.div>
        </Box>
      </motion.div>
    </Container>
  );
};

export default BarMenu;
