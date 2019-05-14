import React from 'react';
import {withTranslation} from "react-i18next";

const FirstPage = ({ t }: { t: any }) => {
  return (
    <div>
      <h1>First Page</h1>
      <div>
        { t('first|foo') }
        { t('asdasd') }
      </div>
    </div>
  );
};

// export default FirstPage;
export default withTranslation('first')(FirstPage);
