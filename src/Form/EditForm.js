import React, { useState } from 'react'
import './form.scss'

const EditForm = (props) => {
    const [formData, setFormData] = useState(props.song.selectedSong)
	console.log('edit form props', props)
	console.log('formdata', formData)

	const handleSubmit = (event) => {
		event.preventDefault()
		props.handleSubmit(formData)
		props.history.push('/')
	}

	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value })
	}

	return (
		<div className='form'>
			<h4>EDIT SONG</h4>
			<form onSubmit={handleSubmit}>
				<p>TITLE</p>
				<input
					type='text'
					name='title'
					value={formData.title}
					onChange={handleChange}
				/>
				<p>ARTIST</p>
				<input
					type='text'
					name='artist'
					value={formData.artist}
					onChange={handleChange}
				/>
				<p>TIME</p>
				<input
					type='text'
					name='time'
					value={formData.time}
					onChange={handleChange}
				/>
				<br />
				<input type='submit' value='Edit' className='submit-button' />
			</form>
		</div>
	)
}

export default EditForm
