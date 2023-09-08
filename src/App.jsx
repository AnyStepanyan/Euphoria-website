import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";
// import Login from './Authentication/Login';
// import SignUp from './Authentication/SignUp';
// import DetailPage from './components/Details/DetailPage'
import { AppRoutes } from "./components/AppRoutes";


function App() {
  return (
    <>
    <Header />
    <Main />
    <Footer />
    {/* <NavBar /> */}
    {/* {toggleForm ? (<Login toggle = {() => formMode()} />) : (<SignUp toggle = {() => formMode()} />)} */}
      <Header />
      <AppRoutes />
      <Footer />
    </>
  );
}

export default App;
