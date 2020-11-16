import React, { useState, useEffect } from 'react'
import { Route } from 'react-router-dom'
import './App.scss'
import Header from './Header/Header'
import Form from './Form/Form'
import Playlist from './Playlist/Playlist'
import EditForm from './Form/EditForm'
import Fave from './Fave/Fave'

function App() {
	const url = 'http://localhost:3000/songs'

	const emptySong = {
		title: '',
		artist: '',
		time: '',
	}

	const [songs, setSongs] = useState([])
	const [faves, setFaves] = useState([])
	const [selectedSong, setSelectedSong] = useState(emptySong)

	const ApiCall = () => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => {
				setSongs(data.songs)
				console.log(data.songs)
			})
	}

	useEffect(() => {
		ApiCall()
  }, [])
  
  const handleFaveToggle = (song) => {
    const faveSongs = [...faves]
    const songIndex = faveSongs.indexOf(song)

    songIndex > -1 ? faveSongs.splice(songIndex, 1) : faveSongs.push(song)
    setFaves(faveSongs)
  }

	const handleAddSong = (newSong) => {
		fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newSong),
		}).then(() => ApiCall())
	}

	const handleUpdate = (song) => {
		fetch(url + '/' + selectedSong.id, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(song),
		}).then(() => ApiCall())
	}

	const deleteSong = (song) => {
		fetch(url + '/' + song.id, {
			method: 'DELETE',
		}).then(() => ApiCall())
	}

	const selectSong = (song) => {
    setSelectedSong(song)
    console.log('this song was selected', selectedSong)
	}

	return (
		<div className='App'>
			<Header />
			<Route
				exact
				path='/'
				render={(routerProps) => (
					<>
						<Playlist
							{...routerProps}
							songs={songs}
							deleteSong={deleteSong}
							selectSong={selectSong}
							onFaveToggle={handleFaveToggle}
						/>
						<Fave fave={faves} onFaveToggle={handleFaveToggle} />
						<Form handleSubmit={handleAddSong} song={emptySong} />
					</>
				)}
			/>
			<Route
				exact
				path='/songs/edit'
				render={(routerProps) => (
					<EditForm
						{...routerProps}
						label='edit'
						song={{ selectedSong }}
						handleSubmit={handleUpdate}
					/>
				)}
			/>
		</div>
	)
}

export default App
