import React from "react";
import s from "./parts.module.css";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ModalForm from "./form";

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

export const YellowButton = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Box>
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

export const MenuButton = (props) => {
  return (
    <a
      className={s.menuButton}
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <button>{props.title}</button>
    </a>
  );
};

export const LinkButton = (props) => {
  return (
    <a
      className={s.linkButton}
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.title}
    </a>
  );
};

export const OutlinedButton = (props) => {
  return <button className={s.outlinedButton}>{props.title}</button>;
};
