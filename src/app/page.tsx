import Image from 'next/image'
import ScrollingButton from '@/components/interaction/scrollingButton'
import Link from 'next/link'
import heroImage from '../../public/img/hero-banner-small.webp'

export default function Home() {
	return (
		<>
			{/** Hero Banner **/}
			<Image
				src={heroImage}
				alt='Landscape'
				className={`w-full h-[50em] object-cover object-center`}
				width={1905}
				height={800}
				placeholder={'blur'}
				priority
			/>

			{/** Bouton Engagements **/}
			<div className='p-12 text-text-gray text-lg justify-items-center'>
				<p>Véritablement équestre. Libre par nature.</p>

				<div className='mt-8 block'>
					<ScrollingButton
						anchorElementId='engagements_anchor'
						isVisible={true}
						innerText='Découvrir la marque'
					/>
				</div>
			</div>

			{/** Valeurs **/}

			<div className='h-fit w-full bg-amizia-orange text-white'>
				<div className='grid grid-cols-3 gap-40 py-16 justify-items-center text-center valeur'>
					<div className='col-first sm:max-w-sm md:max-w-md lg:max-w-md'>
						<h2 className='text-5xl tracking-wide'>Qualité</h2>
						<p className='text-md valeurs-texte'>
							Matériaux pensés et testés pour être resistants et respirants, alliant confort et esthétique
						</p>
					</div>

					<div className='col-first sm:max-w-sm md:max-w-md lg:max-w-md'>
						<h2 className='text-5xl tracking-wide whitespace-nowrap'>Authenticité</h2>
						<p className='text-md valeurs-texte'>
							Produits faits main, créés et pensés depuis l&#39;artisanat marocain
						</p>
					</div>

					<div className='col-first sm:max-w-sm md:max-w-md lg:max-w-md'>
						<h2 className='text-5xl tracking-wide'>Évasion</h2>
						<p className='text-md valeurs-texte'>
							Découverte de nouveaux matériaux, motifs et techniques, au service de l&#39;équitation
						</p>
					</div>
				</div>
			</div>

			{/** Tapis Amizia **/}

			<div className={'relative w-full flex justify-center'}>
				<Image
					src='/img/tapis_background.png'
					alt='riding-rug-background'
					width={1905}
					height={800}
					className={'z-0 w-full h-[50em] object-cover object-center opacity-30 mb-24'}
					loading={'lazy'}
				/>

				<p
					className={
						'absolute z-10 text-5xl text-neutral-800 pt-10 tracking-wide word-small-gap drop-shadow-lg'
					}>
					Les tapis Amizia
				</p>
			</div>

			{/** Marque **/}
			<div
				id='engagements_anchor'
				className='grid grid-cols-2 gap-20 items-stretch h-fit mb-30 max-w-[2200px] mx-auto'>
				<div className='w-full h-full text-amizia-orange text-center flex flex-col'>
					<h2 className='text-4xl mb-5'>Notre marque</h2>
					<div className='flex-1 flex items-center'>
						<div className='space-y-8 text-lg max-w-170 mx-auto'>
							<p>
								Amizia est née d’une passion commune pour les chevaux et d’un respect pour le
								savoir-faire traditionnel. Nous créons des tapis uniques au designs modernes et
								fonctionnels, associant l’élégance et l’authenticité des tissus importés du Maghreb.
							</p>
							<p>
								Chaque pièce est conçue avec soin, mettant en valeur des matières de qualité et des
								motifs inspirés de l’artisanat maghrébin. Engagés pour une production durable et
								éthique, nous travaillons avec des artisans qualifiés dans des conditions justes. Chaque
								tapis est conçu avec passion pour offrir confort et technicité tout en respectant nos
								valeurs : préservation du savoir-faire et responsabilité sociale.
							</p>
							<p>
								Notre objectif ? Offrir aux cavaliers des produits esthétiques, ergonomiques et
								durables, tout en soutenant un commerce responsable et valorisant des traditions
								textiles riches en histoire.
							</p>
							<Link href='/nous-contacter'>
								<button className='px-10 py-2 classicButton'>
									<p>En savoir plus</p>
								</button>
							</Link>
						</div>
					</div>
				</div>

				<Image
					src={'/img/engagements.png'}
					alt='morrocan-coast-view'
					width={912}
					height={606}
					className='object-cover w-full h-full'
					loading={'lazy'}></Image>
			</div>
		</>
	)
}
