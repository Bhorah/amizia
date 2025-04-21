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
	status: 'success' | 'error' | 'pending' | undefined
	error?: string
	values: {
		email?: string
	}
}
