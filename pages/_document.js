import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="AI Story Generator" key="title"/>
        <meta property="og:description" content="Create your own bedtime story" key="description"/>
        <meta
          property="og:image"
          content= '../assets/Book-Image.jpg'
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
