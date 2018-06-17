import * as React from 'react';
import * as styles from './github-ribbon.scss';

export const GithubRibbon = () => (
    <a href="https://github.com/iarroyo5/labels-generator">
      <img
        className={styles.githubRibbon}
        src="https://s3.amazonaws.com/github/ribbons/forkme_right_red_aa0000.png" alt="Fork me on GitHub"
      />
    </a>
);
