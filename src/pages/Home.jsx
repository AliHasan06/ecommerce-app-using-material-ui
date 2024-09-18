import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography } from "@mui/material";  // Import Typography from MUI
import MediaCard from "../components/Card";

const Home = () => {
  const [data, setdata] = useState(null);

  useEffect(() => {
    axios("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res.data);
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Box sx={{ padding: "20px" }}>
        {/* Header Section */}
        <Typography variant="h3" align="center" gutterBottom>
          Welcome to Our Store
        </Typography>
        <Typography variant="h6" align="center" color="textSecondary" paragraph>
          Browse through a variety of products at affordable prices!
        </Typography>

        {/* Product Listing */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            gap: "20px",
          }}
        >
          {data
            ? data.map((item) => (
                <MediaCard
                  category={item.title}
                  key={item.id}
                  image={item.image}
                  description={item.description}
                  price={item.price}
                />
              ))
            : ""}
        </div>
      </Box>
    </>
  );
};

export default Home;
