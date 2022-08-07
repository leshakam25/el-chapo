import React from "react";
import { Box, Typography, CardMedia } from "@mui/material";

const Cheif = () => {
  return (
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
        <br /> "Я приехал из Мексики, чтобы отправить ваши вкусовые рецепторы в
        путешествие по Латинской Америке. Далеко ходить не потребуется"
      </Typography>
    </Box>
  );
};

export default Cheif;
