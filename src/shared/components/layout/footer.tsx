import React from 'react'
import Image from 'next/image'

export default function Footer() {
	return (
		<footer className='w-full h-50 bg-amizia-orange'>
			<div className='w-full h-full grid grid-cols-[1fr_auto_1.5fr_auto_1fr]'>
				<div className='w-full h-full'>
					<Image src='/logo/full-logo/white-big.png' alt="Logo d'Amizia" width={200} height={200} />
				</div>

				<div className='flex items-center'>
					<div className='w-0.5 h-30 bg-white rounded'></div>
				</div>

				<p>Livraison</p>

				<div className='flex items-center'>
					<div className='w-0.5 h-30 bg-white rounded'></div>
				</div>

				<p>Un autre truc</p>
			</div>
		</footer>
	)
}
