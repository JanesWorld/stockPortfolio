import React from "react";
import { Box, Button, Grid, Typography, Stack } from "@mui/material";

const TaxFormBanner = () => {
  return (
    <>
      <Box
        sx={{
          height: "70px",
          width: "70%",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#5748BD",
          color: "white",
          alignItems: "center",
          justifyContent: "flex-end",
          marginLeft: "auto",
          marginTop: "-30px",
        }}
      >
        <Typography sx={{ fontSize: "12pt", fontWeight: "bold" }}>
          Your 2020 Tax Forms are now available
        </Typography>

        <Button
          LinkComponent="a"
          href="https://www.gov.uk/self-assessment-tax-return-forms"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: "#FADBC3",
            "&:hover": {
              backgroundColor: "white",
              color: "black",
            },
            height: "40px",
            color: "#5748BD",
            marginRight: "10px",
            marginLeft: "5px",
          }}
        >
          View Tax Form
        </Button>
      </Box>
    </>
  );
};

export default TaxFormBanner;
