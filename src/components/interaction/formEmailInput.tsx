'use client'

import React, { useActionState, useEffect, useState } from 'react'
import { submitNewsletterSignup } from '@/actions/newletter'
import { EmailFormState } from '@/shared/types/globals'
import { CircleCheck } from 'lucide-react'

const initialState: EmailFormState = {
	status: 'neutral',
	error: undefined,
	values: {
		email: '',
	},
}

export default function FormEmailInput() {
	// @ts-expect-error - Le submitNewsletterSignup va envoyer une erreur jsp pourquoi, mais il marche
	const [formState, formAction, isMutating] = useActionState(submitNewsletterSignup, initialState)

	//Indique s'il faut inclure l'erreur dans le DOM
	const [showError, setShowError] = useState(false)

	//Indique s'il faut afficher l'erreur
	const [isVisible, setIsVisible] = useState(false)

	//Indique s'il faut afficher l'icone de validation
	const [isValid, setIsValid] = useState(false)

	const isPending = isMutating

	useEffect(() => {
		if (formState?.status === 'success') {
			setIsValid(true)
			setTimeout(() => {
				setIsValid(false)
				formState.status = 'neutral'
			}, 2000)
		} else if (formState?.status === 'error') {
			setShowError(true)
			setIsVisible(true)

			//Premier timer au bout duquel on commence à effacer le message
			const timer = setTimeout(() => {
				setIsVisible(false)

				//Second timer au bout duquel on retire le message du DOM
				setTimeout(() => {
					setShowError(false)
					formState.status = 'neutral'
				}, 500)
			}, 4000)

			return () => clearTimeout(timer)
		}
	}, [formState?.status])

	return (
		<>
			<p className='text-lg tracking-wide'>Newsletter</p>
			<form className='flex flex-col space-y-4 items-center w-full' action={formAction}>
				<input
					name='email'
					className='bg-white
							h-10 w-3/5 min-w-40
							text-neutral-600 placeholder:text-center
							pl-2
						border-neutral-400 border-1 rounded-lg'
					placeholder='votre email...'
				/>
				{formState?.error && showError && (
					<p
						className={`bg-red-100 text-red-700 text-sm text-center
						px-3 py-1 rounded-md min-w-40
						transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
						{formState.error}
					</p>
				)}
				<div className='relative flex items-center'>
					<button
						type='submit'
						disabled={isPending}
						className={`w-fit px-5 min-w-30 h-10
						          ${isPending ? 'bg-amizia-disabled-orange !cursor-wait' : 'bg-amizia-light-orange'}
						           active:bg-amizia-activated-orange active:scale-95 active:brightness-95`}>
						Je m&#39;inscris !
					</button>

					{/*Spinner*/}
					<span
						className={`absolute right-[-2rem] h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin transition-all ${isPending ? 'opacity-100' : 'opacity-0 duration-200'}`}
					/>

					{/*Validation Check*/}
					<div
						className={`absolute right-[-2rem] h-5 w-5 transition-opacity duration-200 ${isValid ? 'opacity-100' : 'opacity-0'}`}>
						<CircleCheck color={'#76c182'} size={22} />
					</div>
				</div>
			</form>
		</>
	)
}
