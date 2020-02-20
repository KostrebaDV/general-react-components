import React from 'react';

import classes from './styles/index.scss';

const PendingCloak = () => {
	return (
		<div
			className={classes.pendingCloak}
		>
			<div className={classes.pendingCloak_container}>
				<div className={classes['pendingCloak_sk-flow-dot']}></div>
				<div className={classes['pendingCloak_sk-flow-dot']}></div>
				<div className={classes['pendingCloak_sk-flow-dot']}></div>
			</div>
		</div>
	);
};

export { PendingCloak };
