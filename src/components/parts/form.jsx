import { Box, Typography, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormButton from "./buttons/formButton";
import PrivacyButton from "./buttons/privacyButton";
import s from "./parts.module.css";
import { motion } from "framer-motion";

const ModalForm = () => {
    const {
        register,
        formState: { errors, isValid },
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

        console.log(body);

        fetch("/ajax.php", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        })
            .then((result) => (result.ok === true ? result.text() : false))
            .then((data) => {
                console.log("Success", data);
                reset();
            })
            .catch((error) => console.error("Error", error));
    };

    return (
        <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
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
                                    value: 6,
                                    message: "Минимум 6 символов",
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
                                    fontWeight: "Bold",
                                    color: "black",
                                }}
                                onClick={countDown}
                            >
                                -
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
                            <Button
                                size="large"
                                sx={{ color: "black", fontWeight: "Bold" }}
                                onClick={countUp}
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
                    <FormButton title="Забронировать" />
                    <Typography
                        textAlign="center"
                        fontFamily="Oswald"
                        fontWeight="light"
                        sx={{ pt: 3 }}
                        variant="body2"
                        fontSize="12px"
                    >
                        Нажимая кнопку отправить заявку вы соглашаетесь с нашей
                        <PrivacyButton
                            title="политикой конфеденциальности"
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
