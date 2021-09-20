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
          <NextScript async src="https://www.googletagmanager.com/gtag/js?id=UA-126320896-1" />
          <NextScript
            id:Ganalytics
            onLoad={() => {
              window.dataLayer = window.dataLayer || []
              function gtag() {
                dataLayer.push(arguments)
              }
              gtag('js', new Date())

              gtag('config', 'UA-126320896-1')
            }}
          />

          <NextScript
            async
            type="text/javascript"
            src="https://cdn.weglot.com/weglot.min.js"
          ></NextScript>
          <NextScript
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
