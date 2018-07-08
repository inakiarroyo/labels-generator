import { createGenerateClassName, jssPreset } from '@material-ui/core/styles';
import { AppTitle } from 'components/app-title';
import { Editor } from 'components/editor/editor';
import { Generator } from 'components/generator/generator';
import { GithubRibbon } from 'components/github-ribbon/github-ribbon';
import { RepoConfig } from 'components/repo-config/repo-config';
import { Themes } from 'components/themes/themes';
import { setupStylesInjectionPoint } from 'core/setup-jss';
import { JSS } from 'core/types';
import { create, GenerateClassName } from 'jss';
import * as React from 'react';
import { JssProvider } from 'react-jss';
import * as styles from '../styles.scss';
import Grid from '@material-ui/core/Grid';

export type Props = {};

export class App extends React.Component<Props> {

  private generateClassName: GenerateClassName;
  private jss: JSS;
  private JSS_LABEL: string = 'mui-insertion-point';

  constructor(props: Props) {
    super(props);

    this.generateClassName = createGenerateClassName();
    this.jss = create(jssPreset());
    setupStylesInjectionPoint(this.jss, this.JSS_LABEL);
  }

  public render(): JSX.Element {
    return (
      <JssProvider jss={this.jss} generateClassName={this.generateClassName}>
        <section className={styles.appContainer}>
          <AppTitle />

          <GithubRibbon />

          <RepoConfig />

          <div className={styles.flexContainer}>
            <Generator onCreateLabel={this.handleCreateLabel}/>
            <Editor />
          </div>

          <Themes />

        </section>
      </JssProvider>
    );
  }

  private handleCreateLabel = () => {};
}
