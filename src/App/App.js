import React, {useState, useCallback } from "react";
import styles from "./App.module.css";

import Tracklist from "../Tracklist/Tracklist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../util/Spotify";

const track = {
  imageSrc:
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6BVjRY7CLNQOcjAAnGKyHzwrriN-NKrBrEw&s",
  name: "Golddust",
  id: 1,
  artist: "Smithereens",
  listens: 2000,
};

const tracks = [track];

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState('New Playlist');
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = useCallback(
    (term) => {
      Spotify.search(term).then(setSearchResults);
  }, []);

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;
    },
    [playlistTracks]
  );

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) => {
      prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    });
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);
  
  return (
    <div className={styles.App}>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <SearchBar onSearch={search}/>
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist 
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onNameChange={updatePlaylistName}
            onRemove={removeTrack}
            onSave={savePlaylist}
            />
        </div>
    </div>
  );
}

export default App;
