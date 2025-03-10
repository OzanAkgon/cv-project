import React from "react";
import { Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

function Home() {
  return (
    <Grid container spacing={4} sx={{ padding: "20px" }}>
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            boxShadow: 3,
            textAlign: "center",
            padding: "20px",
            height: "100%",
          }}
        >
          <CardMedia
            marginTop="20px"
            component="img"
            image="kepsss.jpg"
            alt="Profile Image"
            sx={{
              objectFit: "cover",
              borderRadius: "10px",
              margin: "0 auto",
              height: "350px",
              width: "70%",
              objectPosition: "top",
            }}
          />
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Ozan Akgön
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Computer Engineer
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card sx={{ boxShadow: 3, padding: "20px", height: "100%" }}>
          <CardContent>
            <Typography variant="h6" gutterBottom sx={{ marginBottom: 3 }}>
              Kısaca Ben
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ marginBottom: 2 }}>
              <strong> Ad:</strong> Ozan
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ marginBottom: 2 }}>
              <strong>Soyad:</strong> AKGÖN
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ marginBottom: 2 }}>
              <strong>Doğum Tarihi:</strong> 14.12.2001
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ marginBottom: 2 }}>
              <strong>Memleket:</strong> Samsun
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ marginBottom: 2 }}>
              <strong>Öğrenim:</strong> Lisans
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ marginBottom: 2 }}>
              <strong>Üniversite:</strong> Bolu Abant İzzet Baysal Üniversitesi
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ marginBottom: 2 }}>
              <strong>Bölüm:</strong> Bilgisayar Mühendisliği
            </Typography>
            <Typography variant="body1" gutterBottom sx={{ marginBottom: 2 }}>
              <strong>Ortalama (GANO):</strong> 3.34
            </Typography>

            <a target="_blank" href="https://instagram.com/ozanakgno">
              <FaInstagram
                color="black"
                id="insta"
                size={35}
                style={{ margin: "0 10px" }}
              />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ozan-akg%C3%B6n-9abb4b329/"
            >
              <FaLinkedin
                color="black"
                id="linkedin"
                size={35}
                style={{ margin: "0 10px" }}
              />
            </a>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sx={{ marginTop: 4 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Öne Çıkan Projelerim
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6">Proje 1</Typography>
            <Typography variant="body2">Lorem ipsum dolor sit amet.</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6">Proje 2</Typography>
            <Typography variant="body2">Lorem ipsum dolor sit amet.</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card sx={{ boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h6">Proje 3</Typography>
            <Typography variant="body2">Lorem ipsum dolor sit amet.</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Home;
