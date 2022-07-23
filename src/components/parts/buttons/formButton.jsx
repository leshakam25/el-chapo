import React from "react";
import s from "../parts.module.css";
import { motion } from "framer-motion";

const FormButton = (props) => {
  return (
    <motion.button
      type="submit"
      whileHover={{
        scale: 1.1,
      }}
      className={s.formButton}
    >
      {props.title}
    </motion.button>
  );
};

export default FormButton;
