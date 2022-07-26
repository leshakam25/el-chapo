import React from "react";
import s from "../parts.module.css";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const CityButton = (props) => {
  return (
    <motion.a href={props.link} className={s.cityButtonOuter}>
      <motion.div
        whileHover={{
          scale: 1.1,
          color: "#f2ee6f",
        }}
      >
        <Typography variant="h4" fontWeight="bold" fontFamily="Oswald">
          {props.title}
        </Typography>
      </motion.div>
    </motion.a>
  );
};

export default CityButton;
