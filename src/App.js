import Header from "./Components/Header";
import Footer from "./Components/Footer";
import DemoCarousel from "./Components/SectionOneCarousel";
// <<<<<<< HEAD
import SectionThree from "./Components/SectionThree";
import HomeManCategory from "./Components/HomeManCategory";
import { useState } from "react";
import Login from './authentication/Login'
import SignUp from './authentication/SignUp'

// =======

// >>>>>>> 3d0cc93ddcdcd070ebe1a8eb997a944e21fab446


function App() {
  const [user, setUser] = useState("");
  const [toggleForm, setToggleForm] = useState(true);
  const formMode = () => {
    setToggleForm(!toggleForm);
  }
  return (
    <>
    <Header />
    <DemoCarousel />
    <SectionThree />
    <HomeManCategory />
    <Footer />
    {/* <NavBar /> */}
    {toggleForm ? (<Login toggle = {() => formMode()} />) : (<SignUp toggle = {() => formMode()} />)}
    </>
  );
}

export default App;
