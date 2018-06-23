import Typography from '@material-ui/core/Typography';
import { LabelItem } from 'components/labels/label-item';
import * as React from 'react';

export const AppTitle = () => (
  <React.Fragment>
    <Typography variant="headline" component="h2">
      <LabelItem isTitle={true} name=":rocket: Labels" color="#7bdcb5" />
      <span>-</span>
      <LabelItem isTitle={true} name="Generator :dancer:" color="#f78da7" />
    </Typography>
  </React.Fragment>
);
