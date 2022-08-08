import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import LogoButton from "../../parts/buttons/logoButton";
import MenuButton from "../../parts/buttons/menuButton";
import MenuButtonMobile from "../../parts/buttons/menuButtonMobile";

import RegistryButton from "../../parts/buttons/registryButton";

const pages = [
  { title: "Мероприятия", href: "#events" },
  { title: "Меню", href: "#menu" },
  { title: "Фото", href: "#photo" },
  { title: "Контакты", href: "#contacts" },
];

const HeaderNew = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed">
      <Container
        sx={{
          backgroundColor: "#111",
        }}
        maxWidth="fluid"
      >
        <Toolbar>
          {/* logo */}
          <LogoButton href="#welcome" logo={props.logo} />
          {/* pc block */}
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <div key={page}>
                <MenuButton title={page.title} href={page.href} />
              </div>
            ))}
          </Box>
          {/* registry button */}
          <RegistryButton title="Забронировать" />

          {/* mobile block */}

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Box key={page} onClick={handleCloseNavMenu}>
                  <MenuButtonMobile title={page.title} href={page.href} />
                </Box>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default HeaderNew;
