import React, { Component } from 'react';
import { AwesomeButton } from 'react-awesome-button';

class SongForm extends Component {
	state = {
		id: '',
		song: '',
		artist: '',
		genre: '',
		rating: '3',
	};

	render() {
		const handleChange = (event) => {
			const { name, value } = event.target;
			this.setState({
				[name]: value,
			});
		};

		const handleSubmit = (event) => {
			event.preventDefault();
			this.props.addSong(this.state);
			this.setState({
				id: '',
				song: '',
				artist: '',
				genre: '',
				rating: '3',
			});
		};
		return (
			<form onSubmit={handleSubmit}>
				<input
					type='text'
					name='song'
					placeholder='Song'
					value={this.state.song}
					onChange={handleChange}
					required
				/>
				<input
					type='text'
					name='artist'
					placeholder='Artist'
					value={this.state.artist}
					onChange={handleChange}
					required
				/>
				<input
					type='text'
					name='genre'
					placeholder='Genre'
					value={this.state.genre}
					onChange={handleChange}
					required
				/>

				<label htmlFor='rating'>Rating:</label>
				<select name='rating' value={this.state.rating} onChange={handleChange}>
					<option value='1'>1</option>
					<option value='2'>2</option>
					<option value='3'>3</option>
					<option value='4'>4</option>
					<option value='5'>5</option>
				</select>
				<AwesomeButton type='primary'>submit song</AwesomeButton>
			</form>
		);
	}
}

export default SongForm;
