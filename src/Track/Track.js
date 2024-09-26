import react from "react";
import styles from "./Track.module.css";

const track = {
    imageSrc:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6BVjRY7CLNQOcjAAnGKyHzwrriN-NKrBrEw&s",
    name: "Golddust",
    artist: "Smithereens",
    listens: 2000,
};


const Track = () => {
    return (
        <div className={styles.Track}>
            <div className={styles.imageContainer}>
                <img src={track.imageSrc} alt = ""/>
            </div>
            <h2>{track.name}</h2>
            <div className={styles.TrackInformation}>
                <p>{track.artist}</p>
                <p>listens: {track.listens}</p>
            </div>
        </div>
    );
};

export default Track;