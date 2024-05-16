import React from "react";
import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Link,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Services = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      spacing={3}
      sx={{ padding: { xs: theme.spacing(4), lg: theme.spacing(10) } }}
    >
      <Grid item xs={12}>
        <Typography variant="h4" fontWeight={800} component="h2" gutterBottom>
          Our Services
        </Typography>
        <Typography paragraph color="textSecondary">
          Morhi accumsan insum velit Nam ner tellus a odio tincidunt
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            height: "100%",
            textAlign: "center",
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "red",
              color: "white",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
            },
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image="./images/serv.png"
            alt="Service 1"
          />
          <CardContent>
            <Typography variant="h6" fontWeight={800} component="h2">
              Get License
            </Typography>
            <Typography paragraph>
              A driving license is an official document that authorizes.
            </Typography>
            <Link
              href="/"
              color="error"
              sx={{
                textDecoration: "none",
                ":hover": {
                  color: "blue",
                  textDecoration: "underline",
                },
              }}
            >
              Learn more
            </Link>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            height: "100%",
            textAlign: "center",
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "red",
              color: "white",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
            },
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image="./images/serv.png"
            alt="Service 1"
          />
          <CardContent>
            <Typography variant="h6" fontWeight={800} component="h2">
              Easy Learn Driving
            </Typography>
            <Typography paragraph>
              Our course module is very much easy to learn.
            </Typography>
            <Link
              href="/"
              color="error"
              sx={{
                textDecoration: "none",
                ":hover": {
                  color: "blue",
                  textDecoration: "underline",
                },
              }}
            >
              Learn more
            </Link>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            height: "100%",
            textAlign: "center",
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "red",
              color: "white",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
            },
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image="./images/serv.png"
            alt="Service 1"
          />
          <CardContent>
            <Typography variant="h6" fontWeight={800} component="h2">
              Traffic Guideline
            </Typography>
            <Typography paragraph>
              We also teach a full and final traffic guideline for you.
            </Typography>
            <Link
              href="/"
              color="error"
              sx={{
                textDecoration: "none",
                ":hover": {
                  color: "blue",
                  textDecoration: "underline",
                },
              }}
            >
              Learn more
            </Link>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            height: "100%",
            textAlign: "center",
            transition: "0.3s",
            "&:hover": {
              backgroundColor: "red",
              color: "white",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
            },
          }}
        >
          <CardMedia
            component="img"
            height="140"
            image="./images/serv.png"
            alt="Service 1"
          />
          <CardContent>
            <Typography variant="h6" fontWeight={800} component="h2">
              Video Courses
            </Typography>
            <Typography paragraph>
              Brainstorm words related to confidence, and skill.
            </Typography>
            <Link
              href="/"
              color="error"
              sx={{
                textDecoration: "none",
                ":hover": {
                  color: "blue",
                  textDecoration: "underline",
                },
              }}
            >
              Learn more
            </Link>
          </CardContent>
        </Card>
      </Grid>
      <div
        style={{ justifyContent: "flex-end", display: "flex", width: "100%" }}
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
          View more
        </Button>
      </div>
    </Grid>
  );
};

export default Services;
