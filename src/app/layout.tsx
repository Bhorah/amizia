import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { BasicReactChildrenNode } from '@/shared/types/globals'

export const metadata: Metadata = {
	title: 'Amizia | Libre par nature',
	description: 'Amizia, véritablement équestre, libre par nature.',
}

export default function RootLayout({ children }: Readonly<BasicReactChildrenNode>) {
	return (
		<html lang='fr'>
			<body className={'antialiased flex flex-col min-h-screen h-full'}>
				<Header />
				<main className={'flex-grow'}>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
