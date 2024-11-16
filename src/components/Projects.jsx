import React from "react";
import { Grid, Typography, Card, CardContent } from "@mui/material";
import { FaGithubSquare } from "react-icons/fa";

function Projects() {
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
              Projelerim
            </Typography>
            <Typography variant="body1" paragraph>
              Aşağıdaki ikondan Github hesabımı inceleyebilirsiniz.
            </Typography>
            <a
              target="_blank"
              href="https://github.com/ozanakgon"
              rel="noopener noreferrer"
            >
              <FaGithubSquare
                size={50}
                style={{ color: "#333", cursor: "pointer", marginTop: "10px" }}
              />
            </a>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Projects;
