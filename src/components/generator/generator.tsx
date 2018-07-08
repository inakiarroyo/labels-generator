import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import * as styles from 'components/generator/generator.scss';
import { LabelItem } from 'components/labels/label-item';
import { ColorPickerColor } from 'core/types';
import * as React from 'react';
import { TwitterPicker } from 'react-color';
import { Label } from 'core/types';

export interface Props {
  onCreateLabel: (label: Label) => void;
}

export type State = Label;

export class Generator extends React.PureComponent<Props, State> {

  private DEFAULT_LABEL_NAME = 'Label Preview';
  private DEFAULT_LABEL_COLOR = '#7bdcb5';

  constructor(props: Props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      color: this.DEFAULT_LABEL_COLOR
    };
  }

  private disableButton(name: string, color: string) {
    return !name || name === '' || !color || color === '';
  }

  public render(): JSX.Element {
    const { name, description, color } = this.state;

    return (
      <div>
        <Typography variant="headline" component="h3">Generator</Typography>

        <Card className={styles.card}>
          <div className={styles.cardHeader}>
            <LabelItem color={color} name={name || this.DEFAULT_LABEL_NAME}/>
          </div>

          <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
            <CardContent>
              <TextField
                id="name"
                label="Name"
                placeholder="New Label Name"
                value={name}
                onChange={this.handleChange}
                margin="normal"
                className={styles.textField}
              />

              <TextField
                  id="description"
                  label="Description"
                  placeholder="Optional Description"
                  value={description}
                  onChange={this.handleChange}
                  margin="normal"
                  className={styles.textField}
                />

              <Typography className={styles.labelColor}>Color</Typography>
              <TwitterPicker
                color={color}
                onChangeComplete={ this.handleColorChange }
              />
            </CardContent>

            <CardActions>
              <Button type="submit" size="small" variant="contained" color="primary" disabled={this.disableButton(name, color)}>
                Create Label
              </Button>
            </CardActions>
          </form>

        </Card>
      </div>
    );
  }

  private handleChange = ({target: { id, value }}: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({[id]: value} as any);
  }

  private handleColorChange = (color: ColorPickerColor) => {
    this.setState({ color: color.hex });
  }

  private handleSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
    console.log(this.state.color, this.state.description, this.state.name);
  }
}
