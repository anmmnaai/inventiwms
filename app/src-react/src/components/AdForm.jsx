import React, { useState } from 'react';
import styles from './AdForm.module.css';

const AdForm = ({ adType, onFormChange }) => {
    const [adText, setAdText] = useState('');
    const [banner, setBanner] = useState(null);
    const [link, setLink] = useState('');
    const [isAdTextValid, setIsAdTextValid] = useState(true);
    const [isLinkValid, setIsLinkValid] = useState(true);

    const handleTextChange = (e) => {
        const newText = e.target.value.slice(0, 250); // Enforce max character length
        setAdText(newText);
        setIsAdTextValid(newText.trim() !== ''); // Check if the field is not empty
        onFormChange({ adText: newText, banner, link });

        // Dynamically adjust the textarea height
        e.target.style.height = 'auto'; // Reset height to recalculate
        e.target.style.height = `${e.target.scrollHeight}px`; // Set new height based on content
    };

    const handleBannerChange = (e) => {
        const newBanner = e.target.files[0];
        setBanner(newBanner);
        onFormChange({ adText, banner: newBanner, link });
    };

    const handleLinkChange = (e) => {
        const newLink = e.target.value;
        setLink(newLink);
        setIsLinkValid(isValidUrl(newLink)); // Validate the URL
        onFormChange({ adText, banner, link: newLink });
    };

    // Simple URL validation function
    const isValidUrl = (urlString) => {
        try {
            new URL(urlString);
            return true;
        } catch (e) {
            return false;
        }
    };

    const adTypeInfo = {
        banner: {
            title: "Banner",
            description: "Display your ad in the events section of the calendar."
        },
        interstitial: {
            title: "Interstitial",
            description: "Full screen ad that covers the entire interface of the Myngly application."
        },
        push: {
            title: "Push to nearby users",
            description: "Limit your audience based on location."
        }
    };

    const { title, description } = adTypeInfo[adType] || {};

    return (
        <div className={styles.formContainer}>
            <div className={styles.formHeader}>
                <h1 className={styles.formTitle}>{title}</h1>
                <p className={styles.formDescription}>{description}</p>
            </div>
            <form className={styles.adForm}>
                <div className={styles.fieldsWrapper}>
                    <div className={styles.inputGroup}>
                        <label className={styles.labelAdForm} htmlFor="adText">Ad Text (required)</label>
                        <p className={styles.fieldDescription}>
                            Enter the text you want to appear in the ad.
                        </p>
                        <div className={styles.textareaWrapper}>
                            <textarea
                                id="adText"
                                className={`${styles.textarea} ${!isAdTextValid ? styles.invalidInput : ''}`}
                                value={adText}
                                onChange={handleTextChange}
                                required
                            />
                            <div className={styles.charCount}>
                                {adText.length}/250
                            </div>
                        </div>
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.labelAdForm} htmlFor="bannerImage">Banner</label>
                        <p className={styles.fieldDescription}>
                            Drag and drop files to upload them to your library. Use JPG or PNG.
                        </p>
                        <label className={`${styles.labelAdForm} ${styles.uploadButton}`} htmlFor="bannerImage">
                            Upload banner graphics
                        </label>
                        <input
                            type="file"
                            id="bannerImage"
                            onChange={handleBannerChange}
                            accept="image/jpeg, image/png"
                            className={styles.fileInput} // Hide the actual input
                        />
                    </div>
                    <div className={styles.inputGroup}>
                        <label className={styles.labelAdForm} htmlFor="linkUrl">Link</label>
                        <p className={styles.fieldDescription}>
                            Enter the link you want users to visit.
                        </p>
                        <input
                            type="text"
                            id="linkUrl"
                            className={!isLinkValid ? styles.invalidInput : ''}
                            value={link}
                            onChange={handleLinkChange}
                            required
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default AdForm;
