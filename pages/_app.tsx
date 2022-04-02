import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { MDXProvider } from '@mdx-js/react'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <MDXProvider components={{
          h1: props => (
            <header>
              <h1 className={`${(props.children as string).length > 20 ? 'text-3xl' : 'text-5xl'} font-bold italic leading-tight`} {...props} />
            </header>
          ),
          h2: props => <h1 className="text-2xl font-bold pt-6" {...props} />,
          p: props => (
            <div className="text-lg text-gray-200 leading-8 tracking-wide">
              <p {...props} />
            </div>
          ),
          ul: props => (
            <ul className="list-disc list-inside" {...props} />
          ),
        }}>
          <Component {...pageProps} />
        </MDXProvider>
      </Layout>
    </>
  )
}

export default MyApp
