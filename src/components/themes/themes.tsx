import Typography from '@material-ui/core/Typography';
import { ThemePreview } from 'components/themes/theme-preview';
import * as styles from 'components/themes/themes.scss';
import * as mainStyles from 'styles.scss';
import * as React from 'react';
import { themeList, themesMap } from 'core/constants';

export const Themes = (): JSX.Element => {
  return (
    <div>
      <Typography variant="headline" component="h3">Themes</Typography>

      <ThemePreview themes={themeList} labels={themesMap} />
    </div>
  );
}
