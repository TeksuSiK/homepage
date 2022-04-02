import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const page = ctx.renderPage();

    return { ...page };
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta property="og:title" content="Oskar 'TeksuSiK' Dyka"/>
 					<meta property="og:description" content="Oskar 'TeksuSiK' Dyka"/>
 					<meta property="og:type" content="website"/>
 					<meta property="og:url" content="https://www.teksusik.pl"/>
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        </Head>
        <body className="bg-white dark:bg-black text-gray-800 dark:text-gray-200 relative h-full min-h-screen">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
