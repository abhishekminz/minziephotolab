import React, { Component } from "react";

import Fade from "react-reveal/Fade";

class TimeUntill extends Component {
	state = {
		deadline: "Jan, 25, 2021",
		days: "0",
		hours: "0",
		minutes: "0",
		seconds: "0",
	};

	componentDidMount() {
		setInterval(this.calculateRemainingTime, 1000);
	}

	calculateRemainingTime = () => {
		const time = new Date(this.state.deadline) - new Date();

		if (time < 0) return console.log("Date passed");

		const seconds = Math.floor((time / 1000) % 60);
		const minutes = Math.floor((time / 1000 / 60) % 60);
		const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
		const days = Math.floor(time / (1000 * 60 * 60 * 24));

		this.setState({ days, hours, minutes, seconds });
	};

	render() {
		const { days, hours, minutes, seconds } = this.state;

		return (
			<Fade left delay={1000}>
				<div className="countdown_wrapper">
					<div className="countdown_top">Event starts in</div>
					<div className="countdown_bottom">
						<div className="countdown_item">
							<div className="countdown_time">{days}</div>
							<div className="countdown_tag">Days</div>
						</div>

						<div className="countdown_item">
							<div className="countdown_time">{hours}</div>
							<div className="countdown_tag">HS</div>
						</div>

						<div className="countdown_item">
							<div className="countdown_time">{minutes}</div>
							<div className="countdown_tag">Mins</div>
						</div>

						<div className="countdown_item">
							<div className="countdown_time">{seconds}</div>
							<div className="countdown_tag">Seconds</div>
						</div>
					</div>
				</div>
			</Fade>
		);
	}
}

export default TimeUntill;
