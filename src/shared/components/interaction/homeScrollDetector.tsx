'use client'

import React, { ReactNode, useEffect, useState } from 'react'

export default function HomeScrollDetector({ children }: { children: ReactNode }) {
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
					transition-all duration-500`}>
			{children}
		</div>
	)
}
