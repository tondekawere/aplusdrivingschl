import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Contact from "./Contact";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        size="large"
        color="error"
        sx={{
          mt: 2,
          width: { xs: "100%", sm: "max-content" },
          ":hover": {
            backgroundColor: "#fff",
            color: "red",
          },
        }}
        onClick={handleClickOpen}
      >
        Contact Us
      </Button>
      <BootstrapDialog aria-labelledby="customized-dialog-title" open={open}>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 30,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <Contact />
      </BootstrapDialog>
    </React.Fragment>
  );
}
