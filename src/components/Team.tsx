import React from 'react';
import { Grid, Typography, Card, CardContent, CardMedia,  IconButton } from '@mui/material';
import { Facebook } from '@mui/icons-material';
import { useTheme } from "@mui/material/styles";

const Team = () => {
    const theme = useTheme();
  return (
    <Grid
      container
      spacing={3}
      textAlign={"center"}
      sx={{ padding: { xs: theme.spacing(4), lg: theme.spacing(10) } }}
    >
      <Grid item xs={12}>
        <Typography variant="h4" fontWeight={800} component="h2" gutterBottom>
          Our Team
        </Typography>
        <Typography paragraph color="textSecondary">
          Meet the amazing Team at A Plus Driving School
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            borderRadius: 3,
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
            image="./Images/team.png"
            alt="Team 1"
          />
          <CardContent>
            <Typography variant="h6" fontWeight={700} component="h2">
              Makhosi Nsimango
            </Typography>
            <Typography variant="body2" component="p">
              Instructor
            </Typography>
            <IconButton
              aria-label="facebook"
              sx={{
                position: "absolute",
                top: 10,
                left: 10,
                color: "white",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              <Facebook />
            </IconButton>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            borderRadius: 3,
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
            image={"/Images/team.png"}
            alt="Team 2"
          />
          <CardContent>
            <Typography variant="h6" fontWeight={700} component="h2">
              Makhosi Nsimango
            </Typography>
            <Typography variant="body2" component="p">
              Office Manager
            </Typography>
            <IconButton
              aria-label="facebook"
              sx={{
                position: "absolute",
                top: 10,
                left: 10,
                color: "white",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              <Facebook />
            </IconButton>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            borderRadius: 3,
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
            image="./Images/team.png"
            alt="Team 3"
          />
          <CardContent>
            <Typography variant="h6" fontWeight={700} component="h2">
              Makhosi Nsimango
            </Typography>
            <Typography variant="body2" component="p">
              Instructor
            </Typography>
            <IconButton
              aria-label="facebook"
              sx={{
                position: "absolute",
                top: 10,
                left: 10,
                color: "white",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              <Facebook />
            </IconButton>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card
          sx={{
            borderRadius: 3,
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
            image="./Images/team.png"
            alt="Team 4"
          />
          <CardContent>
            <Typography variant="h6" fontWeight={700} component="h2">
              Makhosi Nsimango
            </Typography>
            <Typography variant="body2" component="p">
              Office Assistant
            </Typography>
            <IconButton
              aria-label="facebook"
              sx={{
                position: "absolute",
                top: 10,
                left: 10,
                color: "white",
                "&:hover": {
                  color: "white",
                },
              }}
            >
              <Facebook />
            </IconButton>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Team;