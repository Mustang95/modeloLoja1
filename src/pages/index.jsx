import Head from 'next/head'
import Header from '../components/Header'

export default function Home() {
	return (
		<>
			<Head>
				<title>Modelo Loja | 01</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header></Header>
		</>
	)
}
