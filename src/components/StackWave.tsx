'use client'
import React from 'react'
import stackSVG from './stackWave.svg'

function StackWave() {
	return (
		<div
			className="bg-cover bg-full"
			style={{
				backgroundImage: `url(${stackSVG})`,
			}}
		></div>
	)
}

export default StackWave
