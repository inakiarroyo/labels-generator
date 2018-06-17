import * as React from 'react';
import { GithubRibbon } from './github-ribbon/github-ribbon';
import { RepoConfig } from './repo-config/repo-config';
import { Themes } from './themes/themes';
import { Generator } from './generator/generator';
import { Editor } from './editor/editor';


export const App = () => (
  <React.Fragment>
    <h1>Labels Generator</h1>
    <GithubRibbon />

    <RepoConfig />
    <Themes />
    <Generator />
    <Editor />

  </React.Fragment>
);
