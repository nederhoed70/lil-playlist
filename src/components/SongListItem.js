import React from 'react';

const starRating = (score) => {
	let star = '';
	let rating = [];
	for (let i = 0; i < 5; i++) {
		i < score ? (star = ' checked') : (star = '');
		rating.push(<span className={`fa fa-star${star}`}></span>);
	}
	return rating;
};

const SongListItem = (props) => {
	const listItem = props.playList.map((item) => (
		<li className={'list-item'} key={item.hash + item.id}>
			<span className={'list-song-item'}>{item.song}</span>
			<span className={'list-artist-item'}>{item.artist}</span>
			<span className={'list-genre-item'}>{item.genre}</span>
			<span className={'list-rating-item'}>{[starRating(item.rating)]}</span>
			<span className={'list-delete-item'}>
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
