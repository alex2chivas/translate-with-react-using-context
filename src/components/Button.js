import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends Component {
	// Note - ContextType property is a sepecial name. Do not change
	// Note - This is the comsumer approach!
	renderSubmit(language) {
		return language === 'english' ? 'Submit' : 'Voorleggen';
	}

	renderButton(color) {
		return (
			<button className={`ui button ${color}`}>
				<LanguageContext.Consumer>
					{({ language }) => this.renderSubmit(language)}
				</LanguageContext.Consumer>
			</button>
		);
	}

	render() {
		return (
			<LanguageContext.Consumer>{({ color }) => this.renderButton(color)}</LanguageContext.Consumer>
		);
	}
}

export default Button;
