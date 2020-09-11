import React, { Component } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import SideDrawer from "./SideDrawer";

class Header extends Component {
	state = {
		showAppBar: true,
		showDrawer: false,
	};

	componentDidMount() {
		window.addEventListener("scroll", this.handleWindowScroll);
	}

	handleWindowScroll = () => {
		if (window.scrollY > 0) return this.setState({ showAppBar: false });
		return this.setState({ showAppBar: true });
	};

	handleDrawer = (showDrawer) => {
		return this.setState({ showDrawer });
	};

	render() {
		const { showAppBar, showDrawer } = this.state;

		return (
			<React.Fragment>
				<AppBar
					position="fixed"
					style={{
						backgroundColor: "transparent",
						color: "white",
						boxShadow: "none",
					}}>
					<Toolbar>
						<div className="header_logo">
							<div className="font_righteous header_logo_venue">
								Minzie Photolab
							</div>
							<div className="header_logo_title">Workshop</div>
						</div>

						<IconButton
							onClick={() => {
								this.handleDrawer(true);
							}}
							edge="start"
							color="inherit"
							aria-label="menu">
							<MenuIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
				<SideDrawer open={showDrawer} onClose={this.handleDrawer} />
			</React.Fragment>
		);
	}
}

export default Header;
