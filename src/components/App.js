import React, { Component } from 'react';

import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class App extends Component {
	state = { language: 'english', color: 'primary' };

	onLanguageChange = (language, color) => {
		this.setState({ language, color });
	};

	render() {
		return (
			<div className='ui container'>
				<div style={{ display: 'flex' }}>
					Select a language:
					<div style={{ marginLeft: '10px' }}>
						<i onClick={() => this.onLanguageChange('english', 'primary')} className='flag us' />
						<i onClick={() => this.onLanguageChange('dutch', 'red')} className='flag nl' />
					</div>
				</div>
				<ColorContext.Provider value={this.state.color}>
					<LanguageContext.Provider value={this.state.language}>
						<UserCreate />
					</LanguageContext.Provider>
				</ColorContext.Provider>
			</div>
		);
	}
}

export default App;
