import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import i18next from 'i18next';
import BackEnd from 'i18next-node-fs-backend';
import {handle, missingKeyHandler, LanguageDetector} from 'i18next-express-middleware';
import path from 'path';
import cors from 'cors';

const app = express();
const port = 3000;

i18next
  .use(BackEnd)
  .use(LanguageDetector)
  .init(
    {
      backend: {
        //loadPath: path.resolve(__dirname, '../locales/{{lng}}/{{ns}}.json'),
        addPath: path.resolve(__dirname, '../locales/{{lng}}/{{ns}}')
      },
      fallbackLng: 'en',
      preload: ["en", "ru"],
      saveMissing: true,
      debug: true,
      lng: 'en',
      keySeparator: false, // we do not use keys in form messages.welcome
      nsSeparator: '|',
    }
  );

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(morgan('dev'));
app.use(handle(i18next));

app.post("/locales/add/:lng/:ns", missingKeyHandler(i18next));

app.listen(port, error => {
  if (error) {
    console.error(`Error: ${error}`);
  }

  console.log(`Server listening on port ${port}`);
});
