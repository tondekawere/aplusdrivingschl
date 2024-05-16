import React from "react";
import CustomizedDialogs from "@/components/Dialogs";
import {
  Grid,
  Typography,
  Button,
  TextField,
  FormControl,
  MenuItem,
  Select,
  Card,
  CardContent,
} from "@mui/material";

const Hero = () => {
  const handleQuoteRequest = () => {
    alert("Thank you for sending this quote!");
  };

  return (
    <Grid
      container
      style={{
        background: "url(../images/hero.png)",
        backgroundPosition: "center center",
        backgroundSize: "cover",
      }}
      spacing={3}
      sx={{ height: { xs: "105vh", md: "50vh", lg: "105vh" }, padding: "2rem" }}
    >
      <Grid item xs={12} sm={12} md={6} sx={{ margin: "auto", color: "#fff" }}>
        <Typography variant="h4" component="h4" gutterBottom>
          WELCOME TO
        </Typography>
        <Typography variant="h2" fontWeight={800} component="h1" gutterBottom>
          A PLUS DRIVING SCHOOL
        </Typography>
        <Typography
          variant="subtitle1"
          gutterBottom
          sx={{ display: { xs: "none", md: "block" } }}
        >
          At A Plus Driving School, we are more than just a place to learn how
          to drive - we are your partners on the journey to becoming a safe,
          skilled, and confident driver. We are dedicated to providing
          high-quality driving education and training services that empower
          individuals to navigate the roads with ease and confidence.
        </Typography>
        <Grid
          item
          xs={12}
          sm={10}
          lg={8}
          sx={{
            display: { xs: "grid", sm: "flex" },
            gap: "5%",
          }}
        >
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
          >
            Learn More
          </Button>
          <CustomizedDialogs />
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        lg={4}
        sx={{ margin: "auto", display: { xs: "none", md: "block" } }}
      >
        <Card
          style={{
            maxWidth: 400,
            margin: "0 auto",
            padding: "20px 5px",
            border: "1px solid red",
            background: "#ffffff6b",
          }}
        >
          <CardContent>
            <Typography gutterBottom variant="h6" color={"white"}>
              REQUEST QUOTE
            </Typography>
            <FormControl fullWidth>
              <TextField
                label="Name"
                style={{ background: "#fff", marginBottom: 5 }}
                variant="outlined"
              />
              <TextField
                label="Email"
                variant="outlined"
                type="email"
                style={{ background: "#fff", marginBottom: 5 }}
              />
              <TextField
                label="Phone"
                variant="outlined"
                type="phone"
                sx={{ background: "#fff", marginBottom: 1 }}
              />
              <Grid
                item
                xs={12}
                lg={12}
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: "2%",
                }}
              >
                <TextField
                  variant="outlined"
                  type="date"
                  fullWidth
                  style={{ background: "#fff", marginBottom: 5 }}
                />
                <TextField
                  variant="outlined"
                  type="time"
                  fullWidth
                  style={{ background: "#fff", marginBottom: 5 }}
                />
              </Grid>
              <Grid item xs={12}>
                <Select
                  label="Request Quote"
                  variant="outlined"
                  fullWidth
                  defaultValue="Select an option"
                  style={{ background: "#fff", marginBottom: 5, color: "#4c4" }}
                >
                  <MenuItem value="Select an option">Course Type</MenuItem>
                  <MenuItem value="option2">Class 1</MenuItem>
                  <MenuItem value="option2">Class 2</MenuItem>
                  <MenuItem value="option2">Class 3</MenuItem>
                  <MenuItem value="option2">Class 4</MenuItem>
                </Select>
              </Grid>

              <Button
                variant="contained"
                size="large"
                sx={{
                  mt: 2,
                  ":hover": {
                    backgroundColor: "#fff",
                    color: "red",
                  },
                }}
                color="error"
                onClick={handleQuoteRequest}
              >
                Request Quote
              </Button>
            </FormControl>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Hero;
