import React from "react";
import s from "../parts.module.css";
import { motion } from "framer-motion";

const SocialButton = (props) => {
  return (
    <motion.a
      whileHover={{
        color: "#f2ee6f",
      }}
      className={s.socialButton}
      href={props.link}
      target="blank"
    >
      {props.title}
    </motion.a>
  );
};

export default SocialButton;
