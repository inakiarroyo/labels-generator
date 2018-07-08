import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { LabelItem } from 'components/labels/label-item';
import * as styles from 'components/themes/themes.scss';
import { ThemesMap } from 'core/types';
import * as React from 'react';
import { capitalize } from 'utils/utils';
import * as uuid from 'uuid/v4';

export interface Props {
  themes: string[];
  labels: ThemesMap;
}

export const ThemePreview = ({ themes, labels }: Props): JSX.Element => {
  return (
    <div className={styles.themeContainer}>
      {
        themes.map((theme: string) => {
          const themeLabels = labels[theme];
          const capitalizedTheme = capitalize(theme);

          return (
            <Paper key={theme}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>
                      <h3>
                        {capitalizedTheme}
                        <span>{` (${themeLabels.length} labels)`}</span>
                      </h3>
                    </TableCell>
                    <TableCell />
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
        })
      }
    </div>
  );
};
