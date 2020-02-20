import React from 'react';
import PropTypes from 'prop-types';
import classes from './styles/index.scss';
import classNames from 'classnames';
import { getGridItemsStyles, getBaseGridStyles, getGridItems, isValidGrid } from './GridUtils';

const GridLayoutRow = ({ children, grid, gapColumn, className }) => {
	const componentClassName = classNames(
		classes.gridLayout,
		className
	);

	const gridItems = getGridItems(grid);

	if (isValidGrid(gridItems)) {
		const gridItemsStyles = getGridItemsStyles(gridItems, gapColumn);

		return (
			<div className={componentClassName} style={getBaseGridStyles(gapColumn)}>
				{children.map((child, index) => {
					const key = `griditem_${index}`;

					return (
						<div key={key} style={gridItemsStyles[index]}>
							{child}
						</div>
					);
				})}
			</div>
		);
	}

	return (
		<div style={getBaseGridStyles(gapColumn)}>
			{children.map(child => child)}
		</div>
	);
};

GridLayoutRow.defaultProps = {
	gapColumn: 0,
	grid: '',
};

GridLayoutRow.propTypes = {
	gapColumn: PropTypes.number,
	grid: PropTypes.string,
	className: PropTypes.string,
};

export { GridLayoutRow };
