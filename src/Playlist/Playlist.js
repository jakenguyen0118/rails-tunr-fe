import React from 'react'
import './playlist.scss'
import { Link } from 'react-router-dom'

const Playlist = (props) => {
	const { songs } = props

	const loaded = () => (
		<div className='playlist'>
			<h3>Playlist</h3>
			{songs.map((song, index) => (
				<div className='songs' key={index}>
					<p className='title'>{song.title}</p>
					<p className='artist'>{song.artist}</p>
					<p className='time'>{song.time}</p>
					<div className='icons'>
						<i
							className='fas fa-heart'
							onClick={() => {
								props.onFaveToggle(song)
							}}></i>
						<Link to='/songs/edit'>
							<i
								className='far fa-edit'
								onClick={() => {
									props.selectSong(song)
								}}></i>
						</Link>
						<i
							className='fas fa-trash-alt'
							onClick={() => {
								props.deleteSong(song)
							}}></i>
					</div>
				</div>
			))}
		</div>
	)

	return songs.length > 0 ? loaded() : <h1>Loading...</h1>
}

export default Playlist
