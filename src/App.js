import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";

import {
  Feed,
  VideoFeed,
  ChaneelFeed,
  SerachFeed,
  NavBar,
} from "./Component/Index";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Box sx={{ backgroundColor: "#000" }}>
          <NavBar />
          <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" element={<VideoFeed />} />
            <Route path="/channel/:id" element={<ChaneelFeed />} />
            <Route path="/search/:searchTerm" element={<SerachFeed />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </div>
  );
}

export default App;
