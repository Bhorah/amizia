import { ReactNode } from 'react'

export type BasicReactChildrenNode = {
	children: ReactNode
}

export type ScrollingButtonProps = {
	anchorElementId?: string
	isVisible: boolean
	innerText?: string
}

export type EmailFormState = {
	status: 'success' | 'error' | 'neutral'
	error?: string
	values: {
		email?: string
	}
}

export type Partenaire = {
	NAME: string
	IMG_URL: string
	IMG_ALT: string
	DESCRIPTION: string
}
