import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Icon } from '../Icon/Icon';

import { COLORS } from '../../styles/baseColors';
import { TYPE } from './consts';
import classNames from 'classnames';
import classes from './styles/index.scss';

const Button = ({
	label,
	type,
	transparent,
	icon,
	actionName,
	actionHandler,
	size
}) => {
	const [hover, setHover] = useState(false);

	const componentClassName = classNames(
		classes.button,
		{
			[classes.button_primary]: !transparent && type === 'primary',
			[classes.button_secondary]: !transparent && type === 'secondary',
			[classes.button_success]: !transparent && type === 'success',
			[classes.button_danger]: !transparent && type === 'danger',
			[classes.button_warning]: !transparent && type === 'warning',
			[classes.button_info]: !transparent && type === 'info',
			[classes.button_light]: !transparent && type === 'light',
			[classes.button_dark]: !transparent && type === 'dark',

			[classes.button_primary__transparent]: transparent && type === 'primary',
			[classes.button_secondary__transparent]: transparent && type === 'secondary',
			[classes.button_success__transparent]: transparent && type === 'success',
			[classes.button_danger__transparent]: transparent && type === 'danger',
			[classes.button_warning__transparent]: transparent && type === 'warning',
			[classes.button_info__transparent]: transparent && type === 'info',
			[classes.button_light__transparent]: transparent && type === 'light',
			[classes.button_dark__transparent]: transparent && type === 'dark',

			[classes.button_size__tiny]: size === 'tiny',

			[classes.button_hasIcon]: icon,
			[classes.button_onlyIcon]: !label
		}
	);

	const componentLabelClassName = classNames(
		{
			[classes.button_label]: icon,
		}
	);

	const componentIconClassName = classNames(
		classes.button_icon,
		{
			[classes.button_size__tiny]: size === 'tiny',
			[classes.button_size__normal]: size === 'normal',
		}
	);

	const getIconColor = () => {
		const isDarkColor = type === TYPE.WARNING || type === TYPE.LIGHT;

		if (transparent) {
			const onHoverColor = isDarkColor ? COLORS.DARK : COLORS.LIGHT;

			return	{
				color: COLORS[type.toUpperCase()],
				onHoverColor
			};
		}

		if (isDarkColor) {
			return	{
				color: COLORS.DARK,
				onHoverColor: COLORS.DARK,
			};
		}

		return	{
			color: COLORS.LIGHT,
			onHoverColor: COLORS.LIGHT,
		};
	};

	const iconColor = getIconColor();

	return (
		<div
			className={componentClassName}
			onClick={() => actionHandler(actionName)}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}
		>
			{
				icon && (
					<Icon
						icon={icon}
						onHover={hover}
						color={iconColor.color}
						onHoverColor={iconColor.onHoverColor}
						className={componentIconClassName}
					/>
				)
			}
			{
				label && (
					<span className={componentLabelClassName}>
						{label}
					</span>
				)
			}
		</div>
	);
};

Button.defaultProps = {
	transparent: false,
	icon: '',
	size: 'normal',
	actionHandler: () => {},
	type: 'secondary'
};

Button.propTypes = {
	label: PropTypes.string,
	transparent: PropTypes.bool,
	icon: PropTypes.string,
	type: PropTypes.string,
	actionName: PropTypes.string,
	actionHandler: PropTypes.func,
	size: PropTypes.string
};

export { Button };
