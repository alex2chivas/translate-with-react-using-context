import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends Component {
	// Note - ContextType property is a sepecial name. Do not change
	// Note - This is the comsumer approach!
	renderSubmit(value) {
		return value === 'english' ? 'Submit' : 'Voorleggen';
	}
	render() {
		return (
			<button className='ui button primary'>
				<LanguageContext.Consumer>{value => this.renderSubmit(value)}</LanguageContext.Consumer>
			</button>
		);
	}
}

export default Button;
