import * as githubJSON from './github.json';
import * as priorityJSON from './priority.json';
import * as statusJSON from './status.json';
import * as typeJSON from './type.json';

export interface ThemesMap {
  [key: string]: {};
  'github': {};
  'priority': {};
  'status': {};
  'type': {};
}

export const themesMap: ThemesMap = {
  'github': githubJSON,
  'priority': priorityJSON,
  'status': statusJSON,
  'type': typeJSON,
};

export const themeList = Object.keys(themesMap);
