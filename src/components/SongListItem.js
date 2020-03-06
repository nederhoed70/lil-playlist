import React from 'react';

const SongListItem = props => {
	const listItem = props.playList.map(item => (
		<li className={'list-item'} key={item.id}>
			<span className={'list-song-item'}>{item.song}</span>
			<span className={'list-artist-item'}>{item.artist}</span>
			<span className={'list-genre-item'}>{item.genre}</span>
			<span className={'list-rating-item'}>
				{item.rating}

				<i
					className='far fa-trash-alt'
					id={item.hash}
					name={item.key}
					onClick={props.deleteSong}
				></i>
			</span>
		</li>
	));
	listItem.shift(0);
	return listItem;
};

export default SongListItem;
