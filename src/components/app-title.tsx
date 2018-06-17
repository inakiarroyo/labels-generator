import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import { LabelItem } from './labels/label';

export const AppTitle = () => (
  <React.Fragment>
    <Typography variant="headline" component="h2">
      <LabelItem isTitle={true} name="Labels" color="#98EBED" />
      <span>-</span>
      <LabelItem isTitle={true} name="Generator" color="#7FFFD4" />
    </Typography>
  </React.Fragment>
);
