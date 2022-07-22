import React from "react";
import s from "../parts.module.css";
import { motion } from "framer-motion";

const MenuButton = (props) => {
  return (
    <motion.a
      whileHover={{
        scale: 1.3,
        color: "#f2ee6f",
      }}
      className={s.menuButton}
      href={props.link}
    >
      <button>{props.title}</button>
    </motion.a>
  );
};

export default MenuButton;
