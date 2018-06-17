import Grid from '@material-ui/core/Grid';
import * as React from 'react';
import * as styles from 'themes.scss';
import { themeList, themesMap } from '../../themes/index';
import { ThemeList } from './theme-list';
import { ThemePreview } from './theme-preview';
import Typography from '@material-ui/core/Typography';

export interface State {
  previewTheme: string;
  checkedThemes: string[];
}

export class Themes extends React.PureComponent<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      previewTheme: themeList[0],
      checkedThemes: []
    };

    this.handleThemePreview = this.handleThemePreview.bind(this);
    this.handleAddToggleTheme = this.handleAddToggleTheme.bind(this);
  }

  public render(): JSX.Element {
    const { checkedThemes, previewTheme } = this.state;

    return (
      <div>
        <Typography variant="headline" component="h3">Themes</Typography>

        <Grid container spacing={24}>
          <Grid item xs={12} sm={4}>
            <ThemeList
              themes={themeList}
              checkedThemes={checkedThemes}
              onClickPreview={this.handleThemePreview}
              onClickAddToggle={this.handleAddToggleTheme}
            />
          </Grid>
          <Grid item xs={12} sm={8}>
            <ThemePreview theme={previewTheme} labels={themesMap} />
          </Grid>
        </Grid>

      </div>
    );
  }

  private handleThemePreview = (theme: string) => (): void => {
    this.setState({
      previewTheme: theme
    });
  }

  private handleAddToggleTheme = (theme: string) => (): void => {
    const { checkedThemes } = this.state;
    const currentIndex = checkedThemes.indexOf(theme);
    const newCheckedThemes = [...checkedThemes];

    currentIndex === -1
    ? newCheckedThemes.push(theme)
    : newCheckedThemes.splice(currentIndex, 1);

    this.setState({
      checkedThemes: newCheckedThemes
    })
  }

}
