import React from "react";
import { motion } from "framer-motion";
import s from "../parts.module.css";
import { Typography } from "@mui/material";

const EventButton = (props) => {
  const handleChange = (e) => {
    props.click(props.id);
  };

  return (
    <motion.button
      onHoverStart={handleChange}
      id={props.id}
      whileHover={{
        scale: 1.1,
        color: "#f2ee6f",
      }}
      className={s.eventButton}
    >
      <Typography
        fontFamily="Oswald"
        fontSize="24px"
        textAlign="left"
        sx={{ borderBottom: "2px solid white" }}
      >
        {props.title} <br /> {props.date}
      </Typography>
    </motion.button>
  );
};

export default EventButton;
