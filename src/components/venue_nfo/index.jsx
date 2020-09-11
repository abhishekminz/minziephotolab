import React from "react";
import Zoom from "react-reveal/Zoom";

import calendar from "../../resources/images/icons/calendar.png";
import location from "../../resources/images/icons/location.png";

const VenueNfo = () => {
	return (
		<div className="vn_wrapper bck_black">
			<Zoom>
				<div className="vn_item">
					<div className="vn_outer">
						<div className="vn_inner">
							<div className="vn_icon_square bck_red"></div>
							<div
								className="vn_icon"
								style={{ backgroundImage: `url(${calendar})` }}></div>
							<div className="vn_title">Event date and time</div>
							<div className="vn_desc">25 Jan 2021 @10:00 am</div>
						</div>
					</div>
				</div>
			</Zoom>

			<Zoom delay={500}>
				<div className="vn_item">
					<div className="vn_outer">
						<div className="vn_inner">
							<div className="vn_icon_square bck_yellow"></div>
							<div
								className="vn_icon"
								style={{ backgroundImage: `url(${location})` }}></div>
							<div className="vn_title">Event location</div>
							<div className="vn_desc">Tea Garden, Namkum, Ranchi-10</div>
						</div>
					</div>
				</div>
			</Zoom>
		</div>
	);
};

export default VenueNfo;
