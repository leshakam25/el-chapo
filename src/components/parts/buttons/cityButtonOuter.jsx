import React from "react";
import s from "../parts.module.css";
import { motion } from "framer-motion";

const CityButton = (props) => {
  return (
    <a href={props.link} className={s.cityButtonOuter}>
      <motion.p
        whileHover={{
          scale: 1.1,
          color: "#f2ee6f",
        }}
      >
        {props.title}
      </motion.p>
    </a>
  );
};

export default CityButton;
