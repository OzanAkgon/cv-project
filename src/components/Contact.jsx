import React from "react";
import { Grid, Typography, Card, CardContent } from "@mui/material";
import { SiGmail } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";

function Contact() {
  return (
    <Grid container spacing={2} sx={{ padding: "20px" }}>
      <Grid item xs={12}>
        <Card>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" gutterBottom>
              İletişim
            </Typography>
            <Typography variant="body1" paragraph>
              Bana aşağıdaki mail aracılığıyla ulaşabilirsiniz.
            </Typography>
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <SiGmail style={{ marginRight: "10px" }} /> ozanakgon1@gmail.com
            </Typography>
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center" }}
            ></Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Contact;
