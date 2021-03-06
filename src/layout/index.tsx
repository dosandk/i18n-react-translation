import React, { Component } from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import HomePage from "../pages/home-page";
import PageNotFound from '../pages/page-not-found';

import styles from './index.scss';

class Layout extends Component<any> {
  changeLanguage (language: string) {
    return () => {
      this.props.i18n.changeLanguage(language);
    }
  }

  render() {
    const { path } = this.props.match;

    return (
      <main className={styles['layout-container']}>
        <header>
          <menu>
            <ul>
              <li>
                <NavLink to={'/'}>Home</NavLink>
              </li>
            </ul>
          </menu>
        </header>
        <Switch>
          <Route exact={true} path={`${path}`} component={HomePage} />
          <Route path={`${path}`} component={PageNotFound} />
        </Switch>
        <footer>
          Change language:
          <button onClick={this.changeLanguage('en')}>EN</button>
          <button onClick={this.changeLanguage('uk')}>UK</button>
        </footer>
      </main>
    );
  }
}

export default withTranslation()(Layout);
