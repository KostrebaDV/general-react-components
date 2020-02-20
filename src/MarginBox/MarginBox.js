import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import classes from './styles/index.scss';

const MarginBox = ({ children,
                        tiny, small, normal, large,
						vrUltraTiny, hrUltraTiny, tUltraTiny, rUltraTiny, bUltraTiny, lUltraTiny,
                        vrTiny, hrTiny, tTiny, rTiny, bTiny, lTiny,
                        vrSmall, hrSmall, tSmall, rSmall, bSmall, lSmall,
                        vrNormal, hrNormal, tNormal, rNormal, bNormal, lNormal,
                        vrLarge, hrLarge, tLarge, rLarge, bLarge, lLarge,
						className
}) => {
    const componentClassName = classNames(
        {
            [classes.margin_tiny]: tiny,
            [classes.margin_small]: small,
            [classes.margin_normal]: normal,
            [classes.margin_large]: large,

			[classes.margin_ultraVrTiny]: vrUltraTiny,
			[classes.margin_ultraHrTiny]: hrUltraTiny,
			[classes.margin_ultraTTiny]: tUltraTiny,
			[classes.margin_ultraRTiny]: rUltraTiny,
			[classes.margin_ultraBTiny]: bUltraTiny,
			[classes.margin_ultraLTiny]: lUltraTiny,

            [classes.margin_vrTiny]: vrTiny,
            [classes.margin_hrTiny]: hrTiny,
            [classes.margin_tTiny]: tTiny,
            [classes.margin_rTiny]: rTiny,
            [classes.margin_bTiny]: bTiny,
            [classes.margin_lTiny]: lTiny,

            [classes.margin_vrSmall]: vrSmall,
            [classes.margin_hrSmall]: hrSmall,
            [classes.margin_tSmall]: tSmall,
            [classes.margin_rSmall]: rSmall,
            [classes.margin_bSmall]: bSmall,
            [classes.margin_lSmall]: lSmall,

            [classes.margin_vrNormal]: vrNormal,
            [classes.margin_hrNormal]: hrNormal,
            [classes.margin_tNormal]: tNormal,
            [classes.margin_rNormal]: rNormal,
            [classes.margin_bNormal]: bNormal,
            [classes.margin_lNormal]: lNormal,

            [classes.margin_vrLarge]: vrLarge,
            [classes.margin_hrLarge]: hrLarge,
            [classes.margin_tLarge]: tLarge,
            [classes.margin_rLarge]: rLarge,
            [classes.margin_bLarge]: bLarge,
            [classes.margin_lLarge]: lLarge,
        },
		className
    );

    return (
        <div className={componentClassName}>{ children }</div>
    );
};

MarginBox.propTypes = {
    tiny: PropTypes.bool,
    small: PropTypes.bool,
    normal: PropTypes.bool,
    large: PropTypes.bool,

	vrUltraTiny: PropTypes.bool,
	hrUltraTiny: PropTypes.bool,
	tUltraTiny: PropTypes.bool,
	rUltraTiny: PropTypes.bool,
	bUltraTiny: PropTypes.bool,
	lUltraTiny: PropTypes.bool,

	vrTiny: PropTypes.bool,
    hrTiny: PropTypes.bool,
    tTiny: PropTypes.bool,
    rTiny: PropTypes.bool,
    bTiny: PropTypes.bool,
    lTiny: PropTypes.bool,

	className: PropTypes.string
};

export { MarginBox };
