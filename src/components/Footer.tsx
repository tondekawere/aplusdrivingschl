import React from "react";
import { Grid, Typography, Link, Box, IconButton } from "@mui/material";
import { Phone, Email, LocationOn, AccessTime } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";


const Footer = () => {
    const theme = useTheme();
  return (
    <Grid
      container
      spacing={5}
      color={"#fff"}
      sx={{
        padding: { xs: theme.spacing(4), lg: theme.spacing(10) },
        backgroundColor: "#000000b9",
        display: {xs:"grid", md: "flex" },
        gap: {xs:"7%", md: "5%" },
        marginTop: {xs:"10%", lg: "0%" },
        height:"max-content"
      }}
    >
      <Grid item xs={12} md={3} lg={3}>
        <Typography variant="h5" component="h2" gutterBottom>
          Useful information
        </Typography>
        <Typography paragraph>
          We provide a reputable and professional service that aims to give you
          the confidence to pass your test and drive safely on the roads.
        </Typography>
        <Box
          sx={{
            width: "100%",
            height: 200,
            background: "url(./Images/serv.png)",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        />
      </Grid>
      <Grid item xs={12} md={3} lg={2}>
        <Typography variant="h5" component="h2" gutterBottom>
          Our Activities
        </Typography>
        <ul style={{ display: "grid", gap: "10%", paddingLeft: "4%" }}>
          <li>
            <Link href="#" color="inherit" underline="none">
              Oral Lessonð
            </Link>
          </li>
          <li>
            <Link href="#" color="inherit" underline="none">
              Oral Testð
            </Link>
          </li>
          <li>
            <Link href="#" color="inherit" underline="none">
              Parallel Parkinø
            </Link>
          </li>
          <li>
            <Link href="#" color="inherit" underline="none">
              3 Point Turé
            </Link>
          </li>
          <li>
            <Link href="#" color="inherit" underline="none">
              Town Drivinø
            </Link>
          </li>
          <li>
            <Link href="#" color="inherit" underline="none">
              Drumð
            </Link>
          </li>
          <li>
            <Link href="#" color="inherit" underline="none">
              Hill Start
            </Link>
          </li>
        </ul>
      </Grid>
      <Grid item xs={12} md={3} lg={2}>
        <Typography variant="h5" component="h2" gutterBottom>
          Navigation
        </Typography>
        <ul
          style={{
            display: "grid",
            gap: "15%",
            listStyle: "none",
            padding: "0",
          }}
        >
          <li>
            <Link href="#" color="inherit" underline="none">
              Home
            </Link>
          </li>
          <li>
            <Link href="#" color="inherit" underline="none">
              About
            </Link>
          </li>
          <li>
            <Link href="#" color="inherit" underline="none">
              Services
            </Link>
          </li>
          <li>
            <Link href="#" color="inherit" underline="none">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="#" color="inherit" underline="none">
              Contact
            </Link>
          </li>
        </ul>
      </Grid>
      <Grid item xs={12} md={3} lg={3} sx={{ justifyContent: "flex-start" }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Get In Touch
        </Typography>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "5%",
            marginBottom: "6%",
          }}
        >
          <IconButton
            sx={{
              border: " 1px solid #fff",
              color: "#fff",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
            }}
          >
            <Phone />
          </IconButton>

          <Grid item sx={{ display: "grid", gap: "5%" }}>
            <Link href="tel:+263772462823" color="inherit" underline="none">
              +263 77 246 2823
            </Link>
            <Link href="tel:+263712389494" color="inherit" underline="none">
              +263 71 238 9494
            </Link>
          </Grid>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "5%",
            marginBottom: "6%",
          }}
        >
          <IconButton
            sx={{
              border: " 1px solid #fff",
              color: "#fff",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
            }}
          >
            <Email />
          </IconButton>

          <Grid item sx={{ display: "grid", gap: "5%" }}>
            <Link
              href="mailto:aplusdrivingschl@gmail.com"
              color="inherit"
              underline="none"
            >
              aplusdrivingschl@gmail.com
            </Link>
            <Link
              href="mailto:aplusdrivingschlinfo@gmail.com"
              color="inherit"
              underline="none"
            >
              aplusdrivingschlinfo@gmail.com
            </Link>
          </Grid>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "5%",
            marginBottom: "6%",
          }}
        >
          <IconButton
            sx={{
              border: " 1px solid #fff",
              color: "#fff",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
            }}
          >
            <LocationOn />
          </IconButton>

          <Grid item>
            <Typography paragraph mb={0}>
              13 Avenue and JM Nkomo, Moyo Mayson Court, 1st Floor, Office 17,
              Bulawayo, Zimbabwe
            </Typography>
          </Grid>
        </Grid>
        <Grid sx={{ display: "flex", alignItems: "center", gap: "5%" }}>
          <IconButton
            sx={{
              border: " 1px solid #fff",
              color: "#fff",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
            }}
          >
            <AccessTime />
          </IconButton>

          <Grid item>
            <Typography paragraph mb={0}>
              Mon-Fri: 6am-6pm
              <br />
              Sat-Sun: 10am-5pm
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;
