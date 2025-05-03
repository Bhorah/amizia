import ScrollOnPageChange from '@/components/interaction/scrollOnPageChange'
import PartenaireCard from '@/components/partenaireCard'
import { PARTENAIRES_LIST } from '@/shared/enums/partenairesDescription'

export default function PartenairesPage() {
	return (
		<div id='partner page' className={'flex flex-col h-full w-full'}>
			<ScrollOnPageChange />
			<div className={'h-full mt-8 mb-8'}>
				<h2 className={'text-5xl text-amizia-orange flex justify-center'}>Nos partenaires</h2>
				<div className={'grid grid-cols-2 max-w-[80vw] mx-auto justify-items-center p-20'}>
					<div>
						<PartenaireCard partenaire={PARTENAIRES_LIST.ICHKA} />
					</div>
					<div>
						<PartenaireCard partenaire={PARTENAIRES_LIST.CHEVAUX_MAROC} />
					</div>
				</div>
			</div>
		</div>
	)
}
