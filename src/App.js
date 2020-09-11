import React from "react";

import { Element } from "react-scroll";

import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import VenueNfo from "./components/venue_nfo";
import Highlights from "./components/highlights";
import Pricing from "./components/pricing";
import Location from "./components/location";
import Footer from "./components/header_footer/Footer";

import "./resources/styles.scss";

function App() {
	return (
		<div style={{ height: "2500px" }} className="App">
			<Header />
			<Element name="Featured">
				<Featured />
			</Element>
			<Element name="VenueNfo">
				<VenueNfo />
			</Element>
			<Element name="Highlights">
				<Highlights />
			</Element>
			<Element name="Pricing">
				<Pricing />
			</Element>
			<Element name="Location">
				<Location />
			</Element>
			<Footer />
		</div>
	);
}

export default App;
