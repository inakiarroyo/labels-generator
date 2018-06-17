import * as React from 'react';
import * as styles from './generator.scss';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { LabelItem } from '../labels/label';
import Paper from '@material-ui/core/Paper';

export interface State {
  labelName: string;
  labelColor: string;
}

const DEFAULT_LABEL_NAME = 'label preview';
const DEFAULT_LABEL_COLOR = '#98EBED';

export class Generator extends React.PureComponent<{}, State> {

  constructor(props: {}) {
    super(props);

    this.state = {
      labelName: '',
      labelColor: DEFAULT_LABEL_COLOR
    };

    this.handleChange = this.handleChange.bind(this);
  }

  public render(): JSX.Element {
    return (
      <div>
        <Typography variant="headline" component="h3">Generator</Typography>

        <Paper>
          <LabelItem color={this.state.labelColor} name={this.state.labelName || DEFAULT_LABEL_NAME}/>

          <form noValidate autoComplete="off">
            <TextField
              id="labelName"
              label="Name"
              placeholder="New Label Name"
              value={this.state.labelName}
              onChange={this.handleChange('labelName')}
              margin="normal"
              className={styles.textField}
            />

            <TextField
              id="labelDescription"
              label="Description"
              placeholder="Optional Description"
              margin="normal"
              className={styles.textField}
            />

            <TextField
              id="labelColor"
              label="Color"
              value="#98EBED"
              margin="normal"
              className={styles.textField}
            />

            <Button variant="contained" color="primary">
              Create Label
            </Button>
          </form>
        </Paper>
      </div>
    );
  }

  private handleChange = (labelName: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      labelName: event.target.value
    });
  };
}
