import Link from 'next/link'

export default function FooterLink({
	children,
	href,
	extraClasses = '',
}: {
	children: React.ReactNode
	href: string
	extraClasses?: string
}) {
	return (
		<Link href={href} className={`text-xs ${extraClasses}`}>
			<p>{children}</p>
		</Link>
	)
}
