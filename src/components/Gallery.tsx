
import React from 'react';
import { Grid, Typography, Card, CardMedia, Button } from '@mui/material';
import { useTheme } from "@mui/material/styles";

const Gallery = () => {
    const theme = useTheme();
  return (
    <Grid
      container
      spacing={3}
      sx={{ padding: { xs: theme.spacing(4), lg: theme.spacing(10) } }}
    >
      <Grid item xs={12}>
        <Typography variant="h4" fontWeight={800} component="h2" gutterBottom>
          Our Gallery
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
        <Card>
          <CardMedia
            component="img"
            height="240"
            image="./images/serv.png"
            alt="About"
          />
        </Card>
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        xl={3}
        sx={{ display: { lg: "flex" } }}
      >
        <Card>
          <CardMedia
            component="img"
            height="240"
            image="./images/serv.png"
            alt="Image 1"
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
        <Card>
          <CardMedia
            component="img"
            height="240"
            image="./images/serv.png"
            alt="Image 2"
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
        <Card>
          <CardMedia
            component="img"
            height="240"
            image="./images/serv.png"
            alt="Image 3"
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
        <Card>
          <CardMedia
            component="img"
            height="240"
            image="./images/serv.png"
            alt="Image 4"
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
        <Card>
          <CardMedia
            component="img"
            height="240"
            image="./images/serv.png"
            alt="Image 5"
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
        <Card>
          <CardMedia
            component="img"
            height="240"
            image="./images/serv.png"
            alt="Image 6"
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
        <Card>
          <CardMedia
            component="img"
            height="240"
            image="./images/serv.png"
            alt="Image 6"
          />
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

export default Gallery;