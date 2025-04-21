export async function createContact(email: string) {
	const API_KEY = process.env.BREVO_API_KEY as string

	const response = await fetch(`https://api.brevo.com/v3/contacts`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			accept: 'application/json',
			'api-key': API_KEY,
		},
		body: JSON.stringify({
			updateEnabled: false,
			email: email,
		}),
	})

	const data = await response.json()

	if (!response.ok) {
		const message = data?.message || data?.code || 'Erreur de création, veuillez réessayer ultérieurement'
		throw new Error(message)
	}

	return data
}

export async function addToMailingList(email: string) {
	const API_KEY = process.env.BREVO_API_KEY as string
	const LIST_ID = process.env.ID_MAILING_LIST as string

	const response = await fetch(`https://api.brevo.com/v3/contacts/lists/${LIST_ID}/contacts/add`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			accept: 'application/json',
			'api-key': API_KEY,
		},
		body: JSON.stringify({
			emails: [email],
		}),
	})

	const data = await response.json()

	if (!response.ok) {
		const message = data?.message || data?.code || "Erreur d'ajout, veuillez réessayer ultérieurement"
		throw new Error(message)
	}

	return data
}
