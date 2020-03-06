// import React from 'react';

const ApiConnect = async (data, method) => {
	if (method === 'post') {
		return fetch(
			'https://wincacademydatabase.firebaseio.com/jeroen/playlists.json',
			{
				method: 'POST',
				body: data
			}
		).then(response => response.json());
	} else if (method === 'delete' && data) {
		return fetch(
			'https://wincacademydatabase.firebaseio.com/jeroen/playlists/' +
				data +
				'.json',
			{
				method: 'DELETE'
			}
		).then(response => response.json());
	}
};

export default ApiConnect;
