import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import classes from './styles/index.scss';

const ListItem = ({
	link,
	title,
	component,
	className
}) => {
	const componentClassName = classNames(
		classes.listItem,
		className
	);

	const getItemContent = () => {
		if (link) {
			return (
				<a href={link}>{title}</a>
			);
		}

		return component;
	};

	return (
		<li className={componentClassName}>{getItemContent()}</li>
	);
};

ListItem.propTypes = {
	link: PropTypes.string,
	title: PropTypes.string,
	component: PropTypes.object,
	className: PropTypes.string,
};

export { ListItem };
