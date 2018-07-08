import { ThemesMap } from 'core/types';
import { githubJSON, priorityJSON, statusJSON, typeJSON } from 'themes/index';

export const themesMap: ThemesMap = {
  github: githubJSON,
  priority: priorityJSON,
  status: statusJSON,
  type: typeJSON
};

export const themeList = Object.keys(themesMap);
