import React from "react";
import s from "../parts.module.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ModalForm from "../form";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 360,
  bgcolor: "background.paper",
  boxShadow: 24,
  border: "none",
  p: "52px 48px",
  borderRadius: 1,
};

export const RegistryButton = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box sx={{ margin: "12px 0" }}>
      <button onClick={handleOpen} className={s.yellowButton}>
        {props.title}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ModalForm />
        </Box>
      </Modal>
    </Box>
  );
};
export default RegistryButton;