import { Partenaire } from '@/shared/types/globals'

export const PARTENAIRES_LIST = {
	ICHKA: {
		NAME: 'ichka photographie',
		IMG_URL: '/img/pages/partenaires/ichka.jpg',
		IMG_ALT: 'photo ichka photographie',
		DESCRIPTION:
			'ichka photo nous accompagne depuis longtemps sur le ichka photo nous accompagne depuis longtemps sur le ichka photo nous accompagne depuis longtemps sur le ichka photo nous accompagne depuis longtemps sur le ichka photo nous accompagne depuis longtemps sur le ichka photo nous accompagne depuis longtemps sur le ichka photo nous accompagne depuis longtemps sur le ichka photo nous accompagne depuis longtemps sur le projet',
	},
	CHEVAUX_MAROC: {
		NAME: 'Les chevaux du maroc',
		IMG_URL: '/img/pages/partenaires/ichka.jpg',
		IMG_ALT: 'photo ichka photographie',
		DESCRIPTION: 'Grande force à eux, leurs chevaux sont magnifiques. Ils nous ont beaucoup aidés',
	},
} as const satisfies Record<string, Partenaire>
