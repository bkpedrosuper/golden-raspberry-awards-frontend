import React from 'react';
import Layout from './Layout';

interface AppProps {
  Component: React.ElementType;
  pageProps: any; // Pode personalizar esta tipagem de acordo com suas necessidades
}

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Layout> {/* Envolve todas as páginas com o layout */}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
