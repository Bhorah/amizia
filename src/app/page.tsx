import Image from 'next/image'

export default function Home() {
	return (
		<div>
			<Image
				src='/landscape.jpg'
				alt='Landscape'
				className='w-full h-auto'
				width={1600}
				height={800}
			/>
			<div className='h-400'>Test</div>
		</div>
	)
}
