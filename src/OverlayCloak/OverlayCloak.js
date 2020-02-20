import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ClassNames from 'classnames';
import classes from './styles/index.scss';
import { noScroll } from '../../utils';

class OverlayCloak extends PureComponent {
	state = {
		isReady: false,
		show: false
	};

	componentDidUpdate () {
		if (this.props.show) {
			noScroll(true);
			this.handleCloakShow(true, 0);
			this.handleCloakReady(true);
		} else {
			noScroll(false);
			this.handleCloakShow(false);
			this.handleCloakReady(false, 0);
		}
	}

	handleCloakReady = (ready, delay = 50) => {
		setTimeout(() => this.setState({ isReady: ready }), delay);
	};

	handleCloakShow = (ready, delay = 300) => {
		setTimeout(() => this.setState({ show: ready }), delay);
	};


	render () {
		const componentClassName = ClassNames(
			classes.overlay_cloak,
			{
				[classes.overlay_cloak__show]: this.state.show,
				[classes.overlay_cloak__appeared]: this.state.isReady
			}
		);

		return (
			<div
				onClick={this.props.handleClose}
				className={componentClassName}
			>
			</div>
		);
	}
}

OverlayCloak.defaultProps = {
	handleClose: () => {}
};

OverlayCloak.propTypes = {
	show: PropTypes.bool,
	handleClose: PropTypes.func
};

export { OverlayCloak };
