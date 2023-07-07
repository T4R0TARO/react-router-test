import Homepage from "./components/Hompage";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import PageThree from "./components/PageThree";
import NotFound from "./components/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter basename="/react-router-test/">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pageone" element={<PageOne />} />
        <Route path="/pagetwo" element={<PageTwo />} />
        <Route path="/pagethree" element={<PageThree />} />
        <Route element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
