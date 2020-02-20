import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

import Icon from '../Icon';
import { chevronDown, chevronUp } from '../../icons';
import CollapseContent from './CollapseContent';

import { isUndefined } from '../../utils';

import classNames from 'classnames';
import classes from './styles/index.scss';

const Collapser = ({
					label,
					open,
					content,
					labelClassName,
					className,
					transition,
					collapseContentClassName,
					collapseContentStyle,
					onItemToggle
}) => {
	const [isOpen, setIsOpen] = useState(open);
	const [height, setHeight] = useState(null);
	const collapseContentRef = useRef(content.ref);

	const setOpen = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		initCollapseContentHeight();
	});

	const initCollapseContentHeight = () => {
		const refObject = isUndefined(collapseContentRef.current.componentRef)
							? collapseContentRef.current
							: collapseContentRef.current.componentRef.current;

		return isOpen ? setHeight(refObject.offsetHeight) : setHeight(0);
	};

	const componentClassName = classNames(
		className
	);

	const collapseHeight = transition ? { height } : { height: 'inherit' };

	const collapseContentComponentClassName = classNames(
		collapseContentClassName,
		{
			[classes.collapse_contentTransition]: transition,
			[classes.collapse_content]: !transition && !isOpen
		}
	);

	const getCollapsedContent = () => {
		return (
			React.cloneElement(
				<CollapseContent
					content={content}
					style={{ ...collapseHeight, ...collapseContentStyle }}
					className={collapseContentComponentClassName}
				/>,
				{
					ref: collapseContentRef
				}
			)
		);
	};

	return (
		<>
			<div
				className={componentClassName}
				onClick={onItemToggle(isOpen)}
			>
				<div
					className={classes.collapse_header}
					onClick={setOpen}
				>
					<div className={labelClassName}>{label}</div>
					<Icon
						icon={isOpen ? chevronUp : chevronDown}
					/>
				</div>
			</div>
			{getCollapsedContent()}
		</>
	);
};

Collapser.defaultProps = {
	open: false,
	transition: true,
	collapseContentStyle: {},
	onItemToggle: () => {}
};

Collapser.propTypes = {
	open: PropTypes.bool,
	transition: PropTypes.bool,
	className: PropTypes.string,
	labelClassName: PropTypes.string,
	collapseContentStyle: PropTypes.object,
	collapseContentClassName: PropTypes.string,
	onItemToggle: PropTypes.func,
	label: PropTypes.oneOfType([
		PropTypes.object.isRequired,
		PropTypes.string.isRequired,
	]),
	content: PropTypes.oneOfType([
		PropTypes.object.isRequired,
		PropTypes.array.isRequired,
	])


};

export { Collapser };
