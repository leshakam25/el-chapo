import React from "react";
import s from "../parts.module.css";
import { motion } from "framer-motion";

const MenuButton = (props) => {
  return (
    <motion.a
      whileHover={{
        scale: 1.1,
        color: "#f2ee6f",
        textDecoration: "underline",
      }}
      transition={{
        duration: 0.3,
      }}
      className={s.menuButton}
      href={props.href}
    >
      {props.title}
    </motion.a>
  );
};

export default MenuButton;
