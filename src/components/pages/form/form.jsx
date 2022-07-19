import { Box, Container, Typography, TextField } from "@mui/material";
import React from "react";
import { LinkButton, OutlinedButton } from "../../parts/buttons";

const Form = () => {
  return (
    <Container>
      <Box
        sx={{
          bgcolor: "white",
          padding: "50px",
          maxWidth: "400px",
          margin: "0 auto",
          borderRadius: 1,
        }}
      >
        <Typography variant="h4">Заявка на бронь столика</Typography>
        <Typography variant="subtitle1">Ждём вас с нетерпением</Typography>
        <form>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ marginY: 2 }}>
              <Typography>Как вас зовут?</Typography>
              <TextField
                id="outlined-basic"
                Box="Имя"
                variant="outlined"
                fullWidth
              />
            </Box>
            <Box sx={{ marginY: 2 }}>
              <Typography>Ваш номер телефона</Typography>
              <TextField
                id="outlined-basic"
                Box="+7(999)999-99-99"
                variant="outlined"
                fullWidth
              />
            </Box>
            <Box sx={{ marginY: 2 }}>
              <Typography>Сколько человек?</Typography>
            </Box>
            <OutlinedButton title="Отправить заявку" />
            <Typography>
              Нажимая кнопку отправить заявку вы соглашаетесь с нашей{" "}
              <LinkButton
                link="http://elchapogrande.store/grande-rf/privacy"
                title="политикой конфиденциальности"
              />
            </Typography>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Form;
