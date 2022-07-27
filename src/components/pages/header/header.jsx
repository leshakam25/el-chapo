import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import RegistryButton from "../../parts/buttons/registryButton";
import MenuButton from "../../parts/buttons/menuButton";
import logo from "../../../image/logo.svg";
import { Box } from "@mui/material";
import LogoButton from "../../parts/buttons/logoButton";

export default function Header(props) {
  return (
    <Box sx={{ flexGrow: 1, opacity: "0.9" }}>
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
          <Box>
            <LogoButton href="#welcome" logo={logo} />
          </Box>
          <Box sx={{ display: "flex" }}>
            <MenuButton title="Мероприятия" href="#events" />
            <MenuButton title="О нас" href="#about" />
            <MenuButton title="Меню" href="#menu" />
            <MenuButton title="Фото" href="#photo" />
            <MenuButton title="Контакты" href="#contacts" />
          </Box>
          <RegistryButton title="Забронировать" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
