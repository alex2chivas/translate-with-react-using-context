import React, { Component } from 'react';

class LanguageSelector extends Component {
	render() {
		return (
			<div>
				<div style={{ display: 'flex' }}>
					Select a language:
					<div style={{ marginLeft: '10px' }}>
						<i
							onClick={() => this.props.onLanguageChange('english', 'primary')}
							className='flag us'
						/>
						<i onClick={() => this.props.onLanguageChange('dutch', 'red')} className='flag nl' />
					</div>
				</div>
			</div>
		);
	}
}

export default LanguageSelector;
