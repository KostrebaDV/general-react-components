import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CollapseContent extends Component {
	constructor (props) {
		super(props);
		this.componentRef = React.createRef();
	}

	render () {
		const {
			className,
			style,
			content
		} = this.props;

		return (
			<div
				className={className}
				style={style}
				ref={this.componentRef}
			>
				{content}
			</div>
		);
	}
}

CollapseContent.defaultProps = {};
CollapseContent.propTypes = {
	style: PropTypes.object,
	className: PropTypes.string,
	content: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.object
	])
};

export { CollapseContent };
