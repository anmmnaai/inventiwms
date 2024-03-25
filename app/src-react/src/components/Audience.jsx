import React, { useState } from "react";
import infoRounded from "../assets/info-i-rounded.svg";
import placeholderMap from "../assets/map-placeholder.png";
import AudienceCSS from "./Audience.module.css";

export default function Audience() {
	const [radiusValue, setRadiusValue] = useState(30);

	const handleRadiusChange = (event) => {
		setRadiusValue(event.target.value);
	};

	const progressStyle = {
		background: `linear-gradient(to right, #2C666E ${radiusValue}%, #90DDF0 ${radiusValue}%)`,
	};

	return (
		<>
			<h2 className={AudienceCSS.header}>Audience</h2>
			<h3 className={AudienceCSS.subhead}>
				Set a primary address for your ad. Your ad will reach users
				within that radius.
			</h3>
			<p className={AudienceCSS.inputLabel}>
				Address <img src={infoRounded} />
			</p>
			<input
				type="text"
				id="address"
				className={AudienceCSS.inputBox}
			></input>
			<p className={AudienceCSS.inputLabel}>Radio</p>
			<input
				type="text"
				id="radio"
				className={AudienceCSS.inputBox}
			></input>
			{/* <Slider min={1} max={100} defaultValue={30} /> */}
			<br />
			<input
				type="range"
				min="1"
				max="100"
				className={AudienceCSS.slider}
				id="radius"
				defaultValue={radiusValue}
				onChange={handleRadiusChange}
			></input>
			<div className={AudienceCSS.bar} style={progressStyle}></div>
			<p className={AudienceCSS.numLabel}>{radiusValue} mi</p>
			<img src={placeholderMap} className={AudienceCSS.map}/>
		</>
	);
}
