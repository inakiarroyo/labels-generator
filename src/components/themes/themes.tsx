import * as React from 'react';
import * as styles from 'themes.scss';
import { themeList, themesMap } from '../../themes/index';
import { ThemeList } from './theme-list';

export class Themes extends React.PureComponent {
  constructor(props: {}) {
    super(props);

    this.handleTheme = this.handleTheme.bind(this);
  }

  public render(): JSX.Element {
    return (
      <div>
        <h2>Themes</h2>

        <ThemeList themes={themeList} onClickTheme={this.handleTheme} />
      </div>
    );
  }

  private handleTheme(event: React.MouseEvent<HTMLLIElement>, theme: string): void {
    console.log(theme);
  }

}
