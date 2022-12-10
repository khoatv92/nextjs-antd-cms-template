import 'styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from 'antd';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import SidebarLayout from 'components/Layout/Sidebar';
import HeaderLayout from 'components/Layout/Header';
import FooterLayout from 'components/Layout/Footer';

const { Content } = Layout;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false
    }
  }
});

const App = ({ Component, pageProps, router }: AppProps) => {
  let renderComponent = <Component {...pageProps} />;
  if (router.pathname !== '/') {
    renderComponent = (
      <Layout style={{ minHeight: '100vh' }}>
        <SidebarLayout />
        <Layout className="site-layout">
          <HeaderLayout />
          <Content style={{ margin: '0 24px' }}>
            <Component {...pageProps} />
          </Content>
          <FooterLayout />
        </Layout>
      </Layout>
    );
  }
  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Ant Design CMS</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      {renderComponent}
    </QueryClientProvider>
  );
};

export default App;
