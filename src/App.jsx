import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";
import Login from './authentication/Login';
import SignUp from './authentication/SignUp';
import DetailPage from './components/Details/DetailPage'



function App() {
  const [user, setUser] = useState("");
  const [toggleForm, setToggleForm] = useState(true);
  const formMode = () => {
    setToggleForm(!toggleForm);
  }
  return (
    <>
    <DetailPage />
    <Header />
    <Main />
    <Footer />
    {/* <NavBar /> */}
    {toggleForm ? (<Login toggle = {() => formMode()} />) : (<SignUp toggle = {() => formMode()} />)}
    </>
  );
}

export default App;
