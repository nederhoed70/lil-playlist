import React from 'react';

const SongListItem = props => {
	const listItem = props.playList.map(item => (
		<li className={'list-item'} key={item.id}>
			<span className={'list-song-item'}>{item.song}</span>
			<span className={'list-artist-item'}>{item.artist}</span>
			<span className={'list-genre-item'}>{item.genre}</span>
			<span className={'list-rating-item'}>{item.rating}</span>
		</li>
	));

	return listItem;
};

export default SongListItem;
