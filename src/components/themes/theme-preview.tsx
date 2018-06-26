import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { LabelItem } from 'components/labels/label-item';
import * as React from 'react';
import { ThemesMap } from 'themes/index';
import { capitalize } from 'utils/utils';
import * as uuid from 'uuid/v4';
import * as styles from 'components/themes/themes.scss';


export interface Props {
  theme: string;
  labels: ThemesMap;
}

export const ThemePreview = ({ theme, labels }: Props): JSX.Element => {
  const themeLabels = labels[theme];

  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <span className="">{`${capitalize(theme)} Preview `}</span>
              <span>{`(${themeLabels.length} labels)`}</span>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {themeLabels.map((label) => {
            return (
              <TableRow key={uuid()}>
                <TableCell component="th" scope="row">
                  <LabelItem {...label} />
                </TableCell>
                <TableCell>{label.description}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};
