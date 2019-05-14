import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import { withTranslation } from 'react-i18next';

import Button from '../../components/button';

import styles from './index.scss';

const cx = classNames.bind(styles);

const PageNotFound = ({ t }: any) => {
  return (
    <div className={cx('page-not-found')}>
      <h1>{t('Sorry!')}</h1>
      <p className="body text-center">
        {t('The page you are looking for was moved, deleted, renamed or might never existed.')}
      </p>
      <NavLink to="/">
        <Button caption={t('HOME PAGE')} classN="button-submit" />
      </NavLink>
    </div>
  );
};

export default withTranslation('notFound')(PageNotFound);
