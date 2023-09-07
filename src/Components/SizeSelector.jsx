import React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Grid";

const sizes = ["xs", "s", "m", "l", "xl"];

const SizeSelector = ({ selectedSizes, handleSizeChange }) => {
  return (
    <div>
      <p>Choose available sizes</p>
      <FormGroup row style={{ padding: "7px" }}>
        <Grid container spacing={1}>
          {sizes.map((size) => (
            <Grid item key={size}>
              <FormControlLabel
                control={
                  <Checkbox
                    value={size}
                    checked={selectedSizes.includes(size)}
                    onChange={() => handleSizeChange(size)}
                  />
                }
                label={size.toUpperCase()}
              />
            </Grid>
          ))}
        </Grid>
      </FormGroup>
    </div>
  );
};

export default SizeSelector;
