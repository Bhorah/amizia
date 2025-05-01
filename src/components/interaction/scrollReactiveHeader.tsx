'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import ScrollingButton from './scrollingButton'
import { usePathname } from 'next/navigation'

export default function ScrollReactiveHeader() {
	const isHomePage = usePathname() == '/'
	const [isOpaque, setIsOpaque] = useState<boolean>(!isHomePage)

	useEffect(() => {
		const updateScrolled = () => {
			setIsOpaque(window.scrollY > 50 || !isHomePage)
		}
		//Pour forcer le calcul au premier render
		updateScrolled()
		window.addEventListener('scroll', updateScrolled)
		return () => window.removeEventListener('scroll', updateScrolled)
	}, [])

	return (
		<div
			id='reactive-header'
			className={`${isOpaque ? 'bg-header-background' : 'bg-transparent'}
					${isHomePage ? 'fixed transition-header' : null} w-full h-28 top-0 left-0 z-20`}>
			<div className='flex justify-center w-full h-full items-center'>
				<div className='flex w-fit h-fit relative'>
					{/* Logo blanc */}
					<Image
						src='/logo/full-logo/white-big.png'
						alt="Logo d'Amizia"
						width={200}
						height={99.22}
						className={`${isHomePage ? 'transition-header' : null} ${isOpaque ? 'opacity-0' : 'opacity-100'}`}
					/>

					{/* Logo orange */}
					<Image
						src='/logo/full-logo/orange-big.png'
						alt="Logo d'Amizia"
						width={200}
						height={99.22}
						className={`absolute ${isHomePage ? 'transition-header' : null} ${isOpaque ? 'opacity-100' : 'opacity-0'}`}
					/>

					<ScrollingButton isVisible={false} />
				</div>
			</div>
		</div>
	)
}
