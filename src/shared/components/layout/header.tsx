import React from 'react'
import Image from 'next/image'
import HomeScrollDetector from '@/shared/components/interaction/homeScrollDetector'

export default function Header() {
	return (
		<header>
			<HomeScrollDetector>
				<div className='flex justify-center w-full h-full items-center'>
					<Image src='/icon.png' alt="Logo d'Amizia" width={40} height={40} />
					<p className='font-bold text-xl'>Amizia</p>
				</div>
			</HomeScrollDetector>
		</header>
	)
}
