import React from "react";
import s from "../parts.module.css";
import { motion } from "framer-motion";

const CityButton = (props) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.1,
        color: "#f2ee6f",
      }}
      className={s.cityButton}
    >
      {props.title}
    </motion.button>
  );
};

export default CityButton;
