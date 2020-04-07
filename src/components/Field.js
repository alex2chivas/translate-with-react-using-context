import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends Component {
	static contextType = LanguageContext;

	render() {
		// Note this.context is tied to the contextType
		const text = this.context.language === 'english' ? 'name' : 'Naam';

		return (
			<div className='ui field'>
				<label> {text} </label>
				<input />
			</div>
		);
	}
}

export default Field;
