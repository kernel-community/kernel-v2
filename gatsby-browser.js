import React from 'react';

import {TranslationProvider} from '@modules/localization';

import Layout from '@modules/layouts/site_layout';
import {NavigationProvider} from '@modules/navigation';
import {Provider} from 'wagmi';
import {connectors, provider, connectorStorageKey} from '@src/course/connect';
//Load our Primsjs css and Fonts
import '@modules/layouts/global.css'; //<- Load in Prismjs css. Our custom styles have to be loaded this way cause Prismjs is blackboxed from our own code.

export const wrapRootElement = ({element}) => (
  <TranslationProvider>
    <Provider
      autoConnect
      connectors={connectors}
      provider={provider}
      connectorStorageKey={connectorStorageKey}>
      {element}
    </Provider>
  </TranslationProvider>
);

export const wrapPageElement = ({element, props}) => (
  <NavigationProvider>
    <Layout {...props}>{element}</Layout>
  </NavigationProvider>
);
