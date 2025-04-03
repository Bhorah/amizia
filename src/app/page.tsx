import Image from 'next/image'

export default function Home() {
	return (
		<div>
			<Image
				src='/img/hero-banner.jpg'
				alt='Landscape'
				className='w-full h-[50em] object-cover object-center'
				width={5472}
				height={3648}
			/>
			<div className='h-400'>Test</div>
		</div>
	)
}
