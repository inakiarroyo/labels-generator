import * as React from 'react';
import Button from '@material-ui/core/Button';
import { GithubRibbon } from './github-ribbon/github-ribbon';

export const App = () => (
  <React.Fragment>
    <h2>Labels Generator</h2>
    <GithubRibbon />

    <Button variant="contained" color="primary">
      Create Labels
    </Button>
  </React.Fragment>
);
