import React from 'react';
import styles from './App.module.css';
import RenderList from './RenderList';

function App() {
  return (
    <React.Fragment>

      {/* This is the heading of the home page */}
      <div className={styles.mainDiv}>
        <div className={styles.imageDiv}>
          <img
            className={styles.imageStyle}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png"
            alt="logo"
          />
        </div>
        <h1 className={styles.App}>
          Learn git with me
        </h1>
        <div className={styles.imageDiv}>
          <img
            className={styles.imageStyle2}
            src="https://e7.pngegg.com/pngimages/986/84/png-clipart-github-computer-icons-repository-version-control-github-media-fork.png"
            alt="logo"
          />
        </div>
      </div>

      {/* This is the body of the home page */}
      <RenderList />
    </React.Fragment>
  )
}

export default App;
