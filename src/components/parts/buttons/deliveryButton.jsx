import React from "react";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

const DeliveryButton = (props) => {
  return (
    <div>
      <motion.button
        style={{
          background: `${props.backgroundColor}`,
          border: `none`,
          outline: `${props.border}`,
          padding: "0 22px",
          margin: "8px 4px",
          textTransform: "uppercase",
          height: "80px",
          width: "100%",
          borderRadius: "4px",
          color: `${props.textColor}`,
          cursor: "pointer",
        }}
        whileHover={{
          border: `${props.hoverBorder}`,
          backgroundColor: `${props.hoverBg}`,
          outline: "2px solid white",
          color: `${props.hoverTextColor}`,
        }}
      >
        <a href="https://elchapogrande.store/menu">
          <Typography
            fontFamily="Oswald"
            fontWeight="700"
            fontSize={{ xs: "14px", md: "18px" }}
          >
            {props.title}
          </Typography>
        </a>
      </motion.button>
    </div>
  );
};

export default DeliveryButton;
