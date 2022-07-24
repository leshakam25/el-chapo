import { CardMedia } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";

const LogoButton = (props) => {
  return (
    <motion.a
      whileHover={{
        scale: 1.1,
      }}
      href={props.href}
    >
      <CardMedia component="img" src={props.logo} />
    </motion.a>
  );
};

export default LogoButton;
