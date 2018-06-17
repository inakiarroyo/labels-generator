import * as React from 'react';
import * as styles from './labels.scss';
import { getTextColorFromBackground } from '../../helpers/utils';
import { Label } from '../../themes/index';

export interface LabelTitle {
  isTitle?: boolean;
}

export type Props = Label & LabelTitle;

export const LabelItem = ({name, color, description = '', isTitle = false}: Props) => {
  const textColor = getTextColorFromBackground(color);

  return (
    <span
      className={isTitle ? styles.labelTitle : styles.label}
      style={{backgroundColor: color, color: textColor}}
    >
      {name}
    </span>
  );
}
