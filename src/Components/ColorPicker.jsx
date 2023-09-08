import React from "react";
import { Grid } from "@mui/material";

const ColorPicker = ({ selectedColors, handleColorSelect }) => {
  const containerStyle = {
    backgroundColor: "#c5c5c5",
    padding: "20px",
    borderRadius: "15px",
  };

  return (
    <div>
      <p>Choose available colors</p>
      <div style={containerStyle}>
        <div style={{ textAlign: "center", marginBottom: "10px" }}></div>
        <Grid container spacing={1} style={{ padding: "7px" }}>
          {selectedColors.map((color, index) => (
            <Grid item key={index}>
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: color.value,
                  cursor: "pointer",
                  position: "relative",
                  borderRadius: "50%",
                }}
                onClick={() => handleColorSelect(color)}
              >
                {color.selected && (
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: "35px",
                      height: "35px",
                      borderRadius: "50%",
                      backgroundColor:
                        color.value === "#ffffff" ? "#000000" : "#ffffff",
                    }}
                  ></div>
                )}
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default ColorPicker;
