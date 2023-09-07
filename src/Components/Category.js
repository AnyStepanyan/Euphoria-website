import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const Category = ({ category, setCategory }) => {
  return (
    <FormControl fullWidth style={{ padding: "7px" }}>
      <InputLabel>Choose Category</InputLabel>
      <Select value={category} onChange={(e) => setCategory(e.target.value)}>
        <MenuItem value="">Choose Category</MenuItem>
        <MenuItem value="T-Shirt">T-Shirt</MenuItem>
        <MenuItem value="Jeans">Jeans</MenuItem>
        <MenuItem value="Pants">Pants</MenuItem>
        <MenuItem value="Hoodie">Hoodie</MenuItem>
        <MenuItem value="Sweater">Sweater</MenuItem>
        <MenuItem value="Jacket">Jacket</MenuItem>
        <MenuItem value="Dress">Dress</MenuItem>
        <MenuItem value="Shorts">Shorts</MenuItem>
        <MenuItem value="Skirts">Skirts</MenuItem>
        <MenuItem value="Blouse">Blouse</MenuItem>
        <MenuItem value="Top">Top</MenuItem>
        <MenuItem value="Coat">Coat</MenuItem>
        <MenuItem value="Hat">Hat</MenuItem>
        <MenuItem value="Glove">Glove</MenuItem>
        <MenuItem value="Shirt">Shirt</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Category;
