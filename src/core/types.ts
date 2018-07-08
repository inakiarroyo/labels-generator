/* tslint:disable:no-any */
export type JSS = any;

export type ColorPickerColor = any;

export interface Label {
  name: string;
  description?: string;
  color: string;
}

export interface LabelActive extends Label {
  active: boolean;
}

export interface ThemesMap {
  [key: string]: Array<Label>;
  github: Array<Label>;
  priority: Array<Label>;
  status: Array<Label>;
  type: Array<Label>;
}

export interface FilteredLabelsMap {
  [key: string]: {
    labels: Array<LabelActive>;
    active: boolean;
  };
  current: {
    labels: Array<LabelActive>;
    active: boolean;
  };
  custom: {
    labels: Array<LabelActive>;
    active: boolean;
  };
  github: {
    labels: Array<LabelActive>;
    active: boolean;
  };
  priority: {
    labels: Array<LabelActive>;
    active: boolean;
  };
  status: {
    labels: Array<LabelActive>;
    active: boolean;
  };
  type: {
    labels: Array<LabelActive>;
    active: boolean;
  };
}
