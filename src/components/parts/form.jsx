import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormButton from "./buttons/formButton";
import PrivacyButton from "./buttons/privacyButton";
import s from "./parts.module.css";
import { motion } from "framer-motion";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

const ModalForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
  });

  const [peopleCount, setPeopleCount] = useState(1);
  const countDown = () => {
    setPeopleCount((prevState) => prevState - 1);
  };

  const countUp = () => {
    setPeopleCount((prevState) => prevState + 1);
  };

  const onSubmit = (data) => {
    const body = {
      ...data,
      number: peopleCount,
    };

    fetch("/ajax.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((result) => (result.ok === true ? result.text() : false))
      .then((data) => {
        reset();
        alert("Бронь создана!");
      })
      .catch((error) => console.error("Error", error));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Typography
        fontFamily="Oswald"
        textAlign="center"
        sx={{ fontSize: { xs: 20, sm: 40 } }}
      >
        Заявка на бронь столика
      </Typography>
      <Typography
        fontFamily="Oswald"
        fontWeight="light"
        variant="subtitle2"
        textAlign="center"
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
          <Box sx={{ pt: "4px" }}>
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
          <Box sx={{ height: "10px", pb: "4px", color: "#8a2727" }}>
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
          <Box sx={{ pt: 1.5 }}>
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
                  value: 6,
                  message: "Минимум 6 символов",
                },
              })}
            />
          </Box>
          <Box sx={{ height: "10px", pb: "4px", color: "#8a2727" }}>
            {errors?.phoneNumber && (
              <Typography
                fontFamily="Oswald"
                fontWeight="light"
                variant="body2"
              >
                Минимум 6 символов
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
              Сколько человек
            </Typography>

            {/* people count */}
            <Box>
              <Button
                size="large"
                sx={{
                  color: "black",
                }}
                onClick={countDown}
              >
                <RemoveCircleOutlineOutlinedIcon />
              </Button>
              <TextField
                sx={{ width: "60px" }}
                color="warning"
                size="small"
                value={peopleCount}
                {...register("number", {
                  required: true,
                })}
              />
              <Button size="large" sx={{ color: "black" }} onClick={countUp}>
                <AddCircleOutlineOutlinedIcon />
              </Button>
            </Box>
          </Box>
          <Box sx={{ height: "20px", pb: "12px", color: "#8a2727" }}>
            {errors?.number && (
              <Typography
                fontFamily="Oswald"
                fontWeight="light"
                sx={{}}
                variant="body2"
              >
                Введите количество
              </Typography>
            )}
          </Box>
          <FormButton title="Забронировать" />
          <Typography
            textAlign="center"
            fontFamily="Oswald"
            fontWeight="light"
            sx={{ pt: 1, lineHeight: "100%" }}
            variant="body2"
            fontSize="12px"
          >
            Нажимая кнопку отправить заявку вы соглашаетесь с нашей
            <PrivacyButton
              title="политикой конфиденциальности"
              color="black"
              fz="11px"
            />
          </Typography>
        </Box>
      </form>
    </motion.div>
  );
};

export default ModalForm;
