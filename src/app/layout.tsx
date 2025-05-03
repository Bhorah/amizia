import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { BasicReactChildrenNode } from '@/shared/types/globals'

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
})

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Amizia | Libre par nature',
	description: 'Amizia, véritablement équestre, libre par nature.',
}

export default function RootLayout({ children }: Readonly<BasicReactChildrenNode>) {
	return (
		<html lang='fr'>
			<body className={'antialiased'}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
