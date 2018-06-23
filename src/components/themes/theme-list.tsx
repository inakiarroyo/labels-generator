import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';
import Tooltip from '@material-ui/core/Tooltip';
import VisibilityIcon from '@material-ui/icons/Visibility';
import * as React from 'react';
import { capitalize } from '../../utils/utils';

export interface Props {
  themes: string[];
  checkedThemes: string[];
  onClickPreview: (theme: string) => () => void;
  onClickAddToggle: (theme: string) => () => void;
}

export interface State {
  checked: string[];
}

export class ThemeList extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  public render(): JSX.Element {
    const { themes, checkedThemes, onClickPreview, onClickAddToggle } = this.props;

    return (
      <List>
        {
          themes.map((theme) => {
            const isAdded = checkedThemes.indexOf(theme) !== -1;
            const capitalizedTheme = capitalize(theme);

            return (
              <ListItem key={theme}>
                <ListItemText primary={capitalizedTheme} />
                <ListItemSecondaryAction>
                  <Tooltip title="Preview Labels">
                    <IconButton
                      aria-label={theme}
                      onClick={onClickPreview(theme)}
                    >
                      <VisibilityIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title={isAdded ? 'Remove Labels' : 'Add Labels'}>
                    <Switch
                      onChange={onClickAddToggle(theme)}
                      checked={isAdded}
                    />
                  </Tooltip>
                </ListItemSecondaryAction>
              </ListItem>
            )
          })
        }
      </List>
    );
  }

}
