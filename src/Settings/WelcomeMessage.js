import React from 'react';
import {AppContext} from "../App/AppProvider";

export default function Welcomemessage({firstVisit}) {
  return (
    <AppContext.Consumer>
      {({firstVisit}) =>
        firstVisit ? <div>
          Welcome to CryptoDaddy, please select your favorite coins to begin.{' '}
        </div> : null
      }
    </AppContext.Consumer>
  );
};
