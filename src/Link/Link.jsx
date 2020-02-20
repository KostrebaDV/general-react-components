import React from 'react';
import PropTypes from 'prop-types';

import { Link as RouteLink, NavLink } from 'react-router-dom';

import classes from './styles/index.scss';

const Link = (
	{
		link,
		content,
		hasRoute,
		className,
		activeLinkClass
	}
) => {
	const getRouteLink = () => {
		return activeLinkClass
			? (
				<NavLink
					to={link}
					className={className}
					activeClassName={activeLinkClass}
				>
					{content}
				</NavLink>
			)
			: (
				<RouteLink
					to={link}
					className={className}
				>
					{content}
				</RouteLink>
			);
	};

	const getLink = () => {
		return hasRoute
			? getRouteLink()
			: <a className={classes.link} href={link}>{content}</a>;
	};

	return getLink();
};

Link.propTypes = {
	content: PropTypes.oneOfType([
		PropTypes.string.isRequired,
		PropTypes.object.isRequired,
	]),
	link: PropTypes.string.isRequired,
	hasRoute: PropTypes.bool.isRequired,
	className: PropTypes.string,
	activeLinkClass: PropTypes.string
};

export { Link };
