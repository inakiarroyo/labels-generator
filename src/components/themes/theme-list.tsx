import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import VisibilityIcon from '@material-ui/icons/Visibility';
import * as React from 'react';
import { capitalize } from '../../utils/utils';

export interface Props {
  themes: string[];
  onClickPreview: (theme: string) => () => void;
}

export interface State {
  checked: string[];
}

export class ThemeList extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  public render(): JSX.Element {
    const { themes, onClickPreview } = this.props;

    return (
      <List>
        {
          themes.map((theme) => {
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
                </ListItemSecondaryAction>
              </ListItem>
            )
          })
        }
      </List>
    );
  }

}
