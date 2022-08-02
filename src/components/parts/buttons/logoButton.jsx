import React from "react";
import { motion } from "framer-motion";
import s from "../parts.module.css";

const LogoButton = (props) => {
  return (
    <a className={s.LogoButton} href={props.href}>
      <motion.img
        whileHover={{
          scale: 1.2,
          rotate: -3,
        }}
        src={props.logo}
        alt="no logo"
      />
    </a>
  );
};

export default LogoButton;
