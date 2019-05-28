import React, { Component, Fragment } from 'react';
import { Label, Input } from 'reactstrap';

class StringInput extends Component {
	render() {
		return (
			<Fragment>
				<Label for='inputString' className='mr-sm-2'>
					String
				</Label>
				<Input
					onChange={this.props.handleChange}
					value={this.props.inputString}
					type='text'
					name='inputString'
					id='inputString'
					placeholder='Enter a String to Convert'
				/>
			</Fragment>
		);
	}
}

export default StringInput;
