import react, {useCallback} from "react";
import styles from "./Track.module.css";

const Track = (props) => {
    const addTrack = useCallback(
        (event) => {
            props.onAdd(props.track);
        },
        [props.onAdd, props.track]
    );

    const removeTrack = useCallback(
        (event) => {
            props.onRemove(props.track);
        },
        [props.onRemove, props.track]
    );

    const renderAction = () => {
        if (props.isRemoval) {
            return (
                <button className="Track-action" onClick={removeTrack}>
                    -
                </button>
            );
        }
        return (
            <button className="Track-action" onClick={addTrack}>
                +
            </button>
        );
    };
    return (
        <div className={styles.Track}>
            <div className={styles.imageContainer}>
                <img src={props.track.imageSrc} alt = ""/>
            </div>
            <h2>{props.track.name}</h2>
            <div className={styles.TrackInformation}>
                <p>{props.track.artist}</p>
                <p>{props.track.album}</p>
            </div>
        </div>
    );
};

// add listens etc

export default Track;