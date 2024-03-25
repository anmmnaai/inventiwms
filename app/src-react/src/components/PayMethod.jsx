import React, { useState } from "react";
import iconCards from "../assets/card-ic.png";
import appleIcon from "../assets/apple-ic.svg";
import plusIcon from "../assets/plus-ic.svg";
import cvvIcon from "../assets/cvv.svg";
import DefineCSS from "../pages/DefineAd.module.css";
import PayCSS from "./PayMethod.module.css";

export default function payMethod({
	value,
	checked,
	onChange,
	id,
	expand,
	payType,
	payInfo,
}) {
	if (id == "credit") {
		if (expand) {
			return (
				<>
					<label className={PayCSS.containerNoBottom}>
						<div>
							<p className={PayCSS.expandHeader}>{payType}</p>
							<p className={PayCSS.expandText}>
								Debit card ending in **** {payInfo}
							</p>
						</div>
						<input
							type="radio"
							value={value}
							checked={checked}
							onChange={onChange}
							name="payMethod"
							id={id}
						/>
						<span className={PayCSS.checkMark}></span>
					</label>
					<button className={PayCSS.containerBottom} onClick={onChange}>
						<img src={plusIcon} />
						<img src={cvvIcon} className={PayCSS.iconExpand} />
						Add a new credit or debit card
					</button>
				</>
			);
		} else {
			return (
				<label className={PayCSS.containerRadio}>
					Debit or credit card
					<img src={iconCards} className={PayCSS.iconCards} />
					<input
						type="radio"
						value={value}
						checked={checked}
						onChange={onChange}
						name="payMethod"
						id="credit"
					/>
					<span className={PayCSS.checkMark}></span>
				</label>
			);
		}
	} else if (id == "apple")
		return (
			<label className={PayCSS.containerRadio}>
				Apple Pay
				<img src={appleIcon} className={PayCSS.iconCards} />
				<input
					type="radio"
					value={value}
					checked={checked}
					onChange={onChange}
					name="payMethod"
					id="apple"
				/>
				<span className={PayCSS.checkMark}></span>
			</label>
		);
}
