import AdBox from "../components/AdBox";
import Footer from "../components/Footer";
import CreateCampaignCSS from "./CreateCampaign.module.css";
import AdOne from "../assets/adOne.png";
import AdTwo from "../assets/adTwo.png";
import AdThree from "../assets/adThree.png";
import { useState } from "react";

function CreateCampaign({setFormat}) {
	const adTypes = {
		Banner: AdOne,
		Interstital: AdTwo,
		"Push To Nearby Users": AdThree,
	};

	const adDescriptions = {
		Banner: "Display your ad in the events section of the calandar.",
		Interstital:
			"Full screen ad that covers the entire interface of the Myngly application.",
		"Push To Nearby Users": "Limit your audience based on location",
	};

	const adTypeNames = ["Banner", "Interstital", "Push To Nearby Users"];

	const [selectedAd, setSelectedAd] = useState(null);

	const [adName, setAdName] = useState("");

	const handleAdNameChange = (event) => {
		setAdName(event.target.value);
	};

	const handleButtonClick = (adId) => {
		setSelectedAd(adId);
        setFormat(adId);
		console.log(`Button in box ${adId} is clicked`);
	};

	return (
		<div className={CreateCampaignCSS.mainContainer}>
			<div className={CreateCampaignCSS.bodyContainer}>
				<div className={CreateCampaignCSS.bodyHeader}>
					<div className={CreateCampaignCSS.bodyHeaderTitle}>
						Campaign Name
					</div>
					<div className={CreateCampaignCSS.inputContainer}>
						<input
							type="text"
							id="adName"
							name="adName"
							className={CreateCampaignCSS.bodyHeaderInputAdName}
							required
							minLength="4"
							maxLength="200"
							placeholder="2024 University of Arkansas Spring Cohort"
							onChange={handleAdNameChange}
						/>
						<div
							className={CreateCampaignCSS.currentCharacterCount}
						>
							{adName.length}/{200}
						</div>
					</div>
				</div>
				<div className={CreateCampaignCSS.bodyAdSelection}>
					<div className={CreateCampaignCSS.bodyAdFormat}>
						Ad format
					</div>
					<div className={CreateCampaignCSS.bodyAdDescription}>
						Choose the Myngly ad format that best suits your
						business goals.
					</div>
					<div className={CreateCampaignCSS.bodyAdTypes}>
						{adTypeNames.map((adId) => (
							<AdBox
								key={adId}
								title={adId}
								image={adTypes[adId]}
								id={adId}
								description={adDescriptions[adId]}
								isSelected={selectedAd === adId}
								onButtonClick={handleButtonClick}
							/>
						))}
					</div>
				</div>
			</div>
			<Footer currentStep={1} />
		</div>
	);
}

export default CreateCampaign;
