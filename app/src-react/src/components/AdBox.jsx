import AdBoxCSS from "./AdBox.module.css";

// eslint-disable-next-line react/prop-types
function AdBox({id, onButtonClick, title, image, description}) {

    const handleButtonClick = () => {
        onButtonClick(id);
    }

    return <div className={AdBoxCSS.mainContainer}>
        <div className={AdBoxCSS.topOfAd}>
            <div className={AdBoxCSS.adName}>{title}</div>
            <button className={AdBoxCSS.adButton} onClick={handleButtonClick}></button>
        </div>
        <div className={AdBoxCSS.bottomOfAd}>
            <img src={image} className={AdBoxCSS.adImg}/>
            <div className={AdBoxCSS.adDescription}>{description}</div>
        </div>
    </div>
}

export default AdBox;