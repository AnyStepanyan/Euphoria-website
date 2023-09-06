// import { Grid, Paper } from "@mui/material";

// const colors = [
//   { value: "#FF5733", selected: false },
//   { value: "#33FF57", selected: false },
//   { value: "#5733FF", selected: false },
//   { value: "#FFFF33", selected: false },
//   { value: "#33FFFF", selected: false },
//   { value: "#FF33FF", selected: false },
// ];

// const ColorPicker = ({ onColorSelect }) => {
//   const handleColorClick = (color) => {
//     color.selected = !color.selected;
//     onColorSelect(colors.filter((c) => c.selected).map((c) => c.value));
//   };

//   return (
//     <Grid container spacing={1}>
//       {colors.map((color, index) => (
//         <Grid item key={index}>
//           <Paper
//             style={{
//               width: "50px",
//               height: "50px",
//               backgroundColor: color.value,
//               cursor: "pointer",
//             }}
//             onClick={() => handleColorClick(color)}
//           ></Paper>
//         </Grid>
//       ))}
//     </Grid>
//   );
// };

// export default ColorPicker;
