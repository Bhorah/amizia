'use client'

import { useEffect } from 'react'

export default function ScrollOnPageChange() {
	useEffect(() => {
		if (typeof window === 'undefined') return

		// Désactive le scroll automatique du navigateur
		if ('scrollRestoration' in window.history) {
			window.history.scrollRestoration = 'manual'
		}

		return () => {}
	}, [])

	return null
}
