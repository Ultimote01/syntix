import localFont from "next/font/local";
import { Inter } from 'next/font/google';
import clsx from "clsx";


import { Providers } from "./providers";
import Layout from "@/components/Layout";
import '@/styles/preflight.css'
import "../styles/globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

// Use local version of Lexend so that we can use OpenType features
const lexend = localFont({
  src: '../fonts/lexend.woff2',
  display: 'swap',
  variable: '--font-lexend',
})



export const metadata = {
  title: {
    template: '%s - Docs',
    default: 'CacheAdvance - Never miss the cache again.',
  },
  description:
    'Cache every single thing your app could ever do ahead of time, so your code never even has to run at all.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en"
    className={clsx('root-layout-html')}
    suppressHydrationWarning>
      <body className={'root-layout-body'}>
        <Providers>
        <Layout>  
        {children}
        </Layout>
        </Providers>
      </body>
    </html>
  );
}
