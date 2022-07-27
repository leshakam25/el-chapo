import React from "react";
import s from "../parts.module.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CityButton = (props) => {
  return (
    <Link className={s.cityButton} to={props.link}>
      <motion.p
        whileHover={{
          scale: 1.1,
          color: "#f2ee6f",
        }}
      >
        {props.title}
      </motion.p>
    </Link>
  );
};

export default CityButton;
