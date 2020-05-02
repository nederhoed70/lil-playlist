import { apiUrl } from '../components/apiUrl';

const ApiConnect = async (data, method) => {
	if (method === 'post') {
		return fetch(`${apiUrl}/jeroen/playlists.json`, {
			method: 'POST',
			body: data,
		}).then((response) => response.json());
	} else if (method === 'delete' && data) {
		return fetch(`${apiUrl}/jeroen/playlists/${data}.json`, {
			method: 'DELETE',
		}).then((response) => response.json());
	}
};

export default ApiConnect;
