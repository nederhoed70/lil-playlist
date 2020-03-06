import React, { Component } from 'react';
import SongForm from './components/SongForm';
import SongList from './components/SongList';
import SongHeader from './components/SongHeader';

class SongOverview extends Component {
	constructor() {
		super();
		this.state = {
			playList: [
				{
					id: '1',
					song: 'Every Major Dude',
					artist: 'Steely Dan',
					genre: 'Poprock',
					rating: '5'
				}
			]
		};
	}

	render() {
		const addSong = song => {
			this.setState({ playList: this.state.playList.concat(song) });
			console.log('newSong:', this.state.playList);
		};
		return (
			<div className={'song-overview'}>
				<SongForm
					addSong={addSong}
					handleChangeSong={this.handleChangeSong}
					handleChangeArtist={this.handleChangeArtist}
				/>
				<SongHeader />
				<SongList playList={this.state.playList} />
			</div>
		);
	}
}
export default SongOverview;
