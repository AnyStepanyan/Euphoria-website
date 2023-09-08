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
      style={{
        boxSize: "border-box",
        maxWidth: "300px",
        width: "100%",
        marginTop: "25px",
      }}
    >
      <InputLabel style={{ maxWidth: "300px", width: "100%" }}>
        Choose Category
      </InputLabel>
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
