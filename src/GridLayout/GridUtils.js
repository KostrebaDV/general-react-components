import { GAP, COL, BASE_GRID_MODEL, DISPLAY_GRID } from './consts';

export const getGridItems = grid => {
	const hasGap = dimension => dimension.split('_').length > 1;
	const getGap = gridProps => gridProps.split('_')[1];

    if (grid.length > 0) {
        return grid.split('-').reduce((propsObj, gridProps) => {
            if (hasGap(gridProps)) {
                propsObj.push({
                    gap: Number(getGap(gridProps)),
                });
            } else {
                propsObj.push({
                    col: Number(gridProps),
                });
            }
            return propsObj;
        }, []);
    }
    return [];
};

export const getGridItemsStyles = gridItems => {
    const gridStyles = [];
    for (let i = 0, counter = 1; i < gridItems.length; i += 1) {
        if (Object.keys(gridItems[i])[0] === COL) {
            gridStyles.push({
                gridColumnStart: counter,
                gridColumnEnd: counter + gridItems[i].col,
            });
            counter += gridItems[i].col;
        } else if (Object.keys(gridItems[i])[0] === GAP) {
            counter += gridItems[i].gap;
        }
    }
    return gridStyles;
};

export const getBaseGridStyles = gapColumn => {
    return {
        display: DISPLAY_GRID,
        gridColumnGap: `${gapColumn}em`,
        gridTemplateColumns: BASE_GRID_MODEL,
    };
};

export const isValidGrid = gridItems => {
    if (gridItems.length > 0) {
        return (
            gridItems.reduce((counter, gridItem) => {
                return counter + Number(Object.values(gridItem));
            }, 0) <= 12
        );
    }
    return false;
};
