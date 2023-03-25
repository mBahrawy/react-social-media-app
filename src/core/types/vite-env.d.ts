/* eslint-disable @typescript-eslint/triple-slash-reference */
/* eslint-disable import/no-extraneous-dependencies */
/// <reference types="vite/client" />
/// <reference types="redux-thunk/extend-redux" />

import "redux-thunk/extend-redux";

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
