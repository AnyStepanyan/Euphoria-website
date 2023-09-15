import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import { Link } from "react-router-dom";
import CartContext from "../components/Context";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

function ShoppingCart() {
  const { cart } = useContext(CartContext);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  return (
    <Badge color="primary" badgeContent={cart.length} showZero>
      <Link to="/addToCart">
        <ShoppingCartOutlinedIcon
          sx={{
            fontSize: 28,
            color: `${splitLocation[1] === "addToCart" ? "blue" : "#807D7E"}`,
            marginTop: 0.4,
            cursor: "pointer",
            "&:hover": { color: "blue" },
          }}
        />
      </Link>
    </Badge>
  );
}

export default ShoppingCart;
