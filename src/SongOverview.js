import React, { Component } from 'react';
import SongForm from './components/SongForm';
import SongList from './components/SongList';
import SongHeader from './components/SongHeader';
import { apiUrl } from './components/apiUrl';
import ApiConnect from './api/ApiConnect';
import { AwesomeButton } from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';

class SongOverview extends Component {
	constructor() {
		super();
		this.state = {
			formStatus: 'closed',
			playList: [
				{
					hash: '',
					id: '',
					song: '',
					artist: '',
					genre: '',
					rating: '',
					loading: '',
				},
			],
		};
	}
	componentDidMount() {
		this.setState({ loading: true });
		const url = `${apiUrl}/jeroen/playlists.json`;
		try {
			fetch(url)
				.then((response) => response.json())
				.then((res) => {
					let songs = Object.keys(res).map((key) => ({
						hash: key,
						id: res[key].id,
						song: res[key].song,
						artist: res[key].artist,
						genre: res[key].genre,
						rating: res[key].rating,
					}));

					this.setState({ playList: this.state.playList.concat(songs) });
				});
		} catch (error) {
			alert(error);
		}
	}

	render() {
		const toggleForm = () => {
			this.state.formStatus === 'closed'
				? this.setState({ formStatus: 'open' })
				: this.setState({ formStatus: 'closed' });
		};
		const addSong = (song) => {
			const newId = this.state.playList.length;
			song.id = newId.toString();
			ApiConnect(JSON.stringify(song), 'post');
			this.setState({ playList: this.state.playList.concat(song) });
			this.state.formStatus = 'closed';
		};
		const deleteSong = (event) => {
			event.preventDefault();
			let hash = event.target.id;
			let playListCurrent = this.state.playList;
			let newState = playListCurrent.filter((song) => song.hash !== hash);
			ApiConnect(hash, 'delete');
			this.setState({ playList: newState });
		};
		return (
			<div className={'song-overview'}>
				<header>
					<h1>React Lil' Playlist</h1>
				</header>
				<AwesomeButton type='primary' onPress={toggleForm}>
					add song
				</AwesomeButton>
				<div className={`song-form-${this.state.formStatus}`}>
					<SongForm
						addSong={addSong}
						handleChangeSong={this.handleChangeSong}
						handleChangeArtist={this.handleChangeArtist}
					/>
				</div>

				<SongList playList={this.state.playList} deleteSong={deleteSong} />
			</div>
		);
	}
}
export default SongOverview;
