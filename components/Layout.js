import Head from 'next/dist/shared/lib/head'
import dynamic from 'next/dynamic'
const Navbar = dynamic(() => import('../components/Navbar.js'))
const Footer = dynamic(() => import('../components/Footer.js'))

export const siteTitle = 'Rise Above The Disorder'
export default function Layout({ children, pageHeader, pageTitle, pageLink, description }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="mental health, wellness, nonprofit, charity, gaming, esports, "
        ></meta>
        <meta name="description" content={description} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={'https://youarerad.org/' + { pageLink }} />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@youarerad" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content="/public/radlogo.png" />
        <meta
          name="twitter:image:alt"
          content="Rise Above The Disorder's current logo. A brain shaped from a heart."
        />
      </Head>
      <div id="root">
        <header className="">
          <Navbar></Navbar>
          {pageHeader}
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}
