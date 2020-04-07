import React, { Component } from 'react';

import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';

class App extends Component {
	state = { language: 'english' };

	onLanguageChange = language => {
		this.setState({ language });
	};

	render() {
		return (
			<div className='ui container'>
				<div style={{ display: 'flex' }}>
					Select a language:
					<div style={{ marginLeft: '10px' }}>
						<i onClick={() => this.onLanguageChange('english')} className='flag us' />
						<i onClick={() => this.onLanguageChange('dutch')} className='flag nl' />
					</div>
				</div>
				<LanguageContext.Provider value={this.state.language}>
					<UserCreate />
				</LanguageContext.Provider>
			</div>
		);
	}
}

export default App;
