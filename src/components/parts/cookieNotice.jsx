import React, { useEffect } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { Typography, Box, Container } from "@mui/material";

export default function SimpleSnackbar() {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button sx={{ border: "2px solid #f2ee6f" }} onClick={handleClose}>
        <Typography
          fontFamily="Oswald"
          color="white"
          fontWeight="bold"
          fontSize="18px"
        >
          Замечательно!
        </Typography>
      </Button>
    </React.Fragment>
  );

  return (
    <Container maxWidth="fluid">
      <Box sx={{ width: "100vw" }}>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={handleClose}
          message={
            <Typography
              fontFamily="Oswald"
              variant="h6"
              color="white"
              fontWeight="light"
            >
              Мы используем Cookie, чтобы Вам было удобно пользоваться сайтом
            </Typography>
          }
          action={action}
        />
      </Box>
    </Container>
  );
}
