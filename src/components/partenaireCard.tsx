import Image from 'next/image'
import { PartenaireCardProps } from '@/shared/types/globals'

export default function PartenaireCard(props: PartenaireCardProps) {
	return (
		<div className={'flex flex-col justify-center items-center text-center'}>
			<Image src={props.imageUrl} alt={props.imgAlt} width={150} height={150} className={'rounded-full'}></Image>
			<p className={'text-amizia-orange my-3 font-semibold text-xl'}>{props.name}</p>
			<p className={'max-w-120'}>{props.description}</p>
		</div>
	)
}
