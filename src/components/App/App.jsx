import React from 'react';
import { File } from 'components';
import classes from './style.module.css';
import files from './files.json';

const App = () => (
  <div className={classes.app}>
    {files.map((file, i) => (
      <File key={i} file={file} />
    ))}
  </div>
);

export default App;
