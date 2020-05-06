import React from 'react';
import SongListItem from './SongListItem';

const SongList = (props) => {
	return (
		<ul className={'songlist'}>
			<SongListItem playList={props.playList} deleteSong={props.deleteSong} />
		</ul>
	);
};

export default SongList;
