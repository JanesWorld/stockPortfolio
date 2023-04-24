import React from "react";
import {
  Container,
  Grid,
  Stack,
  Typography,
  Box,
  Divider,
} from "@mui/material";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import PaidIcon from "@mui/icons-material/Paid";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

const metricsData = [
  {
    title: "Total for Goals",
    value: "$$dd",
    icon: <AdsClickIcon sx={{ color: "#5B4CBF" }} />,
  },
  {
    title: "Total Net Worth",
    value: "$$dd",
    icon: <SignalCellularAltIcon sx={{ color: "#5B4CBF" }} />,
  },
  {
    title: "Total Earnings",
    value: "$$dd",
    icon: <PaidIcon sx={{ color: "#5B4CBF" }} />,
  },
  {
    title: "Losses ",
    value: "$$dd",
    icon: <TrendingDownIcon sx={{ color: "#5B4CBF" }} />,
  },
];

const Metrics = () => {
  return (
    <>
      <Stack direction="column" spacing={3}>
        {metricsData.map((metric, id) => {
          return (
            <Grid container key={id}>
              <Grid item xs={1}>
                <Box
                  sx={{
                    backgroundColor: "#F2F0FD",
                    height: "50px",
                    width: "50px",
                    fontSize: "36px",
                    borderRadius: "10px",
                  }}
                >
                  {metric.icon}
                </Box>
              </Grid>
              <Grid
                item
                xs={11}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <Typography sx={{ color: "#A3A6AE" }}>
                  {metric.title}
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  {metric.value}
                </Typography>
              </Grid>
            </Grid>
          );
        })}
      </Stack>
    </>
  );
};

export default Metrics;
