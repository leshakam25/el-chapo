import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import LinkButton from "./buttons/linkButton";
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

  const [peopleCount, setPeopleCount] = useState(0);

  const countDown = () => {
    setPeopleCount(peopleCount - 1);
  };

  const countUp = () => {
    setPeopleCount(peopleCount + 1);
  };

  return (
    <div>
      <Typography fontFamily="Oswald" variant="h4" textAlign="center">
        Заявка на бронь столика
      </Typography>
      <Typography
        fontFamily="Oswald"
        fontWeight="light"
        variant="subtitle2"
        textAlign="center"
        gutterBottom
      >
        Ждём вас с нетерпением!
      </Typography>

      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
          }}
        >
          <Box sx={{ pt: "12px" }}>
            <Typography
              fontFamily="Oswald"
              fontWeight="light"
              sx={{ pb: 1 }}
              variant="body2"
            >
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
            {errors?.firstName && (
              <Typography
                fontFamily="Oswald"
                fontWeight="light"
                sx={{ pb: 1 }}
                variant="body2"
              >
                Введите имя
              </Typography>
            )}
          </Box>
          <Box sx={{ pt: "12px" }}>
            <Typography
              fontFamily="Oswald"
              fontWeight="light"
              sx={{ pb: 1 }}
              variant="body2"
            >
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
            {errors?.phoneNumber && (
              <Typography
                fontFamily="Oswald"
                fontWeight="light"
                sx={{ pb: 1 }}
                variant="body2"
              >
                Введите номер
              </Typography>
            )}
          </Box>
          <Box sx={{ pt: "12px" }}>
            <Typography
              fontFamily="Oswald"
              fontWeight="light"
              sx={{ pb: 1 }}
              variant="body2"
              value={peopleCount}
            >
              Сколько человек
            </Typography>
            <Box>
              <Button
                sx={{ fontFamily: "Oswald", fontWeight: "Bold" }}
                onClick={countDown}
              >
                -
              </Button>
              <TextField
                sx={{ width: "60px" }}
                color="warning"
                size="small"
                {...register("number", {
                  required: true,
                })}
                value={peopleCount}
              />
              <Button
                sx={{ fontFamily: "Oswald", fontWeight: "Bold" }}
                onClick={countUp}
                n
              >
                +
              </Button>
            </Box>
          </Box>
          <Box sx={{ height: "20px", pb: "12px", color: "#8a2727" }}>
            {errors?.number && (
              <Typography
                fontFamily="Oswald"
                fontWeight="light"
                sx={{ pb: 1 }}
                variant="body2"
              >
                Введите количество
              </Typography>
            )}
          </Box>

          <input type="submit" disabled={!isValid} />

          <Typography
            textAlign="center"
            fontFamily="Oswald"
            fontWeight="light"
            sx={{ pt: 3 }}
            variant="body2"
            fontSize="12px"
          >
            Нажимая кнопку отправить заявку вы соглашаетесь с нашей
            <LinkButton
              link="http://elchapogrande.store/grande-rf/privacy"
              title=" политикой конфиденциальности"
            />
          </Typography>
        </Box>
      </form>
    </div>
  );
};

export default ModalForm;
