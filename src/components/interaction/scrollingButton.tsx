'use client'

import { ScrollingButtonProps } from '@/shared/types/globals'

export default function ScrollingButton(props: ScrollingButtonProps) {
	function handleClick() {
		setTimeout(() => {
			let elementPosition = 0
			const bannerHeight = document.getElementById('reactive-header')?.getBoundingClientRect().height

			if (props.anchorElementId) {
				const target = document.getElementById(props.anchorElementId)
				if (target) {
					// Calculer la position pour centrer l'élément
					elementPosition = target.getBoundingClientRect().top + window.pageYOffset
				}
			}
			// Utiliser window.scrollTo pour ajuster le scroll
			window.scrollTo({
				top: elementPosition - (bannerHeight && bannerHeight !== 0 ? bannerHeight * 2 : window.innerHeight / 6),
				behavior: 'smooth',
			})
		}, 50)
	}

	return (
		<button
			onClick={handleClick}
			className={`${
				props.isVisible
					? `px-16 py-3
			border-2 border-neutral-500
			hover:border-amizia-orange hover:bg-amizia-orange hover:text-white
			transition-all duration-150
			active:scale-95 active:brightness-95`
					: `absolute top-0 left-0 w-full h-full bg-transparent`
			}`}>
			<p>{props.innerText}</p>
		</button>
	)
}
