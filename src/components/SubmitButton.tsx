'use client'
import React from 'react'
import { useFormStatus } from 'react-dom'

function SubmitButton() {
	const { pending } = useFormStatus()
	return (
		<button
			className={`btn btn-secondary ${pending && 'btn-disabled'}`}
			type="submit"
		>
			Submit
		</button>
	)
}

export default SubmitButton
