import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import classes from './styles/index.scss';

const HeaderText = (
    {
        children,
        size,
        bold,
        bolder,
        ultraBold
    }
    ) => {
    const componentClassName = classNames(
            {
                [classes.headerText_1]: size === '1',
                [classes.headerText_2]: size === '2',
                [classes.headerText_3]: size === '3',
                [classes.headerText_4]: size === '4',
                [classes.headerText_5]: size === '5',
                [classes.headerText_6]: size === '6',
                [classes.headerText_bold]: bold,
                [classes.headerText_bolder]: bolder,
                [classes.headerText_ultraBold]: ultraBold,

            }
        );

    return (
        <div className={componentClassName}>{ children }</div>
    );
};

HeaderText.defaultProps = {
    size: '3'
};

HeaderText.propTypes = {
    size: PropTypes.string,
    bold: PropTypes.bool,
    bolder: PropTypes.bool,
    ultraBold: PropTypes.bool
};

export { HeaderText };
