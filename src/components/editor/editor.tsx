import * as React from 'react';
import Button from '@material-ui/core/Button';
import * as styles from 'editor.scss';
import Typography from '@material-ui/core/Typography';

export const Editor = () => (
  <div>
    <Typography variant="headline" component="h3">Editor</Typography>

    <Button variant="contained" color="primary">
      Create Labels
    </Button>
  </div>
);
