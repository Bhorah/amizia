'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ScrollingButton from './scrollingButton'
import { usePathname } from 'next/navigation'
import orangeLogo from '@/../public/logo/full-logo/orange-big-small.png'
import whiteLogo from '@/../public/logo/full-logo/white-big-small.png'

export default function ScrollReactiveHeader() {
	const pathname = usePathname()
	const isHomePage = pathname === '/'
	const [isOpaque, setIsOpaque] = useState<boolean>(!isHomePage)

	useEffect(() => {
		const updateScrolled = () => {
			setIsOpaque(window.scrollY > 50 || !isHomePage)
		}

		//Pour forcer le calcul au premier render
		updateScrolled()
		window.addEventListener('scroll', updateScrolled, { passive: true })
		return () => window.removeEventListener('scroll', updateScrolled)
	}, [isHomePage])

	return (
		<div
			id='reactive-header'
			className={`${isOpaque ? 'bg-header-background shadow-md' : 'bg-transparent'}
					${isHomePage ? 'fixed transition-header' : null} w-full h-28 top-0 left-0 z-20`}>
			<div className='flex justify-center w-full h-full items-center'>
				<div className='flex w-fit h-fit relative'>
					{/* Logo blanc */}
					<Image
						src={whiteLogo}
						alt="Logo d'Amizia"
						width={200}
						height={99.22}
						className={`${isHomePage ? 'transition-header' : null} ${isOpaque ? 'opacity-0' : 'opacity-100'}`}
						loading={'eager'}
					/>

					{/* Logo orange */}
					<Image
						src={orangeLogo}
						alt="Logo d'Amizia"
						width={200}
						height={99.22}
						className={`absolute ${isHomePage ? 'transition-header' : null} ${isOpaque ? 'opacity-100' : 'opacity-0'}`}
						loading={'eager'}
					/>

					<ScrollingButton isVisible={false} />
				</div>
			</div>
		</div>
	)
}
