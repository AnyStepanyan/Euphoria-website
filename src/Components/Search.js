import { Container, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

function Search({isSearchInputOpen}) {
    const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5, color:'#807D7E'}}>
      <TextField
        id="search"
        type="search"
        label="Search"
        value={searchTerm}
        size='small'
        onChange={handleChange}
        sx={{ width: 330, margin: {top: -22, left: 140, right: 50},
        borderRadius: 2,
        '@media (max-width: 1100px)': {
          margin: { left: 30}
        },
        '@media (max-width: 960px)': {
          display: `${isSearchInputOpen ? 'flex' : 'none'}`,
          position: 'absolute',
          width: 280,
          marginTop: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#ffffff',
        } }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
}
export default Search