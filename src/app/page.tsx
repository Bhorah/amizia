import Image from 'next/image'
import EngagementsScrollButton from '@/shared/components/interaction/engagementsScrollButton'

export default function Home() {
	return (
		<div>
			<Image
				src='/.netlify/images?url=/img/hero-banner.jpg'
				alt='Landscape'
				className='w-full h-[50em] object-cover object-center'
				width={5472}
				height={3648}
			/>

			<div className='p-14 text-neutral-500 text-xl justify-items-center'>
				<p>Véritablement équestre. Libre par nature.</p>

				<div className='mt-10 block'>
					<EngagementsScrollButton />
				</div>
			</div>

			<div className='h-400'>Test</div>

			<div id='engagements_anchor' className='-scroll-mt-80 h-[4000px] bg-red-100'>
				ICI C&apos;EST LES ENGAGEMENTS
			</div>
		</div>
	)
}
