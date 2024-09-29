import react from "react";
import styles from "./Tracklist.module.css";

import Track from "../Track/Track";

const Tracklist = ({tracks}) => {
    return (
        <div className={styles.TrackList}>
        {tracks.map((track) => {
            return <Track track={track} key={track.name} />;
        })}
        </div>
    );
};

export default Tracklist;