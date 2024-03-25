import React, { useState, useEffect } from 'react';
import styles from './AdPreview.module.css';
import topBar from '../assets/adPreviewTopStatic.png';
import middleImage from '../assets/adPreviewMiddleStatic.png';
import bottomBar from '../assets/adPreviewBottomStatic.png';

const AdPreview = ({ adType, adText, banner, link }) => {
    const bannerSrc = banner ? URL.createObjectURL(banner) : '';
    const [adTextColor, setAdTextColor] = useState('#000'); // Default to black

    useEffect(() => {
        if (banner) {
            const imageUrl = URL.createObjectURL(banner);
            analyzeImageColors(imageUrl).then(color => setAdTextColor(color));
        } else {
            setAdTextColor('#000'); // Default to black if no banner
        }
    }, [banner]);

    // Splitting the ad text to apply styling to the first two words
    const formattedAdText = adText ? adText.split(' ').map((word, index) => {
        if (index < 2) {
            return `<span style="font-weight: bold;">${word}</span>`;
        }
        return word;
    }).join(' ') : 'Your ad text will appear here';

    const renderBannerAdStyle = () => (
        <div className={styles.bannerAdPreview}>
            <img src={topBar} alt="Top Bar" className={styles.staticTopBar} />
            <div className={styles.adContainer}>
                {banner && <img src={bannerSrc} alt="Ad banner" className={styles.adBanner} />}
                <p className={styles.adText} style={{ color: adTextColor }} dangerouslySetInnerHTML={{ __html: formattedAdText }} />
            </div>
            <div className={styles.dynamicMiddleImage} style={{ backgroundImage: `url(${middleImage})` }}></div>
            <img src={bottomBar} alt="Bottom Bar" className={styles.staticBottomBar} />
        </div>
    );

    const renderOtherAdStyles = () => (
        <>
            <img src={topBar} alt="Top Bar" className={styles.staticTopBarOther} />
            <div className={styles.dynamicMiddleImageOther} style={{ backgroundImage: `url(${middleImage})` }}></div>
            <img src={bottomBar} alt="Bottom Bar" className={styles.staticBottomBarOther} />
            <div className={styles.shadowOverlay}></div>
            <div className={styles.notificationBox}>
                <div className={styles.exitButton}>X</div>
                {banner && <img src={bannerSrc} alt="Ad banner" className={styles.adBannerOther} />}
                <p className={styles.adText} dangerouslySetInnerHTML={{ __html: formattedAdText }} />
            </div>
        </>
    );

    return (
        <div className={styles.previewContainer}>
            <h2 className={styles.previewTitle}>Preview</h2>
            <div className={adType === 'banner' ? styles.bannerAdPreview : styles.phoneMockup}>
                {adType === 'banner' ? renderBannerAdStyle() : renderOtherAdStyles()}
            </div>
            <p className={styles.previewDisclaimer}>
                Published banners may differ from preview. Preview depends on operating system and screen size.
            </p>
        </div>
    );
};

export default AdPreview;

// Function to analyze the image and find the most prominent non-white color
async function analyzeImageColors(imageUrl) {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const color = findProminentColor(imageData.data);
            resolve(color);
        };
        img.crossOrigin = 'Anonymous'; // Handle CORS
        img.src = imageUrl;
    });
}

// Simplified function to find the most prominent non-white color
function findProminentColor(data) {
    let colorMap = {};
    for (let i = 0; i < data.length; i += 4) {
        // Skip white and near-white colors
        if (data[i] < 250 || data[i + 1] < 250 || data[i + 2] < 250) {
            const key = `${data[i]}-${data[i + 1]}-${data[i + 2]}`;
            if (colorMap[key]) {
                colorMap[key]++;
            } else {
                colorMap[key] = 1;
            }
        }
    }

    let mostProminentColor = '#000'; // Default to black
    let maxCount = 0;
    for (const [color, count] of Object.entries(colorMap)) {
        if (count > maxCount) {
            maxCount = count;
            const [r, g, b] = color.split('-');
            mostProminentColor = `rgb(${r},${g},${b})`;
        }
    }

    return mostProminentColor;
}