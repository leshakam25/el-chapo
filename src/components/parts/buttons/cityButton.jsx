import React from "react";
import s from "../parts.module.css";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const CityButton = (props) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.1,
        color: "#f2ee6f",
      }}
    >
      <Link className={s.cityButton} to={props.link}>
        <Typography variant="h4" fontWeight="bold" fontFamily="Oswald">
          {props.title}
        </Typography>
      </Link>
    </motion.div>
  );
};

export default CityButton;
