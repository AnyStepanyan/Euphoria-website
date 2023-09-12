import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { colors } from "../constants/colors";

const ColorFilter = ({ color, setColor }) => {
  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <FormControl
      fullWidth
      style={{
        boxSize: "border-box",
        maxWidth: "300px",
        width: "100%",
        marginTop: "25px",
        backgroundColor: "white",
      }}
    >
      <InputLabel style={{ maxWidth: "300px", width: "100%" }}>
        Choose Color
      </InputLabel>
      <Select value={color} onChange={handleChange}>
        <MenuItem value="">All Colors</MenuItem>
        {colors.map((col) => (
          <MenuItem key={col} value={col}>
            {col}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ColorFilter;
