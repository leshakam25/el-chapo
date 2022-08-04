import { Box, Container, Typography, CardMedia } from "@mui/material";
import React from "react";
// import { motion } from "framer-motion";
import BarMenuButton from "../../parts/buttons/barMenuButton";

const BarMenu = () => {
  // const textAnimation = {
  //   hidden: { x: 100, opacity: 0 },
  //   visible: (custom) => ({
  //     x: 0,
  //     opacity: 1,
  //     transition: { duration: custom * 0.3, delay: custom * 0.2 },
  //   }),
  // };
  return (
    <Container id="menu" maxWidth="xl" sx={{ paddingTop: "80px" }}>
      {/* <motion.div initial="hidden" whileInView="visible"> */}
      <Box
        sx={{
          color: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        {/* left */}
        {/* <motion.div custom={1} variants={textAnimation}> */}
        <Box sx={{ maxWidth: "720px" }}>
          <Box>
            <Typography
              sx={{ margin: "12px 0", fontFamily: "Oswald" }}
              variant="h2"
              fontWeight="bold"
            >
              НАШЕ МЕНЮ
            </Typography>
          </Box>
          <Box sx={{ height: "3px", bgcolor: "#f2ee6f", width: "315px" }}></Box>
          <Box sx={{ margin: "12px 0" }}>
            <Typography
              fontFamily="Oswald"
              variant="h4"
              textAlign="justify"
              color="#f2ee6f"
              fontWeight="bold"
            >
              -30% на всё меню!
            </Typography>
            <br />
            <Typography
              fontFamily="Oswald"
              variant="body1"
              textAlign="justify"
              gutterBottom
              fontSize="24px"
            >
              Каждый будний день с 12:00 до 17:00. <br />
              <br /> Поработали над отдачей, чтобы исключить задержки. <br />{" "}
              <br />
              Топовые блюда от нашего шефа по лучшей цене???
            </Typography>
            <Typography fontFamily="Oswald" variant="h5" textAlign="justify">
              С-ПБ / Литейный, 57
            </Typography>
            <BarMenuButton title="Смотреть меню Эль-Чапо" />
          </Box>
        </Box>
        {/* </motion.div> */}

        {/* <motion.div custom={2} variants={textAnimation}> */}
        <Box sx={{ maxWidth: "500px", m: 12 }}>
          <Typography variant="h4" fontFamily="Oswald" gutterBottom>
            Дэвид Алехандро
          </Typography>
          <CardMedia
            component="img"
            src="https://i.ibb.co/9hgPtVh/chief.webp"
            sx={{ maxWidth: "600px", my: 3 }}
          ></CardMedia>

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
        {/* </motion.div> */}
      </Box>
      {/* </motion.div> */}
    </Container>
  );
};

export default BarMenu;
