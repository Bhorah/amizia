import Image from 'next/image'
import { Partenaire } from '@/shared/types/globals'

export default function PartenaireCard({ partenaire }: { partenaire: Partenaire }) {
	return (
		<div className={'flex flex-col justify-center items-center text-center p-20'}>
			<Image
				src={partenaire.IMG_URL}
				alt={partenaire.IMG_ALT}
				width={150}
				height={150}
				className={'rounded-full'}></Image>
			<p className={'text-amizia-orange my-3 font-semibold text-xl'}>{partenaire.NAME}</p>
			<p className={'max-w-120'}>{partenaire.DESCRIPTION}</p>
		</div>
	)
}
