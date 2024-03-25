import FooterCSS from "./Footer.module.css";

// eslint-disable-next-line react/prop-types
function Footer({ currentStep, handleNext, handlePrev }) {
	const progressItems = [];

	for (let i = 0; i < 3; i++) {
		progressItems.push(
			<div
				key={i}
				className={
					i <= currentStep ? FooterCSS.active : FooterCSS.notActive
				}
			></div>
		);
	}

	console.log(progressItems);

	return (
		<div className={FooterCSS.footerContainer}>
			<div className={FooterCSS.progressBar}>{progressItems}</div>
			<div className={FooterCSS.bottomOfFooter}>
				<button className={FooterCSS.backButton} onClick={handlePrev}>
					Back
				</button>
				<button className={FooterCSS.nextButton} onClick={handleNext}>
					{currentStep == 2 ? "Launch campaign" : "Next"}
				</button>
			</div>
		</div>
	);
}

export default Footer;
