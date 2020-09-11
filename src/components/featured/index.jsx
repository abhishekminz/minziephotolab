import React from "react";

import MySlider from "./MySlider";
import TimeUntill from "./TimeUntill";

const Featured = () => {
	return (
		<div style={{ position: "relative" }}>
			<MySlider />

			<div className="artist_name">
				<div className="wrapper">Minzie Photolab</div>
			</div>

			<TimeUntill />
		</div>
	);
};

export default Featured;
