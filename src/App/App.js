import React, {useState, useEffect } from "react";
import styles from "./App.module.css";

import Tracklist from "../Tracklist/Tracklist";
import SearchBar from "../SearchBar/SearchBar";

const track = {
  imageSrc:
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6BVjRY7CLNQOcjAAnGKyHzwrriN-NKrBrEw&s",
  name: "Golddust",
  artist: "Smithereens",
  listens: 2000,
};

const tracks = [track, track, track];

function App() {
  const [searchInput, setSearchInput] = useState('')
  return (
    <div className={styles.App}>
        <h1>Jammming</h1>
        <SearchBar />
        <Tracklist  tracks={tracks}/>
    </div>
  );
}

export default App;
