import React from "react";
import { Grid, Typography, Card, CardContent } from "@mui/material";

function About() {
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
              height: "200px",
            }}
          >
            <Typography variant="h4" gutterBottom>
              Hakkımda
            </Typography>
            <Typography variant="body1" paragraph>
              Merhaba ben Ozan Akgön.
            </Typography>
            <Typography variant="body1" paragraph marginLeft={"15px"}>
              2001 Samsun doğumluyum. Lise öğrenimime 2016 yılında Köksal
              Ersayın Anadolu Lisesi'nde başladım ve tamamladım. 2020 yılında
              Bolu Abant İzzet Baysal Üniversitesi Bilgisayar Mühendisliği
              bölümünü kazandım. 2024 yılında 3.34 GANO ile mezun oldum.
              Frontend alanında HTML5, CSS, Javascript ve React alanlarında
              kendimi geliştirmeye ve proje üretmeye çalışıyorum. Projelerime
              yukarıdaki menü üzerinden ulaşabilirsiniz.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default About;
