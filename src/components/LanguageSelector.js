import React, { Component } from 'react';

import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends Component {
	static contextType = LanguageContext;

	render() {
		console.log(this.context);
		return (
			<div>
				<div style={{ display: 'flex' }}>
					Select a language:
					<div style={{ marginLeft: '10px' }}>
						<i
							onClick={() => this.context.onLanguageChange('english', 'primary')}
							className='flag us'
						/>
						<i onClick={() => this.context.onLanguageChange('dutch', 'red')} className='flag nl' />
					</div>
				</div>
			</div>
		);
	}
}

export default LanguageSelector;
