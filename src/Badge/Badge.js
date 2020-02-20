import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import classes from './styles/index.scss';

const Badge = forwardRef((
	{
		message,
		type
	},
	ref
) => {
	const componentClassName = classNames(
		classes.badge,
		{
			[classes.badge_primary]: type === 'primary',
			[classes.badge_success]: type === 'success',
			[classes.badge_info]: type === 'info',
			[classes.badge_warning]: type === 'warning',
			[classes.badge_danger]: type === 'danger'
		}
	);

	return (
		<div
			ref={ref}
			className={componentClassName}
		>
			{message}
		</div>
	);
});

Badge.propTypes = {
	type: PropTypes.string,
	message: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.array,
		PropTypes.object,
		PropTypes.number,
	])
};

export { Badge };
