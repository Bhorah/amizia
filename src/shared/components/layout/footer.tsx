import React from 'react'
import Image from 'next/image'

export default function Footer() {
	return (
		<footer className='w-full h-48 bg-amizia-orange'>
			<div className='w-full h-full grid grid-cols-[1fr_auto_1.5fr_auto_1fr] justify-items-center'>
				<div className='w-full h-full flex-col justify-items-center'>
					<Image src='/logo/full-logo/white-big.png' alt="Logo d'Amizia" width={200} height={99.22} />
					<div className='w-fit flex gap-2'>
						<div>Insta</div>
						<div>Facebook</div>
						<div>LinkedIn</div>
					</div>
				</div>

				<div className='flex items-center'>
					<div className='w-0.5 h-36 bg-white rounded'></div>
				</div>

				<p>Livraison</p>

				<div className='flex items-center'>
					<div className='w-0.5 h-36 bg-white rounded'></div>
				</div>

				<p>Un autre truc</p>
			</div>
		</footer>
	)
}
