import React, { createContext, useContext } from "react";
import Header from "./Components/Header";
// import Footer from "./Components/Footer";
// import DemoCarousel from "./Components/SectionOneCarousel";
import { Routes, Route, Navigate, Outlet, Link } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./helpers/db";
import { useRequest } from "ahooks";
import AddProductPage from "./Components/AddProductPage";
import WomenProductList from "./Components/WomenProductList";
// import NavBar from "./Components/NavBar";
// import SectionThree from "./Components/SectionThree";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const { data: user, loading: userIsLoading } = useRequest(
    () =>
      new Promise((res) =>
        onAuthStateChanged(auth, (user) => {
          res(user);
        })
      )
  );

  if (userIsLoading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

const useUserContext = () => useContext(AuthContext);

const PublicRoute = ({ children, ...rest }) => {
  const { user } = useUserContext();

  if (user) {
    return <Navigate path="/home" />;
  }

  return <Outlet />;
};

const ProtectedRoute = ({ children, ...rest }) => {
  const { user } = useUserContext();

  if (!user) {
    return <Navigate path="/login" />;
  }

  return <Outlet />;
};

const Login = () => {
  // make the login function
  return <div></div>;
};

const Home = () => {
  return <div>Home Page</div>;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Navigate to="/login" />} />
      <Route exact path="/womenProducts" element={<WomenProductList />} />
      <Route exact path="/addProduct" element={<AddProductPage />} />
      <Route path="/login" element={<PublicRoute />}>
        <Route path="" element={<Login />} />
      </Route>
      <Route path="/home" element={<ProtectedRoute />}>
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  );
};

function App() {
  // const [user, setUser] = useState("");
  // const [toggleForm, setToggleForm] = useState(true);
  // const formMode = () => {
  //   setToggleForm(!toggleForm);
  // };

  return (
    <>
      <AuthProvider>
        <Header />
        <Link to="/womenProducts" style={{ padding: "15px" }}>
          Products
        </Link>
        <Link to="/addProduct" state={{ padding: "15px" }}>
          Add Product
        </Link>
        <AppRoutes />
        {/* 
        <DemoCarousel />
        <SectionThree />
        <Footer />
        <NavBar /> */}
        {/* {toggleForm ? (
          <Login toggle={() => formMode()} />
        ) : (
          <SignUp toggle={() => formMode()} />
        )} */}
      </AuthProvider>
    </>
  );
}

export default App;
