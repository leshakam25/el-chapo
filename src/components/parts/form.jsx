import { Box, Typography, TextField, Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import s from "./parts.module.css";

const ModalForm = () => {
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div>
      <Typography variant="h5" textAlign="center">
        Заявка на бронь столика
      </Typography>
      <Typography variant="subtitle2" textAlign="center" gutterBottom>
        Ждём вас с нетерпением!
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <Box sx={{ pt: "12px" }}>
            <Typography sx={{ pb: 1 }} variant="body2">
              Как вас зовут?
            </Typography>
            <TextField
              color="warning"
              size="small"
              fullWidth
              label="Имя"
              {...register("firstName", {
                required: true,
              })}
            />
          </Box>
          <Box sx={{ height: "20px", pb: "12px", color: "#8a2727" }}>
            {errors?.firstName && <p>Введите имя</p>}
          </Box>
          <Box sx={{ pt: "12px" }}>
            <Typography sx={{ pb: 1 }} variant="body2">
              Ваш номер телефона
            </Typography>
            <TextField
              color="warning"
              fullWidth
              size="small"
              label="+7(999)999-99-99"
              {...register("phoneNumber", {
                required: true,
                minLength: {
                  value: 7,
                  message: "Минимум 7 символов",
                },
              })}
            />
          </Box>
          <Box sx={{ height: "20px", pb: "12px", color: "#8a2727" }}>
            {errors?.phoneNumber && <p>Введите номер</p>}
          </Box>
          <Box sx={{ pt: "12px" }}>
            <Typography sx={{ pb: 1 }} variant="body2">
              Сколько человек
            </Typography>
            <TextField
              color="warning"
              fullWidth
              size="small"
              label="Количество"
              {...register("number", {
                required: true,
              })}
            />
          </Box>
          <Box sx={{ height: "20px", pb: "12px", color: "#8a2727" }}>
            {errors?.number && <p>Введите Количество</p>}
          </Box>

          <Button
            className={s.outlinedButton}
            type="submit"
            disabled={!isValid}
            variant="outlined"
            color="warning"
            sx={{ color: "black" }}
          >
            Отправить заявку
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default ModalForm;
