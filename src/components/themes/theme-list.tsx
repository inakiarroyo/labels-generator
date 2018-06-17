import * as React from 'react';

export interface Props {
  themes: string[];
  onClickTheme: (event: React.MouseEvent<HTMLLIElement>, theme: string) => void;
}

export class ThemeList extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  public render(): JSX.Element {
    const { onClickTheme, themes } = this.props;

    return (
      <ul>
        {
          themes.map((theme) => (
            <li key={theme} onClick={(e) => onClickTheme(e, theme)}>
              {theme}
            </li>
          ))
        }
      </ul>
    );
  }

}
