import React, { Component } from "react";
import Zoom from "react-reveal/Zoom";

import MyButton from "./../common/MyButton";

class Pricing extends Component {
	state = {
		prices: [800, 1000, 1250],
		positions: ["Basic", "Medium", "Pro"],
		desc: [
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi dignissimos ipsam voluptate accusamus ab tenetur veniam nostrumr?",
			"Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi officiis quisquam dolores placeat nisi, labore voluptatum laborum",
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed atque earum dicta quam culpa at numquam voluptates in ut, deleniti",
		],
		linkto: ["https://google.com", "http://google.com", "http://google.com"],
	};

	showBoxes = () =>
		this.state.prices.map((price, index) => (
			<Zoom key={index} delay={index === 1 ? 0 : 500}>
				<div className="pricing_item">
					<div className="pricing_inner_wrapper">
						<div className="pricing_title">
							<span>Rs {price}</span>
							<span>{this.state.positions[index]}</span>
						</div>
						<div className="pricing_description">{this.state.desc[index]}</div>
						<div className="pricing_buttons">
							<MyButton
								text="Purchase"
								bck="#ffa800"
								color="#ffffff"
								link={this.state.linkto[index]}
							/>
						</div>
					</div>
				</div>
			</Zoom>
		));

	render() {
		return (
			<div className="bck_black">
				<div className="center_wrapper pricing_section">
					<h2>Pricing</h2>
					<div className="pricing_wrapper">{this.showBoxes()}</div>
				</div>
			</div>
		);
	}
}

export default Pricing;
