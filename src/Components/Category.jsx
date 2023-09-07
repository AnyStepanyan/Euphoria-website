import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { categories } from "../constants/categories";

const Category = ({ category, setCategory }) => {
  return (
    <FormControl fullWidth style={{ padding: "7px" }}>
      <InputLabel>Choose Category</InputLabel>
      <Select value={category} onChange={(e) => setCategory(e.target.value)}>
        {categories.map((category) => (
          <MenuItem value={category}>{category}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default Category;
