// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
// import DemoCarousel from "./Components/SectionOneCarousel";
// import NavBar from "./layouts/NavBar";
import Login from "./authentication/Login";
import SignUp from "./authentication/SignUp";
import { useState } from "react";




function App() {
  const [user, setUser] = useState("");
  const [toggleForm, setToggleForm] = useState(true);
  const formMode = () => {
    setToggleForm(!toggleForm);
  }
  return (
    <>
    {/* <Header />
    <DemoCarousel />
    <Footer />
    <NavBar /> */}
    {toggleForm ? (<Login toggle = {() => formMode()} />) : (<SignUp toggle = {() => formMode()} />)}
    </>
  );
}

export default App;
