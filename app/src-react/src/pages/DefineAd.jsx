import React, { useState, useEffect, useRef } from "react";
import DefineCSS from "./DefineAd.module.css";
import infoRounded from "../assets/info-i-rounded.svg";
import calendarIcon from "../assets/icon-calendar.svg";
import dropdownIcon from "../assets/dropdown-ic.svg";
import DatePicker from "../components/DatePicker";
import Audience from "../components/Audience";
import PayMethod from "../components/PayMethod";
import AddCardModal from "../components/AddCardModal";
import "react-day-picker/dist/style.css";

export default function DefineAd({ adFormat, launchReady }) {
	const [showDayPicker, setShowDayPicker] = useState(false);
	const [fromState, setFromState] = useState();
	const [toState, setToState] = useState();
	const [expandCredit, setExpandCredit] = useState(false);
	const [selectedValue, setSelectedValue] = useState("");
	const [modal, setModal] = useState(false);
	const divRef = useRef(null);

	useEffect(() => {
		// if(fromState != "" && fromState != undefined && selectedValue != "") {
		if (true) {
			launchReady(true);
		} else launchReady(false);
	}, [fromState, selectedValue]);

	useEffect(() => {
		// Add event listener to handle clicks outside of the div
		const handleClickOutside = (event) => {
			if (divRef.current && !divRef.current.contains(event.target)) {
				// Clicked outside of the div, so hide it
				setShowDayPicker(false);
			}
		};

		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []); // Only run this effect once after initial render

	const toggleView = () => {
		setModal(!modal);
	};

	const handleSubmit = () => {
		setModal(false);
		if (selectedValue == "credit") setExpandCredit(true);
	};

	const handleRadioChange = (event) => {
		setSelectedValue(event.target.value);
		if (event.target.value == "credit") setModal(true);
		else setExpandCredit(false);
	};

	const toggleExpandCredit = () => {
		setExpandCredit(!expandCredit);
	};

	const toggleDayPicker = () => {
		setShowDayPicker(!showDayPicker);
	};

	const updateFromState = (val) => {
		setFromState(val);
	};

	const updateToState = (val) => {
		setToState(val);
	};

	var timezone = "UTC-06:00";
	var currentPrice = 2.99;
	var currency = "USD";

	return (
		<>
			{modal && (
				<div className={DefineCSS.modalcss}>
					<AddCardModal
						handleSubmit={handleSubmit}
						onClose={toggleView}
					/>
				</div>
			)}

			<div className={DefineCSS.page}>
				<h1 className={DefineCSS.pageHeader}>Define Ad</h1>
				<h3 className={DefineCSS.subhead}>
					Control when your ads are displayed.
				</h3>
				<div className={DefineCSS.wrapper}>
					<div className={DefineCSS.boxLeft}>
						<h2 className={DefineCSS.header}>Timeline</h2>
						<h3 className={DefineCSS.subhead}>
							Select the number of days you want your ad to appear
							on Myngly.
						</h3>
						<div className={DefineCSS.subWrapper}>
							<div>
								<p className={DefineCSS.timelineHeader}>
									Period <img src={infoRounded} />
								</p>
								<div style={{ position: "relative" }}>
									<button
										onClick={toggleDayPicker}
										className={DefineCSS.dateButton}
									>
										{" "}
										<div className={DefineCSS.buttonFlex}>
											<img
												src={calendarIcon}
												className={DefineCSS.dateIcons}
											/>
											{fromState == null
												? "Start date - End date"
												: fromState + " - " + toState}
											<img
												src={dropdownIcon}
												className={DefineCSS.dateIcons}
											/>
										</div>
									</button>
									<dialog
										className={DefineCSS.dialog}
										open={showDayPicker}
									>
										<DatePicker
											selectedFrom={fromState}
											selectedTo={toState}
											updateFrom={updateFromState}
											updateTo={updateToState}
										/>
									</dialog>
								</div>
							</div>
							<div className={DefineCSS.tzFont}>{timezone}</div>
							<div className={DefineCSS.price}>
								<p className={DefineCSS.timelineHeader}>
									Price per day <img src={infoRounded} />
								</p>
								<div className={DefineCSS.field}>
									<p className={DefineCSS.currency}>{currency}</p>
									<div className={DefineCSS.vl} />
									{currentPrice}
								</div>
							</div>
						</div>
					</div>
					<div className={DefineCSS.boxLeft}>
						<h2 className={DefineCSS.header}>Payment Method</h2>
						<h3 className={DefineCSS.subhead}>
							Choose your payment method.
						</h3>
						<PayMethod
							id={"credit"}
							value={"credit"}
							checked={selectedValue === "credit"}
							onChange={handleRadioChange}
							expand={expandCredit}
							payType={"Chase Debit Card"}
							payInfo={"1234"}
						/>
						<PayMethod
							id={"apple"}
							value={"apple"}
							checked={selectedValue === "apple"}
							onChange={handleRadioChange}
							expand={false}
						/>
					</div>
					{adFormat == "Push To Nearby Users" ? (
						<div className={DefineCSS.boxLeft}>
							<Audience />
						</div>
					) : (
						""
					)}
					<div
						className={DefineCSS.boxRight}
						style={{
							gridRow:
								adFormat == "Push To Nearby Users"
									? "1/4"
									: "1/3",
						}}
					>
						<div className={DefineCSS.headerRight}>Checkout</div>
						<div className={DefineCSS.checkoutText}>
							<p >Subtotal</p>
							<p className={DefineCSS.rightJustify}>${29.9}</p>
							<p >Estimated Tax</p>
							<p className={DefineCSS.rightJustify}>${1.2}%</p>
							<p className={DefineCSS.bold}>Total</p>
							<p className={DefineCSS.boldRight}>${31.1}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
