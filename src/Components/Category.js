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
        <MenuItem value="category1">T-Shirt</MenuItem>
        <MenuItem value="category2">Jeans</MenuItem>
        <MenuItem value="category3">Pants</MenuItem>
        <MenuItem value="category4">Hoodie</MenuItem>
        <MenuItem value="category5">Sweater</MenuItem>
        <MenuItem value="category6">Jacket</MenuItem>
        <MenuItem value="category7">Dress</MenuItem>
        <MenuItem value="category8">Shorts</MenuItem>
        <MenuItem value="category9">Skirts</MenuItem>
        <MenuItem value="category10">Blouse</MenuItem>
        <MenuItem value="category11">Top</MenuItem>
        <MenuItem value="category12">Coat</MenuItem>
        <MenuItem value="category13">Hat</MenuItem>
        <MenuItem value="category14">Glove</MenuItem>
        <MenuItem value="category15">Shirt</MenuItem>
      </Select>
    </FormControl>
  );
};

export default Category;
