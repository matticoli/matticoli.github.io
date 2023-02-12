import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Fireflies from '../components/fireflies'
import Nav from '../components/nav'
import Hi from '../components/hi'
import {CardOuter, CardInner } from '../components/card'
import Button from '../components/button'
import Elec from '../components/elec'
import ContactPopup from '../components/contact-popup'

const Home: NextPage = () => {
  return (
    <>
      <div style={{fontFamily: 'Montserrat'}} className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white">
        <Head>
          <title>Mikel Matticoli</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav />
        <Nav sticky />
        <Fireflies />
        <main className="flex w-full z-10 flex-1 flex-col items-center justify-center text-center">
          <div className="flex flex-row align-left justify-left">
            <Elec className="flex-shrink mt-2 left-2" />
            <span className="flex-grow w-11/12 sm:w-10/12 lg:w-9/12 xl:w-8/12" />
          </div>
          <CardOuter>
            <CardInner type="T">
                <div className="flex flex-wrap align-center justify-center m-4">
                  <Hi className="mt-4" />
                  <img className="sm:w-6/12" src="/assets/111-coding.png" alt="A web illustration of a smiling coffy cup and a clipboard checklist next to a laptop" />
                </div>
              <div className="mt-3 text-l sm:text-l text-left ml-5 mr-5 flex flex-col gap-4 mb-5">
                <p>
                  I’m a Software Engineer & Technical Designer with a passion for making things and helping others.
                  I have <a className="text-primary underline" href="/resume.pdf">8+ years of experience</a> in software engineering, project management, experience design, & IT.
                  These are some <a className="text-primary underline" href="/projects">cool things</a> I’ve made!
                </p>
              </div>
            </CardInner>
            <CardInner className="flex flex-row gap-4 sm:gap-10 justify-center" type="B">
              <Button className="inline">More About</Button>
              <Button className="inline">Cool Things</Button>
            </CardInner>
          </CardOuter>

          <CardOuter reverse>
            <CardInner reverse type="T">
              <h2 className="text-2xl text-primary">Featured Projects</h2>
            </CardInner>
          <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
            <CardInner type="M"
              className="mt-6 w-full text-left"
            >
              <h2>The Call of Karen is a </h2>
            </CardInner>

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
          </CardOuter>
        </main>
        <ContactPopup />
        <footer className="flex h-24 w-full items-center justify-center bg-black z-1 opacity-80">
          <p>Made from scratch with <a href="">Next</a> and <a href="">Tailwind</a></p>
        </footer>
      </div>
    </>
  )
}

export default Home
