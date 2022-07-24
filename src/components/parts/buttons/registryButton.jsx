import React from "react";
import s from "../parts.module.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ModalForm from "../form";
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
      <motion.button
        whileHover={{ background: "white" }}
        onClick={handleOpen}
        className={s.registryButton}
      >
        {props.title}
      </motion.button>
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
