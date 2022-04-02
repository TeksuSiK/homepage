import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const page = ctx.renderPage();

    return {...page};
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8"/>
        </Head>
        <body className="bg-black text-gray-200 relative h-full min-h-screen">
          <Main/>
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;