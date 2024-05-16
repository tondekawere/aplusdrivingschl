import React from "react";
import { Grid, Typography, TextField, Button } from "@mui/material";
// import Map from "./Map";
import { useTheme } from "@mui/material/styles";

const Contacts = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      spacing={2}
      sx={{
        padding: { xs: theme.spacing(4), lg: theme.spacing(10) },
        display: { sm: "flex" },
        justifyContent: { sm: "space-between" },
        // gap: { sm: "10%" },
      }}
    >
      <Grid item xs={12} sm={6} md={6} lg={5} xl={5}>
        <Typography gutterBottom variant="h4" fontWeight={800}>
          Contact Us
        </Typography>
        <Typography
          gutterBottom
          component="p"
          variant="body2"
          color="textSecondary"
        >
          Send us a message and we will get back to you as soon as we can
        </Typography>
        <form>
          <TextField
            label="Full Name"
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
          <TextField
            label="Email Address"
            variant="outlined"
            margin="normal"
            required
            fullWidth
          />
          <TextField
            label="Type your message"
            variant="outlined"
            margin="normal"
            required
            fullWidth
            multiline
            rows={4}
          />
          <div
            style={{
              justifyContent: "flex-start",
              display: "flex",
              width: "100%",
            }}
          >
            <Button
              variant="contained"
              size="large"
              color="error"
              sx={{
                mt: 2,
                width: { md: "max-content" },
                ":hover": {
                  backgroundColor: "#fff",
                  color: "red",
                },
              }}
            >
              SEND
            </Button>
          </div>
        </form>
      </Grid>
      <Grid
        item
        xs={12}
        sm={5}
        md={6}
        lg={6}
        xl={6}
        sx={{
          height: { xs: "30vh", sm: "unset" },
        }}
      >
        <iframe
          title="Google Maps Embed"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d627.464379527316!2d28.579853931425582!3d-20.161638602473957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eb554755bc74b75%3A0xddae429e80e60352!2sMain%20St%20%26%20Thirteenth%20Ave%2C%20Bulawayo!5e0!3m2!1sen!2szw!4v1714988303234!5m2!1sen!2szw"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Grid>
    </Grid>
  );
};

export default Contacts;
