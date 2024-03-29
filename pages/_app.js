import Layout from '../components/Layout';
import '../styles/globals.css';
//import 'bootstrap-icons/font/bootstrap-icons.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
   
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}

export default MyApp;
