import * as React from 'react';
import Button from '@material-ui/core/Button';
import * as styles from 'components/editor/editor.scss';
import * as mainStyles from 'styles.scss';
import Typography from '@material-ui/core/Typography';
import { LabelItem } from 'components/labels/label-item';

export type Props = {};

export class Editor extends React.PureComponent<Props> {

  public render(): JSX.Element {
    return (
      <div className={`${styles.editorFlexContainer} ${mainStyles.flex1}`}>

        <Typography variant="headline" component="h3">Editor</Typography>

        <div className={`${mainStyles.flexContainer} ${mainStyles.flex2}`}>
          <div className={this.getColumsClassNames()}>
            <LabelItem name="Labels Preview" color="#7bdcb5" />
          </div>
          <div className={this.getColumsClassNames()}>
            <LabelItem name="Labels Preview" color="#7bdcb5" />
          </div>
          <div className={this.getColumsClassNames()}>
            <LabelItem name="Labels Preview" color="#7bdcb5" />
          </div>
          <div className={this.getColumsClassNames()}>
            <LabelItem name="Labels Preview" color="#7bdcb5" />
            <LabelItem name="Labels Preview" color="#7bdcb5" />
          </div>
          <div className={this.getColumsClassNames()}>
            <LabelItem name="Labels Preview" color="#7bdcb5" />
          </div>
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
}
