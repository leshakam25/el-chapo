import { Box, Container, Typography, CardMedia } from "@mui/material";
import React from "react";
import chief from "../../../image/chief.webp";
import { motion } from "framer-motion";

const BarMenu = () => {
  const pVariants = {
    hidden: { x: -200, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  return (
    <Container id="menu" maxWidth="xl" sx={{ marginY: "120px " }}>
      <br />
      <Box
        sx={{
          color: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {/* left */}
        <motion.div
          initial={"hidden"}
          animate={"visible"}
          transition={{
            delay: 0.5,
            duration: 0.2,
          }}
          variants={pVariants}
        >
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
      </Box>
    </Container>
  );
};

export default BarMenu;
