import Header from "./Components/Header";
import Footer from "./Components/Footer";
import DemoCarousel from "./Components/SectionOneCarousel";



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
    <SectionThree />
    <Footer />
    <NavBar /> */}
    {toggleForm ? (<Login toggle = {() => formMode()} />) : (<SignUp toggle = {() => formMode()} />)}
    </>
  );
}

export default App;
