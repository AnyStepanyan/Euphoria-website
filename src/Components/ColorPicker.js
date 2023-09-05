import React from "react";
import { Grid } from "@mui/material";

const ColorPicker = ({ selectedColors, handleColorSelect }) => {
  return (
    <div>
      <div style={{ textAlign: "center", marginBottom: "10px" }}>
        <p>Choose available colors</p>
      </div>
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
                    fontSize: "24px",
                    color: "#ffffff",
                  }}
                >
                  ✓
                </div>
              )}
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ColorPicker;
