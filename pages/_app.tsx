import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;600&display=swap');

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Raleway, Helvetica, Sans-Serif;
  }
`;

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />;
    </>
  );
}
