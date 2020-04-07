import React from 'react';

const Context = React.createContext('english');

export class LanguageStore extends React.Component {
	state = { language: 'english', color: 'primary' };

	onLanguageChange = (language, color) => {
		this.setState({ language, color });
	};

	render() {
		return (
			<Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
				{/* Note This will make sure content that gets wrapped in this Provider 
                since Components take tags as children
                */}
				{this.props.children}
			</Context.Provider>
		);
	}
}

export default Context;
