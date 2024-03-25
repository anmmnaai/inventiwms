import React, { useState, useEffect } from 'react';
import AdForm from '../components/AdForm';
import AdPreview from '../components/AdPreview';
import styles from './CreateAd.module.css'; // Ensure this import path is correct

const CreateAd = ({ adFormat }) => {
  const [adType, setAdType] = useState('');
  const [adContent, setAdContent] = useState({
    adText: '',
    banner: null,
    link: ''
  });

  const adFormatstoTypeMapping = {
    "Banner": "banner",
    "Interstital": "interstitial",
    "Push To Nearby Users": "push",
  };

  useEffect(() => {
    const type = adFormatstoTypeMapping[adFormat];
    if (type) {
      setAdType(type);
    }
  }, [adFormat]);

  const handleFormChange = (formData) => {
    setAdContent(formData);
  };

  return (
    <div className={styles.CreateAd}>
      <h1 className={styles.pageHeading}>Create Ad</h1>
      <div className={styles.adContentLayout}>
        <AdForm adType={adType} onFormChange={handleFormChange} />
        <AdPreview adType={adType} {...adContent} />
      </div>
    </div>
  );
};

export default CreateAd;
