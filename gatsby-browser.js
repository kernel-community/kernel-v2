import React from 'react';

import {TranslationProvider} from '@modules/localization';

import Layout from '@modules/layouts/site_layout';
import {NavigationProvider} from '@modules/navigation';
import {Provider, chain, defaultChains} from 'wagmi';
import {InjectedConnector} from 'wagmi/connectors/injected';

//Load our Primsjs css and Fonts
import '@modules/layouts/global.css'; //<- Load in Prismjs css. Our custom styles have to be loaded this way cause Prismjs is blackboxed from our own code.

const infuraId = '3572fb145a934c35a7e0d55ea09ce148';
const chains = defaultChains;

// Set up connectors
const connectors = ({chainId}) => {
  const rpcUrl =
    chains.find((x) => x.id === chainId)?.rpcUrls?.[0] ??
    chain.mainnet.rpcUrls[0];
  return [
    new InjectedConnector({
      chains,
      options: {shimDisconnect: true}
    })
  ];
};

export const wrapRootElement = ({element}) => (
  <TranslationProvider>
    <Provider autoConnect connectors={connectors}>
      {element}
    </Provider>
  </TranslationProvider>
);

export const wrapPageElement = ({element, props}) => (
  <NavigationProvider>
    <Layout {...props}>{element}</Layout>
  </NavigationProvider>
);
