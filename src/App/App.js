// import logo from '../logo.svg';
import styles from "./App.module.css";

import Tracklist from "../Tracklist/Tracklist";

function App() {
  return (
    <div className={styles.App}>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h1>Jammming</h1>
        <Tracklist />
    </div>
  );
}

export default App;
