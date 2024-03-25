import React, { useState } from "react";
import { Link } from "react-router-dom";
import VerifyCSS from "./VerifyModal.module.css";

export default function VerifyModal() {
	const line1 = "We will review your ad before it is displayed on Myngly.";

	const line2 =
		"Your ad is in “review status”, we will complete the review within 24-48 hours and notify you by email. Once approved, your campaign will be published on the date of your choice.";
	return (
		<div>
			<div className={VerifyCSS.overlay}></div>
			<div className={VerifyCSS.modalContainer}>
				<h1 className={VerifyCSS.header}>Verification In Progress</h1>
				<p className={VerifyCSS.bodyText}>{line1}</p>
				<p className={VerifyCSS.bodyText}>{line2}</p>
				<Link to="/campaignManager" className={VerifyCSS.centerLink}>
					<button className={VerifyCSS.button}>Got it!</button>
				</Link>
			</div>
		</div>
	);
}
