import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import DetailPage from "./Components/Details/DetailPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/detailpage" element={<DetailPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
