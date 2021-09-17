import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="alternate" hrefLang="en" href="https://www.youarerad.org" />
          <link rel="alternate" hrefLang="fr" href="https://fr.youarerad.org" />
          <link rel="alternate" hrefLang="de" href="https://de.youarerad.org" />
          <link rel="alternate" hrefLang="ja" href="https://ja.youarerad.org" />
          <link rel="alternate" hrefLang="ko" href="https://ko.youarerad.org" />
          <link rel="alternate" hrefLang="pt" href="https://pt-br.youarerad.org" />
          <link rel="alternate" hrefLang="ru" href="https://ru.youarerad.org" />
          <link rel="alternate" hrefLang="zh" href="https://zh.youarerad.org" />
          <link rel="alternate" hrefLang="es" href="https://es.youarerad.org" />
          <link rel="alternate" hrefLang="th" href="https://th.youarerad.org" />
          <link rel="alternate" hrefLang="vi" href="https://vi.youarerad.org" />
          <script async type="text/javascript" src="https://cdn.weglot.com/weglot.min.js"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: 'Weglot.initialize({api_key:"wg_0f763ce0b95670ae3cec6ef2c30ccffc3"})',
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
