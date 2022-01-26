import App, { AppProps } from 'next/app';
import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

// install tailwind in global
import '../styles/global.css';

const queryClient = new QueryClient();

interface MyAppProps extends AppProps {}

export default class MyApp extends App<MyAppProps> {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return (
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    );
  }
}
