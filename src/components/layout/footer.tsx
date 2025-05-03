import React from 'react'
import Image from 'next/image'
import FormEmailInput from '@/components/interaction/formEmailInput'
import FooterLink from '@/components/footerLink'

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
						<Image
							src='/logo/full-logo/white-big-small.png'
							alt="Logo d'Amizia"
							width={180}
							height={99.22}
							loading={'lazy'}
						/>
						<div className='w-fit flex gap-5'>
							<div>
								<a href={'https://www.instagram.com/_amizia/'} target={'_blank'}>
									<Image
										src='/img/instagram-white-icon.svg'
										alt={'Logo instagram'}
										width={25}
										height={25}
										loading={'lazy'}
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
										loading={'lazy'}
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
										loading={'lazy'}
									/>
								</a>
							</div>
						</div>
					</div>

					<div className='flex items-center'>
						<div className='footer-separator'></div>
					</div>

					<div className={'w-full max-w-[1100px] pt-8 justify-items-center grid grid-cols-2 dynamic-gap'}>
						<div>
							<p className={'text-md tracking-wider'}>AMIZIA</p>
							<div className={'mt-7 space-y-2'}>
								<FooterLink
									href='/qui-sommes-nous'
									extraClasses={'hover:underline hover:underline-offset-4 block tracking-wider'}>
									Qui sommes-nous ?
								</FooterLink>
								<FooterLink
									href='/partenaires'
									extraClasses={'hover:underline hover:underline-offset-4 block tracking-wider'}>
									Partenaires
								</FooterLink>
							</div>
						</div>
						<div>
							<p className={'text-md tracking-wider'}>INFOS PRATIQUES</p>
							<div className={'mt-7 space-y-2'}>
								<FooterLink
									href='/nous-contacter'
									extraClasses={'hover:underline hover:underline-offset-4 block tracking-wider'}>
									Nous contacter
								</FooterLink>
								<FooterLink
									href='/devenir-partenaire'
									extraClasses={'hover:underline hover:underline-offset-4 block tracking-wider'}>
									Devenir Partenaire
								</FooterLink>
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
