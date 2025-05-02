import React from 'react'
import Image from 'next/image'
import FormEmailInput from '@/components/interaction/formEmailInput'

export default function Footer() {
	return (
		<div className={'text-white'}>
			{/** Pré-footer **/}
			<div className='w-full h-24 bg-amizia-light-orange text-xl flex justify-center items-center gap-5'>
				<p className={'word-small-gap'}>Véritablement équestre.</p>
				<p>Libre par nature.</p>
			</div>

			<footer className='w-full h-48 bg-amizia-orange'>
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

					<div className={'w-full max-w-[1100px] justify-items-center grid grid-cols-2 dynamic-gap pt-10'}>
						<div>
							<p className={'text-md'}>AMIZIA</p>
							<div className={'mt-5 space-y-1'}>
								<p className={'text-xs'}>Qui sommes nous ?</p>
								<p className={'text-xs'}>Partenaires</p>
							</div>
						</div>
						<div>
							<p className={'text-md'}>INFOS PRATIQUES</p>
							<div className={'mt-5 space-y-1'}>
								<p className={'text-xs'}>Nous contacter</p>
								<p className={'text-xs'}>Devenir partenaire</p>
							</div>
						</div>
					</div>

					<div className='flex items-center'>
						<div className='footer-separator'></div>
					</div>

					<div className='w-full h-full flex flex-col justify-center items-center space-y-2'>
						<FormEmailInput />
					</div>
				</div>
			</footer>
		</div>
	)
}
