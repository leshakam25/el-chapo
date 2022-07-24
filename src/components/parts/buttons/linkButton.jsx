import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import s from "../parts.module.css";
import Privacy from "../privacy";
import { motion } from "framer-motion";

const style = {
  position: "absolute",
  width: "90%",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "black",
  boxShadow: 24,
  p: 4,
};

const LinkButton = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <motion.button
        whileHover={{ opacity: "0.6" }}
        onClick={handleOpen}
        className={s.linkButton}
        href={props.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.title}
      </motion.button>
      <Modal
        disableScrollLock="false"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Privacy />
        </Box>
      </Modal>
    </div>
  );
};

export default LinkButton;
