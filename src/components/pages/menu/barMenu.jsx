import { Box, Container, Typography, CardMedia } from "@mui/material";
import React from "react";
import chief from "../../../image/chief.webp";

const BarMenu = () => {
  return (
    <Container maxWidth="xl" sx={{ marginY: "120px " }}>
      <Box
        sx={{
          color: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {/* left */}
        <Box sx={{ maxWidth: "400px" }}>
          <Box>
            <Typography
              sx={{ margin: "12px 0" }}
              variant="h2"
              fontWeight="bold"
            >
              НАШЕ МЕНЮ
            </Typography>
          </Box>
          <Box sx={{ height: "3px", bgcolor: "#f2ee6f", width: "220px" }}></Box>
          <Typography sx={{ margin: "12px 0" }} variant="body1">
            <Box>
              Подача эксклюзивных блюд от нашего шеф-повара, перенесёт вас в
              изысканный мир мексиканской кухни
              <br />
              <br />
              Ждите новое меню в ближайшее время!
            </Box>
          </Typography>
        </Box>
        {/* right */}
        <Box sx={{ maxWidth: "400px" }}>
          <CardMedia
            component="img"
            src={chief}
            sx={{ width: "400px" }}
          ></CardMedia>
          <Typography variant="h5">Дэвид Алехандро</Typography>
          <Typography variant="body1">
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
