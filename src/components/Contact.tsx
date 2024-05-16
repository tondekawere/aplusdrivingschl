import { Button, Card, CardContent, Grid, TextField, Typography } from '@mui/material';
import React from 'react';


export default function Contact() {
  return (
    <div>
      <Card style={{ maxWidth: 450, margin: "0 auto", padding: "20px 5px" }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Contact Us
          </Typography>
          <Typography
            gutterBottom
            component="p"
            variant="body2"
            color="textSecondary"
          >
            Fill up the form and our team will get back to you within 24 hours
          </Typography>
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="First Name"
                  placeholder=" Enter first name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Last Name"
                  placeholder=" Enter last name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="email"
                  label="Email"
                  placeholder=" Enter email"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="number"
                  label="Phone"
                  placeholder=" Enter phone number"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="Message"
                  placeholder="Type your message here "
                  variant="outlined"
                  multiline
                  rows={4}
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  type="submit"
                  variant="contained"
                  color="error"
                  fullWidth
                  sx={{
                    ":hover": {
                      backgroundColor: "#fff",
                      color: "red",
                    },
                  }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
