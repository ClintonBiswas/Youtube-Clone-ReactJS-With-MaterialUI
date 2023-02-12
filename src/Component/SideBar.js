import React from "react";
import { Stack } from "@mui/material";
import { categories } from "./Utils/Constant";

function SideBar({ selectedCategeroy, setSelectedCategory }) {
  return (
    <div>
      <Stack
        direction="row"
        sx={{
          overflowY: "auto",
          flexDirection: { md: "column" },
          height: { sx: "auto", md: "95%" },
        }}
      >
        {categories.map((category) => (
          <button
            onClick={() => setSelectedCategory(category.name)}
            className="category-btn"
            style={{
              background: category.name === selectedCategeroy && "#FC1503",
              color: "white",
            }}
            key={category.name}
          >
            <span
              style={{
                color: category.name === selectedCategeroy ? "white" : "red",
                marginRight: "15px",
              }}
            >
              {category.icon}
            </span>
            <span
              style={{
                opacity: category.name === selectedCategeroy ? "1" : "0.8",
              }}
            >
              {category.name}
            </span>
          </button>
        ))}
      </Stack>
    </div>
  );
}

export default SideBar;
