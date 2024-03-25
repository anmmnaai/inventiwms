import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./DatePicker.css";

export default function DatePicker({
	selectedFrom,
	selectedTo,
	updateFrom,
	updateTo,
}) {
	const [selected, setSelected] = useState();
	const [fromValue, setFromValue] = useState();
	const [toValue, setToValue] = useState();

	const handleChange = (range) => {
		setSelected(range);
		if (range?.from) {
			setFromValue(format(range.from, "y-MM-dd"));
			updateFrom(format(range.from, "y-MM-dd"));
		} else {
			setFromValue("");
			updateFrom("");
		}
		if (range?.to) {
			setToValue(format(range.to, "y-MM-dd"));
			updateTo(format(range.to, "y-MM-dd"));
		} else {
			setToValue("");
			updateTo("");
		}
	};

	const today = new Date();

	return (
		<DayPicker
			mode="range"
			selected={selected}
			onSelect={handleChange}
			disabled={{ before: today }}
			showOutsideDays
		/>
	);
}
