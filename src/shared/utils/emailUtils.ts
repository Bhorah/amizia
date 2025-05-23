const tester =
	/^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/

export const validate = (email: string) => {
	if (!email) {
		return false
	}

	const emailParts = email.split('@')

	if (emailParts.length !== 2) {
		return false
	}

	const account = emailParts[0]
	const address = emailParts[1]

	if (account.length > 64 || address.length > 255) {
		return false
	}

	const domainParts = address.split('.')

	if (domainParts[1]?.length < 1) {
		return false
	}

	return tester.test(email)
}
