import { Box, Container, Typography, TextField } from "@mui/material";
import React from "react";
import { OutlinedButton } from "../../parts/buttons";

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
            <label>
              <Typography>Как вас зовут?</Typography>
              <TextField id="outlined-basic" label="Имя" variant="outlined" />
            </label>
            <label>
              <Typography>Ваш номер телефона</Typography>
              <TextField
                id="outlined-basic"
                label="+7(999)999-99-99"
                variant="outlined"
              />
            </label>
            <label>
              <Typography>Сколько человек?</Typography>
            </label>
            <OutlinedButton title="Отправить заявку" />
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Form;
