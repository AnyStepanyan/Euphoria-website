import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { categories } from "../constants/categories";

const CategoryFilter = ({ category, setCategory }) => {
  const handleChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <FormControl
      fullWidth
      style={{ padding: "7px", width: "300px", marginTop: "25px" }}
    >
      <InputLabel>Choose Category</InputLabel>
      <Select value={category} onChange={handleChange}>
        <MenuItem value="">All Categories</MenuItem>
        {categories.map((cat) => (
          <MenuItem key={cat} value={cat}>
            {cat}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CategoryFilter;
