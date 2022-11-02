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
  { title: "Доставка", href: "https://elchapogrande.store/menu" },
  { title: "Акции", href: "#discount" },
  { title: "Мероприятия", href: "#events" },
  { title: "Меню", href: "#menu" },
  { title: "Фото", href: "#photo" },
  { title: "Контакты", href: "#contacts" },
];

const Header = (props) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed">
      <Container
        sx={{
          backgroundColor: "#111",
        }}
        maxWidth="fluid"
      >
        <Toolbar disableGutters>
          {/* logo */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <LogoButton href="#welcome" logo={props.logo} />
            {/* pc block */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {pages.map((page, i) => (
                <span key={"pcMenu" + i}>
                  <MenuButton title={page.title} href={page.href} />
                </span>
              ))}
            </Box>

            {/* registry button */}
            <RegistryButton
              title="Забронировать"
              backgroundColor={props.backgroundColor}
              border={props.border}
              textColor={props.textColor}
              hoverBg={props.hoverBg}
              hoverBorder={props.hoverBorder}
              hoverTextColor={props.hoverTextColor}
            />
          </Box>

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
              {pages.map((page, i) => (
                <Box key={"mobileMenu" + i} onClick={handleCloseNavMenu}>
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
export default Header;
