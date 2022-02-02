import AppContext from '@context/AppContext';
import Script from 'next/script';
import useInitialState from '@hooks/useInitialState';
import Header from '@components/Header';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Header />
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-RE3D04G2WD" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-RE3D04G2WD');
      `}
      </Script>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
