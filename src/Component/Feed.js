import React from "react";
import { useState, useEffect } from "react";
import { fetchFromApi } from "./Utils/fetchFromApi";
import { Stack, Box, Typography, Link } from "@mui/material";
import SideBar from "./SideBar";
import Video from "./Video";
const Feed = () => {
  const [selectedCategeroy, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${selectedCategeroy}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategeroy]);
  return (
    <div>
      <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
        <Box
          sx={{
            height: { sx: "auto", md: "100vh" },
            borderRight: "1px solid #3d3d3d",
            px: { sx: 0, md: 2 },
          }}
        >
          <SideBar
            selectedCategeroy={selectedCategeroy}
            setSelectedCategory={setSelectedCategory}
          />
          <Typography
            className="copyright"
            variant="body2"
            sx={{ mt: 1.5, color: "#fff" }}
          >
            Develop By{" "}
            <Link
              href="https://www.facebook.com/clinton3343"
              underline="none"
              sx={{ color: "#e91e63", fontWeight: "bold" }}
            >
              Clinton Biswas
            </Link>
          </Typography>
        </Box>
        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            mb={2}
            sx={{ color: "white" }}
          >
            {selectedCategeroy} <span style={{ color: "#F31503" }}>Videos</span>
          </Typography>

          <Video videos={videos} />
        </Box>
      </Stack>
    </div>
  );
};

export default Feed;
