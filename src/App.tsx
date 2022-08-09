import "./App.css";
import NavBar from "./components/nav-bar/NavBar";
import Banner from "./components/banner/Banner";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import SpaciesPage from "./pages/SpaciesPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Banner />
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/profile/:id" element={<ProfilePage />} />
          <Route path="/spacies/:id" element={<SpaciesPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
