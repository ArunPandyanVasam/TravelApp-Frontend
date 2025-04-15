import React, { useState, useEffect } from "react";
import {
  Tabs,
  Tab,
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

const VehicleRentOut = () => {
  const [vehicles, setVehicles] = useState({});
  const [selectedCategory, setSelectedCategory] = useState("bikes");

  // Fetch data from the vehicles.json file when the component mounts
  useEffect(() => {
    const fetchVehiclesData = async () => {
      try {
        const response = await fetch("/data/vehicles.json");
        const data = await response.json();
        setVehicles(data);
      } catch (error) {
        console.error("Error fetching vehicles data:", error);
      }
    };

    fetchVehiclesData();
  }, []);

  // Handle tab change to update the selected category
  const handleTabChange = (event, newValue) => {
    setSelectedCategory(newValue);
  };

  // Handler for rent button click
  const handleRentClick = (vehicleName) => {
    alert(`You have selected to rent: ${vehicleName}`);
    // Add more functionality here, like navigating to a rental page or updating a state
  };

  return (
    <Box sx={{ width: "100%", padding: 2 }}>
      <Tabs value={selectedCategory} onChange={handleTabChange} centered>
        <Tab label="Bikes" value="bikes" />
        <Tab label="Cars" value="cars" />
        <Tab label="Other Vehicles" value="others" />
      </Tabs>

      <Box
        sx={{
          marginTop: 2,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 3,
        }}
      >
        {vehicles[selectedCategory]?.map((vehicle, index) => (
          <Card key={index}>
            <CardMedia
              component="img"
              height="200"
              image={`/assets/rentVehicles/${vehicle.image}`} // Updated image path
              alt={vehicle.name}
            />
            {console.log(`/assets/rentvehicles/${vehicle.image}`)}
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {vehicle.name}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Price: {vehicle.price} per day
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {vehicle.description || "No description available"}
              </Typography>
              {/* Rent button */}
              <Button
                variant="contained"
                color="primary"
                onClick={() => handleRentClick(vehicle.name)}
                sx={{ marginTop: 2 }}
              >
                Rent It Out
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default VehicleRentOut;
