import React, { useState } from "react";
import CreateAd from "./CreateAd";
import CreateCampaign from "./CreateCampaign";
import DefineAd from "./DefineAd";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import VerifyModal from "../components/VerifyModal";

export default function SinglePageBase() {
	const [currentStep, setCurrentStep] = useState(0);
	const [adFormat, setAdFormat] = useState();
	const [launchReady, setLaunchReady] = useState(false);
	const [showModal, setShowModal] = useState(false);

	const handleAdFormat = (format) => {
		setAdFormat(format)
	};

	const handleNextStep = () => {
		if (currentStep < 2 && adFormat != undefined) {
			setCurrentStep(currentStep + 1);
		} else if(currentStep == 2 && launchReady) {
			setShowModal(true);
		}
	};

	const handlePrevStep = () => {
		if (currentStep > 0) {
			setCurrentStep(currentStep - 1);
		}
	};

	if (currentStep == 0) { // Create campaign page
		return (
			<div>
				<Navbar />
				<CreateCampaign setFormat={handleAdFormat}/>
				<Footer
					currentStep={currentStep}
					handleNext={handleNextStep}
					handlePrev={handlePrevStep}
				/>
			</div>
		);
	} else if (currentStep == 1) { // Create ad page
		return (
			<>
				<Navbar />
				<CreateAd adFormat={adFormat}/>
				<Footer
					currentStep={currentStep}
					handleNext={handleNextStep}
					handlePrev={handlePrevStep}
				/>
			</>
		);
	} else if (currentStep == 2) { // Define ad page
		return (
			<>	
				{showModal && <VerifyModal />}
				<Navbar />
				<DefineAd adFormat={adFormat} launchReady={setLaunchReady}/>
				<Footer
					currentStep={currentStep}
					handleNext={handleNextStep}
					handlePrev={handlePrevStep}
				/>
			</>
		);
	}
}
