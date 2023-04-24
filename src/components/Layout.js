import React from "react";
import { Container, Grid, Box, Button, Typography } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import WalletIcon from "@mui/icons-material/Wallet";
import SpeedIcon from "@mui/icons-material/Speed";
import SettingsIcon from "@mui/icons-material/Settings";

const Layout = ({ children }) => {
  return (
    <Container
      sx={{
        backgroundColor: "#EDE7DF",
        paddingTop: "10px",
        paddingBottom: "30px",
      }}
    >
      <Container sx={{ backgroundColor: "white" }}>
        <Grid item xs={12} sx={{ display: "flex", marginLeft: "10px" }}>
          <Typography sx={{ fontWeight: "bold", fontSize: "24pt" }}>
            B<span style={{ color: "#5748BD", fontSize: "33pt" }}>.</span>
          </Typography>
        </Grid>
        <Grid container>
          <Grid
            item
            xs={0.5}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                height: "300px",
                display: "flex",
                flexDirection: "column",
                margin: "30px",
                justifyContent: "space-between",
                flexWrap: "wrap",
              }}
            >
              <Button sx={{ fontSize: "36px" }}>
                <HomeIcon />
              </Button>
              <Button sx={{ fontSize: "36px" }}>
                <WalletIcon />
              </Button>
              <Button sx={{ fontSize: "36px" }}>
                <SpeedIcon />
              </Button>
              <Button sx={{ fontSize: "36px" }}>
                <SettingsIcon />
              </Button>
            </Box>
          </Grid>
          <Grid item xs={10} sx={{ margin: "30px" }}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default Layout;
