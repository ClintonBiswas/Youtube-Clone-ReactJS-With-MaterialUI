import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/system";
import Video from "./Video";
import ChannelCard from "./ChannelCard";
import { fetchFromApi } from "./Utils/fetchFromApi";

const ChaneelFeed = () => {
  const { id } = useParams();
  const [chaneeldetail, setchannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);
  console.log(chaneeldetail, videos);
  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setchannelDetail(data?.items[0])
    );
    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            height: "300px",
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
            zIndex: 10,
          }}
        />
        <ChannelCard channelDetail={chaneeldetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{ mr: { sm: "100px" } }} />
        <Video videos={videos} />
      </Box>
    </Box>
  );
};

export default ChaneelFeed;
