import ScrollOnPageChange from '@/components/interaction/scrollOnPageChange'
import PartenaireCard from '@/components/partenaireCard'
import { PARTENAIRES_TEXT } from '@/shared/enums/partenairesDescription'

export default function PartenairesPage() {
	const PARTENAIRES_CONTENT = PARTENAIRES_TEXT

	return (
		<>
			<ScrollOnPageChange />
			<div className={'h-fit w-full mt-8 mb-30'}>
				<h2 className={'text-5xl text-amizia-orange flex justify-center'}>Nos partenaires</h2>
				<div className={'grid grid-cols-2 w-auto justify-items-center align-middle py-20 gap-2'}>
					<div>
						<PartenaireCard
							imageUrl={'/img/pages/partenaires/ichka.jpg'}
							imgAlt={PARTENAIRES_CONTENT.ICHKA.ALT}
							name={PARTENAIRES_CONTENT.ICHKA.NAME}
							description={PARTENAIRES_CONTENT.ICHKA.DESCRIPTION}
						/>
					</div>
					<div>
						<PartenaireCard
							imageUrl={'/img/pages/partenaires/ichka.jpg'}
							imgAlt={PARTENAIRES_CONTENT.CHEVAUX_MAROC.ALT}
							name={PARTENAIRES_CONTENT.CHEVAUX_MAROC.NAME}
							description={PARTENAIRES_CONTENT.CHEVAUX_MAROC.DESCRIPTION}
						/>
					</div>
				</div>
			</div>
		</>
	)
}
