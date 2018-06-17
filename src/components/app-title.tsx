import Typography from '@material-ui/core/Typography';
import * as React from 'react';
import { LabelItem } from './labels/label';

export const AppTitle = () => (
  <React.Fragment>
    <Typography variant="headline" component="h2">
      <LabelItem isTitle={true} name=":rocket: Labels" color="#fcc971" />
      <span>-</span>
      <LabelItem isTitle={true} name="Generator :dancer:" color="#ed788e" />
    </Typography>
  </React.Fragment>
);
