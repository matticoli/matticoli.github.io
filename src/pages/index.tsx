import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Fireflies from '../components/fireflies'
import Nav from '../components/nav'
import Hi from '../components/hi'
import {CardOuter, CardInner } from '../components/card'
import Button from '../components/button'

const Home: NextPage = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white">
        <Head>
          <title>Mikel Matticoli</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        <Nav sticky />
        <Fireflies />
        <main className="flex w-full z-10 flex-1 flex-col items-center justify-center text-center">
          <CardOuter>
            <CardInner type="T">
              <Hi />
              <div style={{fontFamily: 'Montserrat'}} className="mt-3 text-l sm:text-l text-left ml-5 mr-5 flex flex-col gap-4 mb-5">
                <p>
                  I’m a Software Engineer & Technical Designer with a passion for making things and helping others.
                </p>
                <p>
                  I have <a className="text-primary underline" href="/resume.pdf">8+ years of experience</a> in software engineering, project management, experience design, & IT.
                </p>
                <p>
                  These are some <a className="text-primary underline" href="/projects">cool things</a> I’ve made!
                </p>
              </div>
            </CardInner>
            <CardInner className="flex flex-row gap-4 sm:gap-10 justify-center" type="B">
              <Button className="inline">More About</Button>
              <Button className="inline">Cool Things</Button>
            </CardInner>
          </CardOuter>

          <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
            <a
              href="https://nextjs.org/docs"
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Documentation &rarr;</h3>
              <p className="mt-4 text-xl">
                Find in-depth information about Next.js features and its API.
              </p>
            </a>

            <a
              href="https://nextjs.org/learn"
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Learn &rarr;</h3>
              <p className="mt-4 text-xl">
                Learn about Next.js in an interactive course with quizzes!
              </p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Examples &rarr;</h3>
              <p className="mt-4 text-xl">
                Discover and deploy boilerplate example Next.js projects.
              </p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className="mt-6 w-96 rounimport Hi from './../components/hi';
  ded-xl border p-6 text-left hover:teximport { LexendDeca } from '@google/fonts';
  t-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
              <p className="mt-4 text-xl">
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
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
    </>
  )
}

export default Home
