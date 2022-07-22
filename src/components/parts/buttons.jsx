import React from "react";
import s from "./parts.module.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ModalForm from "./form";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

// export const LinkButton = (props) => {
//   return (
//     <a
//       className={s.linkButton}
//       href={props.link}
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       {props.title}
//     </a>
//   );
// };

export const SubmitButton = () => {
  return <div>buttons</div>;
};

export const EventButton = (props) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.3,
        color: "#f2ee6f",
      }}
      className={s.eventButton}
    >
      {props.title}
    </motion.button>
  );
};

// export const OutlinedButton = (props) => {
//   return <button className={s.outlinedButton}> {props.title}</button>;
// };
