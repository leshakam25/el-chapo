import * as React from "react";
import { motion } from "framer-motion";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import RegistryButton from "../../parts/buttons/registryButton";
import MenuButton from "../../parts/buttons/menuButton";
import logo from "../../../image/logo.svg";
import { Box } from "@mui/material";
import LogoButton from "../../parts/buttons/logoButton";

const textAnimation = {
  hidden: { y: -10, opacity: 0 },
  visible: (custom) => ({
    y: 0,
    opacity: 1,
    transition: { duration: custom * 0.5, delay: custom * 0.2 },
  }),
};

export default function Header(props) {
  return (
    <Box sx={{ flexGrow: 1, opacity: "0.9" }}>
      <motion.div initial="hidden" animate="visible">
        <AppBar position="fixed">
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#111",
            }}
          >
            <motion.div custom={1} variants={textAnimation}>
              <Box>
                <LogoButton href="#welcome" logo={logo} />
              </Box>
            </motion.div>
            <motion.div custom={2} variants={textAnimation}>
              <Box sx={{ display: "flex" }}>
                <MenuButton title="Мероприятия" href="#events" />
                <MenuButton title="О нас" href="#about" />
                <MenuButton title="Меню" href="#menu" />
                <MenuButton title="Фото" href="#photo" />
                <MenuButton title="Контакты" href="#contacts" />
              </Box>
            </motion.div>
            <motion.div custom={3} variants={textAnimation}>
              <RegistryButton title="Забронировать" />
            </motion.div>
          </Toolbar>
        </AppBar>
      </motion.div>
    </Box>
  );
}
