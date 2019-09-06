import React from 'react';
import P from "../../components/paragraph";
import H from "../../components/heading";
import {withTranslation} from "react-i18next";

const HomePage = ({t}: any) => {
  return (
    <>
      <H level="one">{t('Home Page')}</H>
      <ul>
        <li>
          <P>{t('This is a table')}</P>
        </li>
        <li>
          <P>{t('This is an apple')}</P>
        </li>
        <li>
          <P>{t('Sun')}</P>
        </li>
      </ul>
    </>
  );
};

export default withTranslation('homePage')(HomePage);

