import React from 'react';
import {Helmet} from 'react-helmet';

export default function Error404() {
  return (
    <>
      <Helmet>
        <title>Error</title>
      </Helmet>
      <h1 className="row__label error">Sorry, error 404</h1>
    </>
  );
}
