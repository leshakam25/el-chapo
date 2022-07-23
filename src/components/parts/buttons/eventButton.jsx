import React from "react";
import { motion } from "framer-motion";
import s from "../parts.module.css";

const EventButton = (props) => {
  return (
    <motion.button
      onClick={props.click}
      whileHover={{
        scale: 1.3,
        color: "#f2ee6f",
      }}
      className={s.eventButton}
    >
      {props.title}
    </motion.button>
  );
};

export default EventButton;
