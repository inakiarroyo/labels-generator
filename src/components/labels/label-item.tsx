import * as styles from 'components/labels/labels.scss';
import * as React from 'react';
import { Label } from 'themes/index';
import { getTextColorFromBackground } from 'utils/utils';
import Typography from '@material-ui/core/Typography';
import { emojify } from 'node-emoji';

export interface LabelTitle {
  isTitle?: boolean;
}

export type Props = Label & LabelTitle;

export const LabelItem = ({name, color, description = '', isTitle = false}: Props) => {
  const textColor = getTextColorFromBackground(color);
  // const emojifyedName = emojify(name);

  return (
    <Typography>
      <span
        className={isTitle ? styles.labelTitle : styles.label}
        style={{backgroundColor: color, color: textColor}}
      >
        {/* {emojifyedName} */}
        {name}
      </span>
    </Typography>
  );
}
