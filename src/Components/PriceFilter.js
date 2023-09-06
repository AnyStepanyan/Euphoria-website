import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";

const PRICE_MIN_VALUE = 0;
const MAX_PRICE_MIN_VALUE = 1;
const PRICE_MAX_VALUE = 10000000;

function valueInRange({ x, min, max }) {
  return x >= min && x <= max;
}

const PriceFilter = ({ onApplyFilter }) => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1);

  const handleApplyFilter = () => {
    onApplyFilter({
      minPrice: parseInt(minPrice),
      maxPrice: parseInt(maxPrice),
    });
  };

  return (
    <Grid
      container
      spacing={2}
      style={{
        flex: "0 0 300px",
        padding: "5px",
        marginRight: "32px",
        height: "100%",
      }}
    >
      <Grid item xs={12} sm={6}>
        <TextField
          style={{ height: "50px" }}
          label="Min Price"
          type="number"
          value={minPrice}
          onChange={(e) =>
            setMinPrice((previousValue) =>
              valueInRange({
                x: e.target.value,
                min: PRICE_MIN_VALUE,
                max: PRICE_MAX_VALUE,
              })
                ? e.target.value
                : previousValue
            )
          }
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Max Price"
          type="number"
          value={maxPrice}
          onChange={(e) =>
            setMaxPrice((previousValue) =>
              valueInRange({
                x: e.target.value,
                min: MAX_PRICE_MIN_VALUE,
                max: PRICE_MAX_VALUE,
              })
                ? e.target.value
                : previousValue
            )
          }
          fullWidth
        />
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleApplyFilter}>
          Apply Filter
        </Button>
      </Grid>
    </Grid>
  );
};

export default PriceFilter;
