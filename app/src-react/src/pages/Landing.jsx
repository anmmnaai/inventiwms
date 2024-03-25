import React, { useState } from "react";
import logo_one from "../assets/myngly-logo.png";
import logo_two from "../assets/myngly-logo-web3.png";
import logo_three from "../assets/myngly-logo-web4.png";
import "./Landing.css";
import Login from "../components/Login";

const Landing = () => {
	const [modal, setModal] = useState(false);

	const toggleView = () => {
		setModal(!modal);
	};

	return (
		<div className="landing-container">
			{modal && <div className="modalcss">
				<Login toggleModal={toggleView} />
			</div>}
			<img src={logo_one} alt="" className="logo1" />

			<img src={logo_two} alt="" className="logo2" />
			<img src={logo_three} alt="" className="logo3" />

			<button type="button" className="sign_btn" onClick={toggleView}>
				<h1 className="sign_text">Sign in</h1>
			</button>

			<button type="button" className="start_btn">
				<h1 className="start_text">Start a campaign</h1>
			</button>
			<div className="main_text">
				Promote your brand on Myngly and reach more people
			</div>

			<div className="lower_text">
				Advertise on Myngly and achieve strong business results.
			</div>

			<button type="button" className="launch_btn">
				<h1 className="launch_text">Launch a campaign</h1>
			</button>

			{/* <div className='placeholder'></div> */}
		</div>
	);
};

export default Landing;
