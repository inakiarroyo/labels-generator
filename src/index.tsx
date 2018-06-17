import * as React from 'react';
import { render } from 'react-dom';
import Button from '@material-ui/core/Button';

const App = () => (
  <React.Fragment>
    <h2>Labels Generator</h2>

    <Button variant="contained" color="primary">
      Create Labels
    </Button>
  </React.Fragment>
);

render(
  <App />,
  document.getElementById('root')
);
