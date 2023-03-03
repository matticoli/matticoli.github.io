import Head from 'next/head'
import ContactPopup from '../components/contact-popup'
import Fireflies from '../components/fireflies'
import Nav from '../components/nav'

export default function PageContainer(props: any) {
	return <>
		<div style={{fontFamily: 'Montserrat'}} className="flex min-h-screen flex-col items-center justify-center bg-slate-900 text-white">
			<Head>
				<title>Mikel Matticoli</title>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />    
			</Head>
			<Nav />
			<Nav sticky />
			<Fireflies />
			<main className="flex w-full z-10 flex-1 flex-col items-center justify-center text-center transition ease-in-out duration-200">
				{props.children}
			</main>
			<ContactPopup />
			<footer className="flex flex-col justify-center items-center h-24 w-full bg-black z-30 opacity-80 p-5">
				<p>©️2023 Mikel Matticoli. Made from scratch with <a href="https://nextjs.org">NextJS</a> and <a href="https://tailwindcss.com">Tailwind</a></p>
				<div className="w-full">
					<span className="absolute sm:mt-[-12px] right-4 w-40 animate-bounce">Contact me 👆</span> 
				</div>
			</footer>
		</div>
	</>
}