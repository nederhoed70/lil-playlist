import React from 'react';

const SongHeader = () => {
	return (
		<div style={{ width: '100%' }}>
			<div className='song-header'>
				<div className='song-row__item'>Song</div>
				<div className='song-row__item'>Artist</div>
				<div className='song-row__item'>Genre</div>
				<div className='song-row__item'>Rating</div>
			</div>
		</div>
	);
};

export default SongHeader;
