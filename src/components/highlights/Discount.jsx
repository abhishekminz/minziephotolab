import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

import MyButton from "./../common/MyButton";

class Discount extends Component {
	state = {
		discountStart: 0,
		discountEnd: 30,
	};

	porcentage = () => {
		if (this.state.discountStart < this.state.discountEnd)
			this.setState({ discountStart: this.state.discountStart + 1 });
	};

	componentDidUpdate() {
		setTimeout(() => this.porcentage(), 30);
	}

	render() {
		return (
			<div className="center_wrapper">
				<div className="discount_wrapper">
					<Fade
						onReveal={() => {
							this.porcentage();
							console.log("RUN");
						}}>
						<div className="discount_porcentage">
							<span>{this.state.discountStart}%</span>
							<span>OFF</span>
						</div>
					</Fade>

					<Slide right>
						<div className="discount_description">
							<h3>Get your seats before 20th Jan</h3>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
								id vel assumenda numquam, non, obcaecati dolores necessitatibus
								minus iusto quisquam mollitia. In sint culpa saepe, blanditiis
								minima natus rem consectetur?
							</p>
							<div>
								<MyButton
									text="Purchase tickets"
									bck="#ffa800"
									color="#ffffff"
									link="http://google.com"
								/>
							</div>
						</div>
					</Slide>
				</div>
			</div>
		);
	}
}

export default Discount;
