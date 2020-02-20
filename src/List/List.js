import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import classes from './styles/index.scss';

const List = ({
	children,
	inline,
	className
}) => {
	const componentClassName = classNames(
		classes.list,
		{
			[classes.list_inline]: inline,
		},
		className
	);

	return (
		<ul className={componentClassName}>{children}</ul>
	);
};

List.defaultProps = {
	inline: true
};

List.propTypes = {
	children: PropTypes.array.isRequired,
	inline: PropTypes.bool,
	className: PropTypes.string
};

export { List };
