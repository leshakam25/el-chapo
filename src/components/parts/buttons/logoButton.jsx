import React from "react";
import { motion } from "framer-motion";
import s from "../parts.module.css";

const LogoButton = (props) => {
  return (
    <a href={props.href}>
      <motion.img
        className={s.logoButton}
        whileHover={{
          scale: 1.1,
          rotate: -3,
        }}
        src={props.logo}
        alt="no logo"
      />
    </a>
  );
};

export default LogoButton;
