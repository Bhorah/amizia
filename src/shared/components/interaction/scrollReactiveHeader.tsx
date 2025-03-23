'use client'

import React, { ReactNode, useEffect, useState } from 'react'
import Image from 'next/image'

export default function ScrollReactiveHeader({ children }: { children: ReactNode }) {
	const [isScrolled, setIsScrolled] = useState<boolean>(false)

	useEffect(() => {
		const updateScrolled = () => {
			setIsScrolled(window.scrollY > 50)
		}
		window.addEventListener('scroll', updateScrolled)
		return () => window.removeEventListener('scroll', updateScrolled)
	}, [])

	return (
		<div
			className={`${isScrolled ? 'bg-orange-300' : 'bg-transparent'} 
					w-full h-20 fixed top-0 left-0 z-10 
					transition-header`}>
			<div className='flex justify-center w-full h-full items-center'>
				<div className='relative flex align-center gap-2'>
					{/* Logo blanc */}
					<Image
						src='/white-logo.png'
						alt="Logo d'Amizia"
						width={40}
						height={40}
						className={`transition-header ${isScrolled ? 'opacity-0' : 'opacity-100'}`}
					/>
					{/* Logo orange */}
					<Image
						src='/icon.png'
						alt="Logo d'Amizia"
						width={40}
						height={40}
						className={`absolute transition-header ${isScrolled ? 'opacity-100' : 'opacity-0'}`}
					/>
				</div>
				<p
					className={`${isScrolled ? 'text-black' : 'text-white'} transition-header font-bold text-xl`}>
					Amizia
				</p>
				{children}
			</div>
		</div>
	)
}
