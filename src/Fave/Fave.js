import React from 'react'
import './fave.scss'

const Fave = (props) => {
	console.log('props', props)

	let showFaves = ''

	if (props.fave[0]) {
		showFaves = props.fave.map((faves, index) => {
			return (
				<>
					<div className='songs' key={index}>
						<p className='title'>{faves.title}</p>
						<p className='artist'>{faves.artist}</p>
						<p className='time'>{faves.time}</p>
						<i
							className='fas fa-trash-alt'
							onClick={() => {
								props.onFaveToggle(faves)
							}}></i>
					</div>
				</>
			)
		})
	}

	return (
		<>
			<div className='faves'>
				<h3>Favorites</h3>
                {showFaves}
			</div>
		</>
	)
}

export default Fave
