import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "./Utils/fetchFromApi";
import Video from "./Video";

const SerachFeed = () => {
  const [videos, setVideos] = useState([]);

  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);
  console.log("videos-list is here", videos);
  return (
    <Box p={2} minHeight="95vh">
      <Typography
        variant="h4"
        fontWeight={900}
        color="white"
        mb={3}
        ml={{ sm: "100px" }}
      >
        Search Results for{" "}
        <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Video videos={videos} />
      </Box>
    </Box>
  );
};

export default SerachFeed;
