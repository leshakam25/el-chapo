import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ModalForm from "../form";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

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

const RegistryButton = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
          height: "40px",
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
        onClick={() => {
          handleOpen();
          window.ym(90856817, "reachGoal", "RegistryButtonClick");
        }}
      >
        <Typography
          fontFamily="Oswald"
          fontWeight="700"
          fontSize={{ xs: "14px", md: "18px" }}
        >
          {props.title}
        </Typography>
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
    </div>
  );
};

export default RegistryButton;
