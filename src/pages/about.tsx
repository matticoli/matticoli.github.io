import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Fireflies from '../components/fireflies'

const About: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Fireflies />
      <main className="flex z-10 w-full flex-1 flex-col items-center justify-center text-center">
        <div className="flex flex-1 flex-col items-left justify-left text-left p-4 w-full bg-zinc-900 h-20">
        <h1 className="text-4xl font-bold">
          <a className="text-white-200" href="https://nextjs.org">
            Mikel Matticoli
          </a>
        </h1>
        </div>

      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default About
