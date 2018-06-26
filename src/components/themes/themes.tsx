import Typography from '@material-ui/core/Typography';
import { ThemeList } from 'components/themes/theme-list';
import { ThemePreview } from 'components/themes/theme-preview';
import * as styles from 'components/themes/themes.scss';
import * as mainStyles from 'styles.scss';
import * as React from 'react';
import { themeList, themesMap } from 'themes/index';

export interface State {
  previewTheme: string;
  addedThemes: string[];
}

export class Themes extends React.PureComponent<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      previewTheme: themeList[0],
      addedThemes: []
    };
  }

  public render(): JSX.Element {
    const { addedThemes, previewTheme } = this.state;

    return (
      <div>
        <Typography variant="headline" component="h3">Themes</Typography>

        <div className={mainStyles.flexContainer}>

          <div className={styles.themeListContainer}>
            <ThemeList
              themes={themeList}
              addedThemes={addedThemes}
              onClickPreview={this.handleThemePreview}
              onClickAddToggle={this.handleAddToggleTheme}
            />
          </div>

          <div className={mainStyles.flex1}>
            <ThemePreview theme={previewTheme} labels={themesMap} />
          </div>

        </div>
      </div>
    );
  }

  private handleThemePreview = (theme: string) => (): void => {
    this.setState({
      previewTheme: theme
    });
  }

  private handleAddToggleTheme = (theme: string) => (): void => {
    const { addedThemes } = this.state;
    const currentIndex = addedThemes.indexOf(theme);
    const newAddedThemes = [...addedThemes];

    currentIndex === -1
    ? newAddedThemes.push(theme)
    : newAddedThemes.splice(currentIndex, 1);

    this.setState({
      addedThemes: newAddedThemes
    })
  }

}
