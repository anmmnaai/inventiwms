import NavbarCSS from "./Navbar.module.css";
import myngly_logo_navbar from "../assets/myngly_logo_navbar_crop.png";
import placeholder_profile_picture from "../assets/placeHolderPhotoNavbar.png";
import dropdown_vector from "../assets/Vector.svg";

function Navbar() {
    return <div className={NavbarCSS.navbarContainer}>
            <div className={NavbarCSS.navbarLeftContainer}>
                <img src={myngly_logo_navbar} className={NavbarCSS.navbarMynglyLogo} alt="myngly_logo" />
                <div className={NavbarCSS.navbarTitlePage}>Advertise on Myngly</div>
            </div>
            <div className={NavbarCSS.navbarRightContainer}>
                <div className={NavbarCSS.navbarProfileName}>Isabella Smith</div>
                <div className={NavbarCSS.navbarProfileImgContainer}>
                    <img className={NavbarCSS.navbarProfileImg} src={placeholder_profile_picture} alt="profile_picture" />
                </div>
                <input className={NavbarCSS.navbarDropdown} type="image" src={dropdown_vector} name="dropdownNavbar" id="dropdownNavbar" />
            </div>
        </div>
}

export default Navbar;