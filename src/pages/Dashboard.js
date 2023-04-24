import { Container, Typography, Grid } from "@mui/material";
import React from "react";
import TaxFormBanner from "../components/taxForm";
import Metrics from "../components/metrics";
import DepositNow from "../components/depositButton";
import PortfolioChart from "../components/portfolioChart";

const Dashboard = () => {
  return (
    <Container>
      <Grid container>
        <Grid item xs={4}>
          <Metrics />
          <DepositNow />
        </Grid>
        <Grid item xs={8} sx={{ display: "flex", flexDirection: "column" }}>
          <Grid item xs={12}>
            {/* <TaxFormBanner sx={{ marginBottom: "-20px" }} /> */}
            Your goals
            <PortfolioChart />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
