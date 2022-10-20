import * as React from "react";
import s from "../parts.module.css";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { Box, Typography, CardMedia } from "@mui/material";
import { motion } from "framer-motion";
import Carousel from "better-react-carousel";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function BarMenuButton(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <motion.button
        whileHover={{
          background: "white",
          color: "black",
        }}
        className={s.barMenuButton}
        onClick={handleClickOpen}
      >
        <Typography
          fontFamily="Oswald"
          fontWeight="700"
          fontSize={{ xs: "14px", md: "18px" }}
        >
          {props.title}
        </Typography>
      </motion.button>
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
              <Typography variant="h3" fontFamily="Oswald" fontWeight="600">
                {props.menuTitle}
              </Typography>
            </Toolbar>
          </motion.div>
        </AppBar>
        <Box sx={{ paddingTop: 8, bgcolor: "black" }}>
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
            <Box>
              <Carousel cols={2} rows={1} gap={1} loop>
                {props.menu &&
                  props.menu.map((el, i) => (
                    <Carousel.Item key={"btrCarousel" + i}>
                      <CardMedia
                        component="img"
                        image={el.img}
                        alt="no photo"
                      />
                    </Carousel.Item>
                  ))}
              </Carousel>
            </Box>
          </motion.div>
        </Box>
      </Dialog>
    </div>
  );
}
