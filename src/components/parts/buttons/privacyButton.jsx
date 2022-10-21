import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Privacy from "../privacy";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PrivacyButton(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        sx={{ color: props.color, border: "none", textDecoration: "underline" }}
        onClick={handleClickOpen}
      >
        <Typography fontSize={props.fz} fontFamily="Oswald">
          {props.title}
        </Typography>
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
          position="fixed"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            bgcolor: "black",
            paddingY: 1,
          }}
        >
          <motion.div
            initial={{
              y: -100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
              <Typography
                fontFamily="Oswald"
                fontWeight="600"
                fontSize={{ xs: 16, sm: 25 }}
              >
                Политика в отношении обработки персональных данных
              </Typography>
            </Toolbar>
          </motion.div>
        </AppBar>
        <Box sx={{ paddingTop: 2, bgcolor: "black" }}>
          <motion.div
            initial={{
              y: -100,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <Privacy />
          </motion.div>
        </Box>
      </Dialog>
    </div>
  );
}
