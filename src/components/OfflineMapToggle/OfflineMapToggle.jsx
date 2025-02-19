import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import L from "leaflet";
import localforage from "localforage";
import "leaflet/dist/leaflet.css";
import styles from "./OfflineMapToggle.module.css";

// Configure localforage for caching tile data
const tileStorage = localforage.createInstance({
  name: "tileCache",
  storeName: "tiles",
});

const OfflineMapToggle = () => {
  const [isOffline, setIsOffline] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Function to fetch tile data from the cache
  const getTileFromCache = async (url) => {
    try {
      const tileData = await tileStorage.getItem(url);
      if (tileData) {
        const tile = new Image();
        tile.src = tileData;
        return tile;
      }
      return null;
    } catch (error) {
      console.error("Error retrieving tile from cache:", error);
      return null;
    }
  };

  // Function to save tile data to the cache
  const saveTileToCache = async (url, tileData) => {
    try {
      await tileStorage.setItem(url, tileData);
    } catch (error) {
      console.error("Error saving tile to cache:", error);
    }
  };

  // Function to toggle offline mode
  const toggleOfflineMode = () => {
    setIsOffline((prevMode) => !prevMode);
  };

  // Fetch tiles in offline mode
  const loadTile = async (url, done) => {
    try {
      if (isOffline) {
        const cachedTile = await getTileFromCache(url);
        if (cachedTile) {
          done(null, cachedTile);
        } else {
          done("Tile not found in cache", null);
        }
      } else {
        // Fallback to fetching tile from the server if online
        const tile = new Image();
        tile.onload = () => {
          saveTileToCache(url, tile.src);
          done(null, tile);
        };
        tile.onerror = (error) => done(error, null);
        tile.src = url;
      }
    } catch (error) {
      console.error("Error loading tile:", error);
      done(error, null);
    }
  };

  // Map Tile Layer component
  const TileLayerWithOffline = ({ urlTemplate, attribution }) => {
    const tileLayerOptions = {
      url: urlTemplate,
      attribution: attribution,
      tileSize: 256,
      minZoom: 0,
      maxZoom: 18,
      tileLoading: true,
      tileSizeLoading: 256,
      async tileLoad(url, done) {
        await loadTile(url, done);
      },
    };

    return <TileLayer {...tileLayerOptions} />;
  };

  return (
    <div>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "500px", width: "100%" }}>
        <TileLayerWithOffline
          urlTemplate="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
      </MapContainer>

      <div className={styles.toggleContainer}>
        <button onClick={toggleOfflineMode} className={styles.toggleButton}>
          {isOffline ? "Switch to Online Mode" : "Switch to Offline Mode"}
        </button>

        <div className={styles.loadingIndicator}>
          {isLoading && <p>Loading tiles...</p>}
        </div>
      </div>
    </div>
  );
};

export default OfflineMapToggle;
