'use server'

import { EmailFormState } from '@/shared/types/globals'
import { validate } from '@/shared/utils/emailUtils'
import { addToMailingList, createContact } from '@/lib/newletter-api'
import { BREVO_ERROR_MESSAGES } from '@/shared/enums/messages'
import isNil from 'lodash/isNil'

export async function submitNewsletterSignup(previousState: EmailFormState, formData: FormData) {
	const email = formData.get('email') as string

	if (!(formData instanceof FormData)) {
		return returnError('Les données reçues ne sont pas exploitables', email)
	}

	if (isNil(email) || email === '') {
		return returnError("L'email est vide")
	}

	if (!validate(email)) {
		return returnError("Le format de l'email n'est pas valide")
	}

	try {
		await createContact(email)
	} catch (err) {
		if (err instanceof Error && err.message === BREVO_ERROR_MESSAGES.EMAIL_DEJA_EXISTANT) {
			return returnError('Cette adresse est déjà inscrite')
		}
		return returnError('Une erreur est survenue')
	}

	try {
		await addToMailingList(email)
	} catch (err) {
		if (err instanceof Error) {
			return returnError(err.message)
		}
		return returnError('Une erreur est survenue')
	}

	return {
		status: 'success',
		error: null,
		values: {
			email: email,
		},
	}
}

function returnError(errorMessage: string, email?: string): EmailFormState {
	return {
		status: 'error',
		error: errorMessage,
		values: {
			email: email ?? '',
		},
	}
}
