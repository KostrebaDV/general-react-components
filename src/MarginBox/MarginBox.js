import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';
import './MarginBox.css';

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
            [margin_tiny]: tiny,
            [margin_small]: small,
            [margin_normal]: normal,
            [margin_large]: large,

			[margin_ultraVrTiny]: vrUltraTiny,
			[margin_ultraHrTiny]: hrUltraTiny,
			[margin_ultraTTiny]: tUltraTiny,
			[margin_ultraRTiny]: rUltraTiny,
			[margin_ultraBTiny]: bUltraTiny,
			[margin_ultraLTiny]: lUltraTiny,

            [margin_vrTiny]: vrTiny,
            [margin_hrTiny]: hrTiny,
            [margin_tTiny]: tTiny,
            [margin_rTiny]: rTiny,
            [margin_bTiny]: bTiny,
            [margin_lTiny]: lTiny,

            [margin_vrSmall]: vrSmall,
            [margin_hrSmall]: hrSmall,
            [margin_tSmall]: tSmall,
            [margin_rSmall]: rSmall,
            [margin_bSmall]: bSmall,
            [margin_lSmall]: lSmall,

            [margin_vrNormal]: vrNormal,
            [margin_hrNormal]: hrNormal,
            [margin_tNormal]: tNormal,
            [margin_rNormal]: rNormal,
            [margin_bNormal]: bNormal,
            [margin_lNormal]: lNormal,

            [margin_vrLarge]: vrLarge,
            [margin_hrLarge]: hrLarge,
            [margin_tLarge]: tLarge,
            [margin_rLarge]: rLarge,
            [margin_bLarge]: bLarge,
            [margin_lLarge]: lLarge,
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
