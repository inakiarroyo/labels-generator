import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import * as styles from '../styles/labels.scss';

export const AppTitle = () => (
  <React.Fragment>
    <Typography variant="headline" component="h2">
      <span className={styles.labelTitle}>Labels</span>
      <span>-</span>
      <span className={styles.labelTitle2}>Generator</span>
    </Typography>
  </React.Fragment>
);
