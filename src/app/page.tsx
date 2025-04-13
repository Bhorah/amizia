import Image from 'next/image'
import ScrollingButton from '@/shared/components/interaction/scrollingButton'

export default function Home() {
	return (
		<>
			{/** Hero Banner **/}

			<Image
				src='/img/hero-banner.jpg'
				alt='Landscape'
				className='w-full h-[50em] object-cover object-center'
				width={5472}
				height={3648}
			/>

			{/** Bouton Engagements **/}
			<div className='p-12 text-text-gray text-lg justify-items-center'>
				<p>Véritablement équestre. Libre par nature.</p>

				<div className='mt-8 block'>
					<ScrollingButton
						anchorElementId='engagements_anchor'
						isVisible={true}
						innerText='Nos engagements'
					/>
				</div>
			</div>

			{/** Valeurs **/}
			{
				//prettier-ignore
			}
			<div className='h-fit w-full bg-amizia-orange text-white'>
				<div className='grid grid-cols-3 gap-40 p-16 text-center'>
					<div className="col-first max-w-20 sm:max-w-md md:max-w-lg lg:max-w-xl">
              <h2 className="text-5xl tracking-wide">Qualité</h2>
              <p className="mt-6">Matériaux pensés et testés pour être resistants et respirants, alliant confort et esthétique</p>
          </div>

          <div className="col-first max-w-20 sm:max-w-md md:max-w-lg lg:max-w-xl">
              <h2 className="text-5xl tracking-wide whitespace-nowrap">Authenticité</h2>
              <p className="mt-6">Produits faits main, créés et pensés depuis l&#39;artisanat marocain</p>
          </div>

          <div className="col-first max-w-20 sm:max-w-md md:max-w-lg lg:max-w-xl">
              <h2 className="text-5xl tracking-wide">Évasion</h2>
              <p className="mt-6">Découverte de nouveaux matériaux, motifs et techniques, au service de l&#39;équitation</p>
          </div>
				</div>
			</div>

			<div className='h-400'>Test</div>

			{/** Engagements **/}
			<div id='engagements_anchor' className='grid grid-cols-2 gap-20 items-stretch h-fit mb-30'>
				<div className='w-full text-amizia-orange text-center flex flex-col h-full'>
					<h2 className='text-3xl mb-5'>Nos engagements</h2>
					<div className='flex-1 flex items-center'>
						<div className='space-y-8 text-lg max-w-150 mx-auto'>
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
						</div>
					</div>
				</div>

				<Image
					src={'/img/engagements.png'}
					alt='morrocan-coast-view'
					width={1500}
					height={800}
					className='object-cover w-full'></Image>
			</div>

			{
				//Pré-footer
			}
			<div className='w-full h-32 bg-amizia-light-orange grid grid-cols-3 text-white text-xl text-center content-center'>
				<p>Paiement sécurisé</p>
				<p>Livraison</p>
				<p>Un autre truc</p>
			</div>
		</>
	)
}
