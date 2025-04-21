import React from 'react'
import Image from 'next/image'
import FormEmailInput from '@/shared/components/interaction/formEmailInput'

export default function Footer() {
	return (
		<footer className='w-full h-56 bg-amizia-orange'>
			<div className='w-full h-full grid grid-cols-[1fr_auto_2fr_auto_1fr] justify-items-center'>
				<div className='w-full h-full flex flex-col justify-center items-center -mt-4'>
					<Image src='/logo/full-logo/white-big.png' alt="Logo d'Amizia" width={180} height={99.22} />
					<div className='w-fit flex gap-5'>
						<div>
							<a href={'https://www.instagram.com/_amizia/'} target={'_blank'}>
								<Image
									src='/img/instagram-white-icon.svg'
									alt={'Logo instagram'}
									width={25}
									height={25}
								/>
							</a>
						</div>
						<div>
							<a href={'https://www.facebook.com/profile.php?id=61568681446837'} target={'_blank'}>
								<Image
									src='/img/facebook-round-white-icon.svg'
									alt={'Logo fb'}
									width={25}
									height={25}
								/>
							</a>
						</div>
						<div>
							<a href={'https://www.linkedin.com/company/amizia'} target={'_blank'}>
								<Image
									src='/img/linkedin-white-icon.svg'
									alt={'Logo linkedin'}
									width={25}
									height={25}
								/>
							</a>
						</div>
					</div>
				</div>

				<div className='flex items-center'>
					<div className='footer-separator'></div>
				</div>

				<p>Livraison</p>

				<div className='flex items-center'>
					<div className='footer-separator'></div>
				</div>

				<div className='text-white w-full h-full flex flex-col justify-center items-center space-y-2'>
					<FormEmailInput />
				</div>
			</div>
		</footer>
	)
}
