import React from "react";
import Fade from "react-reveal/Fade";

const Footer = () => {
	return (
		<footer style={{ backgroundColor: "#a8123e" }} className="bck_red">
			<Fade>
				<div className="font_righteous footer_logo_venue">Minzie Photolab</div>
				<div className="footer_copyright">
					&copy; {new Date().getFullYear()}. All rights reserved.
				</div>
			</Fade>
		</footer>
	);
};

export default Footer;
