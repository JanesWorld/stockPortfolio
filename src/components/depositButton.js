import { Button } from "@mui/material";
import React from "react";

const DepositButton = () => {
  return (
    <>
      <Button
        sx={{
          backgroundColor: "#60CE5F",
          "&:hover": {
            backgroundColor: "#5748BD",
            color: "white",
          },
          left: 0,
          color: "white",
          width: "180px",
          borderRadius: "8px",
          marginTop: "30px",
        }}
      >
        Deposit Now
      </Button>
    </>
  );
};

export default DepositButton;
