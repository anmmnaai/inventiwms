import React, { useState } from "react";
import LoginCSS from "./Login.module.css";
import x from "../assets/x.svg";
import googleIcon from "../assets/google-ic.svg";
import facebookIcon from "../assets/facebook-ic.svg";
import appleIcon from "../assets/apple-ic.svg";
import { Link } from "react-router-dom";

export default function Login({ toggleModal }) {
	return (
		<>
			<div className={LoginCSS.modal}>
				<div className={LoginCSS.overlay} />
				<div className={LoginCSS.headerBar}>
					<button className={LoginCSS.btnX}>
						<img
							src={x}
							className={LoginCSS.svgX}
							alt="X"
							onClick={toggleModal}
						/>
					</button>
					<div className={LoginCSS.txtLogin}>Log in or sign up</div>
					<div className={LoginCSS.spacer} />
				</div>
				<div className={LoginCSS.popupContent}>
					<p className={LoginCSS.txtWelcome}>Welcome to Myngly ads</p>
					<input
						type="text"
						id="email"
						placeholder="Email address"
						name="Email address"
						className={LoginCSS.input}
					/>
					<input
						type="password"
						id="password"
						placeholder="Password"
						name="Password"
						className={LoginCSS.input}
					/>
					<Link to="/campaignManager">
						<button className={LoginCSS.btnContinue}>
							Continue
						</button>
					</Link>
					<div className={LoginCSS.orBox}>
						<hr
							className={LoginCSS.hr}
							style={{ marginRight: "14px" }}
						/>
						or
						<hr
							className={LoginCSS.hr}
							style={{ marginLeft: "14px" }}
						/>
					</div>
					<button
						className={LoginCSS.btnLoginWith}
						style={{
							borderColor: "#eb4335",
						}}
					>
						<img
							src={googleIcon}
							className={LoginCSS.svgIcon}
							alt="Google"
						/>
						Log in with Google
					</button>
					<button
						className={LoginCSS.btnLoginWith}
						style={{
							borderColor: "#4267b2",
						}}
					>
						<img
							src={facebookIcon}
							className={LoginCSS.svgIcon}
							alt="Facebook"
						/>
						Log in with Facebook
					</button>
					<button
						className={LoginCSS.btnLoginWith}
						style={{
							borderColor: "black",
						}}
					>
						<img
							src={appleIcon}
							className={LoginCSS.svgApple}
							alt="Apple"
						/>
						Log in with Apple
					</button>
				</div>
			</div>
		</>
	);
}
