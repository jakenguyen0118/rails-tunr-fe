import React, { useState } from 'react'
import './form.scss'

const Form = (props) => {
	const [formData, setFormData] = useState()

	const handleSubmit = (event) => {
		event.preventDefault()
		props.handleSubmit(formData)
	}

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value })
	}

	return (
		<div className='form'>
			<h4>ADD SONG TO PLAYLIST</h4>
			<form onSubmit={handleSubmit}>
				<p>TITLE</p>
				<input
					type='text'
					name='title'
					onChange={handleChange}
				/>
				<p>ARTIST</p>
				<input
					type='text'
					name='artist'
					onChange={handleChange}
				/>
				<p>TIME</p>
				<input
					type='text'
					name='time'
					onChange={handleChange}
				/>
				<br />
				<input type='submit' value='Add Song' className='submit-button' />
			</form>
		</div>
	)
}

export default Form
