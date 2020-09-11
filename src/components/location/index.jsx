import React from "react";

const Location = () => {
	return (
		<div className="location_wrapper">
			<iframe
				width="100%"
				height="450"
				id="gmap_canvas"
				src="https://maps.google.com/maps?q=tea%20garden%2C%20namkum%2C%20ranchi&t=&z=13&ie=UTF8&iwloc=&output=embed"
				frameborder="0"
				scrolling="no"
				marginheight="0"
				marginwidth="0"></iframe>

			<div className="location_tag">
				<div>Location</div>
			</div>
		</div>
	);
};

export default Location;
