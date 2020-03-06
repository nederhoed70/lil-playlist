import React, { Component } from 'react';
import SongForm from './components/SongForm';
import SongList from './components/SongList';
import SongHeader from './components/SongHeader';
import ApiConnect from './api/ApiConnect';

class SongOverview extends Component {
	constructor() {
		super();
		this.state = {
			playList: [
				{
					hash: '',
					id: '',
					song: '',
					artist: '',
					genre: '',
					rating: '',
					loading: ''
				}
			]
		};
	}
	componentDidMount() {
		this.setState({ loading: true });
		fetch('https://wincacademydatabase.firebaseio.com/jeroen/playlists.json')
			.then(response => response.json())
			.then(data => {
				let songs = Object.keys(data).map(key => ({
					hash: key,
					id: data[key].id,
					song: data[key].song,
					artist: data[key].artist,
					genre: data[key].genre,
					rating: data[key].rating
				}));
				this.setState({ playList: this.state.playList.concat(songs) });
				console.log(this.state);
				console.log(this.state.playList.length);
			});
	}

	render() {
		const addSong = song => {
			const newId = this.state.playList.length;
			song.id = newId.toString();
			ApiConnect(JSON.stringify(song), 'post');
			this.setState({ playList: this.state.playList.concat(song) });
		};
		const deleteSong = event => {
			event.preventDefault();
			let hash = event.target.id;
			let playListCurrent = this.state.playList;
			let newState = playListCurrent.filter(song => song.hash !== hash);
			ApiConnect(hash, 'delete');
			this.setState({ playList: newState });
			console.log('index:', newState, hash, playListCurrent[1]);
		};
		return (
			<div className={'song-overview'}>
				<header>
					<h1>Jeroen's AweSome SongList</h1>
				</header>
				<SongForm
					addSong={addSong}
					handleChangeSong={this.handleChangeSong}
					handleChangeArtist={this.handleChangeArtist}
				/>
				<SongHeader />
				<SongList playList={this.state.playList} deleteSong={deleteSong} />
			</div>
		);
	}
}
export default SongOverview;
