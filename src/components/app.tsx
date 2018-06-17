import * as React from 'react';
import { GithubRibbon } from './github-ribbon/github-ribbon';
import { RepoConfig } from './repo-config/repo-config';
import { Themes } from './themes/themes';
import { Generator } from './generator/generator';
import { Editor } from './editor/editor';
import { AppTitle } from './app-title';

export const App = () => (
  <React.Fragment>
    <AppTitle />

    <GithubRibbon />

    <RepoConfig />
    <Themes />
    <Generator />
    <Editor />

  </React.Fragment>
);
