const githubJSON = require('./github.json');
const priorityJSON = require('./priority.json');
const statusJSON = require('./status.json');
const typeJSON = require('./type.json');

export interface Label {
  name: string;
  description?: string;
  color: string;
}

export interface ThemesMap {
  [key: string]: Array<Label>;
  'github': Array<Label>;
  'priority': Array<Label>;
  'status': Array<Label>;
  'type': Array<Label>;
}

export const themesMap: ThemesMap = {
  'github': githubJSON,
  'priority': priorityJSON,
  'status': statusJSON,
  'type': typeJSON,
};

export const themeList = Object.keys(themesMap);
