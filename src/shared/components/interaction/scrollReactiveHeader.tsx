'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { BasicReactChildrenNode } from '@/shared/types/globals'
import ScrollingButton from '@/shared/components/interaction/scrollingButton'

export default function ScrollReactiveHeader({ children }: Readonly<BasicReactChildrenNode>) {
	const [isScrolled, setIsScrolled] = useState<boolean>(false)

	useEffect(() => {
		const updateScrolled = () => {
			setIsScrolled(window.scrollY > 50)
		}
		//Pour forcer le calcul au premier render
		updateScrolled()
		window.addEventListener('scroll', updateScrolled)
		return () => window.removeEventListener('scroll', updateScrolled)
	}, [])

	return (
		<div
			id='reactive-header'
			className={`${isScrolled ? 'bg-header-background' : 'bg-transparent'}
					w-full h-28 fixed top-0 left-0 z-10
					transition-header`}>
			<div className='flex justify-center w-full h-full items-center'>
				<div className='flex w-fit h-fit relative'>
					{/* Logo blanc */}
					<Image
						src='/logo/full-logo/white-big.png'
						alt="Logo d'Amizia"
						width={200}
						height={200}
						className={`transition-header ${isScrolled ? 'opacity-0' : 'opacity-100'}`}
					/>

					{/* Logo orange */}
					<Image
						src='/logo/full-logo/orange-big.png'
						alt="Logo d'Amizia"
						width={200}
						height={200}
						className={`absolute transition-header ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
					/>

					<ScrollingButton isVisible={false} />
				</div>
				{children}
			</div>
		</div>
	)
}
