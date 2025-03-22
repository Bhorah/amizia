import React from 'react'
import Image from 'next/image'
import BackGroundScrollTransitionner from '@/shared/components/interaction/backGroundScrollTransitionner'

export default function Header() {
	return (
		<header>
			<BackGroundScrollTransitionner>
				<div className='flex justify-center w-full h-full items-center'>
					<Image src='/icon.png' alt="Logo d'Amizia" width={40} height={40} />
					<p className='font-bold text-xl'>Amizia</p>
				</div>
			</BackGroundScrollTransitionner>
		</header>
	)
}
