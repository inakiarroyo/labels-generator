import * as React from 'react';
import Button from '@material-ui/core/Button';
import * as styles from 'components/editor/editor.scss';
import * as mainStyles from 'styles.scss';
import Typography from '@material-ui/core/Typography';
import { LabelItem } from 'components/labels/label-item';
import { themesMap, themeList } from 'core/constants';
import { FilteredLabelsMap, ThemesMap } from 'core/types';

export interface State {
  // filteredLabelsMap: FilteredLabelsMap;
  addedThemes: string[];
};

export interface Props {

}

export class Editor extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      addedThemes: []
      // filteredLabelsMap: {}
    };
  }

  public render(): JSX.Element {
    return (
      <div className={`${styles.editorFlexContainer} ${mainStyles.flex1}`}>

        <Typography variant="headline" component="h3">Editor</Typography>

        <div className={`${mainStyles.flexContainer} ${mainStyles.flex2}`}>
          <div className={this.getColumsClassNames()}>
            <LabelItem name="Labels Preview" color="#7bdcb5" />
          </div>

        </div>

        <Button variant="contained" color="primary">
          Create Labels
        </Button>

      </div>
    );
  }

  private getColumsClassNames(): string {
    return `${mainStyles.flex1} ${styles.colum}`;
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

// onClickAddToggle={this.handleAddToggleTheme}
// addedThemes={addedThemes}

// export interface Props {
//   themes: string[];
//   addedThemes: string[];
//   onClickPreview: (theme: string) => () => void;
//   onClickAddToggle: (theme: string) => () => void;
// }

// const isAdded = addedThemes.indexOf(theme) !== -1;

// import Switch from '@material-ui/core/Switch';
// import Tooltip from '@material-ui/core/Tooltip';
{/* <Tooltip title={isAdded ? 'Remove Labels' : 'Add Labels'}>
      <Switch
        onChange={onClickAddToggle(theme)}
        checked={isAdded}
      />
    </Tooltip> */}
