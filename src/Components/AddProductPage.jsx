import React from "react";
import { useState, useRef } from "react";
import fire from "../helpers/db";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import ColorPicker from "./ColorPicker";
import SizeSelector from "./SizeSelector";
import Category from "./Category";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Container from "@mui/material/Container";

const firestore = fire.firestore();

export const colors = [
  { value: "Black", selected: false },
  { value: "Gray", selected: false },
  { value: "White", selected: false },
  { value: "Orange", selected: false },
  { value: "Yellow", selected: false },
  { value: "Green", selected: false },
  { value: "Cyan", selected: false },
  { value: "Blue", selected: false },
  { value: "Purple", selected: false },
  { value: "Pink", selected: false },
  { value: "Red", selected: false },
  { value: "Brown", selected: false },
];

const AddProductPage = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const imageInputRef = useRef(null);
  const [images, setImages] = useState([]);
  const [selectedColors, setSelectedColors] = useState(colors);
  const [selectedSizes, setSelectedSizes] = useState([]);

  const clearImages = () => {
    if (imageInputRef.current.value) {
      imageInputRef.current.value = null;
    }
    setImages([]);
  };

  const handleColorSelect = (color) => {
    setSelectedColors((previousColors) =>
      previousColors.map((previousColor) =>
        previousColor.value !== color.value
          ? previousColor
          : { ...color, selected: !color.selected }
      )
    );
  };

  const handleSizeChange = (value) =>
    setSelectedSizes((previousSelectedSizes) =>
      previousSelectedSizes.includes(value)
        ? previousSelectedSizes.filter((size) => size !== value)
        : [...previousSelectedSizes, value]
    );

  const handleProductPriceChange = (e) => {
    const newValue = e.target.value;

    if (/^\d*\.?\d*$/.test(newValue)) {
      setProductPrice(newValue);
    }
  };

  const handleAddProduct = () => {
    if (!category || images.length === 0) {
      console.error("Select a category and add at least one image");
      return;
    }

    const storagePromises = [];

    images.forEach((image) => {
      const storageRef = fire.storage().ref(`images/${image.name}`);
      const uploadTask = storageRef.put(image);

      const uploadPromise = uploadTask
        .then((snapshot) => snapshot.ref.getDownloadURL())
        .catch((error) => {
          console.error("Image upload error: ", error);
          throw error;
        });

      storagePromises.push(uploadPromise);
    });

    Promise.all(storagePromises)
      .then((imageUrls) => {
        const mainImageUrl = imageUrls[0];
        const selectedColorValue = selectedColors
          .filter((color) => color.selected)
          .map((color) => color.value);

        const productData = {
          name: productName,
          price: parseInt(productPrice),
          category: category,
          color: selectedColorValue,
          gender: gender,
          size: selectedSizes,
          mainImageUrl: mainImageUrl,
          imageUrls: imageUrls,
        };
        return firestore.collection("products").add(productData);
      })
      .then(() => {
        console.log("Products added");
        setProductName("");
        setProductPrice("");
        setCategory("");
        setSelectedColors(colors);
        setSelectedSizes([]);
        setGender("");
        clearImages();
      })
      .catch((error) => {
        console.error("Product error: ", error);
      });
  };

  return (
    <Container
      maxWidth="sm"
      style={{ backgroundColor: "", textAlign: "center" }}
    >
      <h1>Product Management</h1>
      <div>
        <div>
          <Button
            component="label"
            variant="outlined"
            startIcon={<UploadFileIcon />}
            sx={{ marginRight: "1rem" }}
          >
            Upload Image
            <input
              ref={imageInputRef}
              type="file"
              multiple="multiple"
              onChange={(e) => {
                console.log(e.target.files);
                setImages([...e.target.files]);
              }}
              hidden
              accept="image/jpeg, image/png, image/jpg"
            />
          </Button>
        </div>
        {images.map((image) => (
          <span key={image.name}>{"  "}</span>
        ))}
      </div>
      <TextField
        style={{ padding: "7px" }}
        label="Name"
        fullWidth
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <TextField
        style={{ padding: "7px" }}
        label="Price"
        fullWidth
        type="number"
        value={productPrice}
        onChange={handleProductPriceChange}
      />
      <FormControl fullWidth style={{ padding: "7px" }}>
        <InputLabel>Gender</InputLabel>
        <Select value={gender} onChange={(e) => setGender(e.target.value)}>
          <MenuItem value="">Choose Gender</MenuItem>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </Select>
      </FormControl>
      <Category category={category} setCategory={setCategory} />
      <SizeSelector
        handleSizeChange={handleSizeChange}
        selectedSizes={selectedSizes}
      />
      <ColorPicker
        selectedColors={selectedColors}
        handleColorSelect={handleColorSelect}
      />
      <Button
        variant="contained"
        onClick={handleAddProduct}
        style={{ marginTop: "10px" }}
      >
        Add Product
      </Button>
    </Container>
  );
};

export default AddProductPage;
