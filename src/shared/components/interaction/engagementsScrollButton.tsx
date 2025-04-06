'use client'

export default function EngagementsScrollButton() {
	function handleClick() {
		setTimeout(() => {
			const target = document.getElementById('engagements_anchor')
			if (target) {
				// Calculer la position pour centrer l'élément
				const elementPosition = target.getBoundingClientRect().top + window.pageYOffset
				const bannerHeight = document.getElementById('reactive-header')?.getBoundingClientRect().height

				// Utiliser window.scrollTo pour ajuster le scroll
				window.scrollTo({
					top: elementPosition - (bannerHeight ? bannerHeight * 2 : window.innerHeight / 6),
					behavior: 'smooth',
				})
			}
		}, 50)
	}

	return (
		<button
			onClick={handleClick}
			className='px-16 py-3
			border-2 border-neutral-500 rounded-xl
			hover:border-amizia-orange hover:bg-amizia-orange hover:text-white
			transition-all duration-150 scroll-smooth'>
			Nos engagements
		</button>
	)
}
