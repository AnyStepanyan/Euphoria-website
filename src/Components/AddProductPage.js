import { useState, useRef } from "react";
import { firebase } from "../helpers/db";
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

const firestore = firebase.firestore();

const colors = [
  { value: "#FF5733", selected: false },
  { value: "#33FF57", selected: false },
  { value: "#5733FF", selected: false },
  { value: "#FFFF33", selected: false },
  { value: "#33FFFF", selected: false },
  { value: "#FF33FF", selected: false },
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
    const image = images[0];

    if (!category || !image) {
      console.error("Select a category and add an image");
      return;
    }

    const storageRef = firebase.storage().ref(`images/${image.name}`);

    storageRef
      .put(image)
      .then((snapshot) => {
        return snapshot.ref.getDownloadURL();
      })
      .then((imageUrl) => {
        console.log("selectedSizes", selectedSizes);
        return firestore.collection("products").add({
          name: productName,
          price: parseInt(productPrice),
          category: category,
          color: selectedColors,
          gender: gender,
          size: selectedSizes,
          imageUrl: imageUrl,
        });
      })
      .then(() => {
        console.log("Product added");
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
    <Container maxWidth="sm" style={{ textAlign: "center" }}>
      <h1>Product Management</h1>
      <div>
        <div>
          <Button
            component="label"
            variant="outlined"
            startIcon={<UploadFileIcon />}
            sx={{ marginRight: "1rem" }}
          >
            Upload CSV
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
          <span>
            {image.name}
            {"  "}
          </span>
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
          <MenuItem value="gender1">Male</MenuItem>
          <MenuItem value="gender2">Female</MenuItem>
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
