import { useState } from "react";
import AddCardModalCSS from "./AddCardModal.module.css";
import X from "../assets/Vector.png"

function AddCardModal( {onClose, handleSubmit} ) {

    const [cardNumber, setCardNumber] = useState("");
    const [cardName, setCardName] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [securityCode, setSecurityCode] = useState("");
    const [region, setRegion] = useState("");
    const [addressOne, setAddressOne] = useState("");
    const [addressTwo, setAddressTwo] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [email, setEmail] = useState("");
    const [cardAlias, setcardAlias] = useState("");

    return <div>
        <div className={AddCardModalCSS.overlay}></div>
        <div className={AddCardModalCSS.modalContainer}>
            <form onSubmit={handleSubmit} className={AddCardModalCSS.formContainer}>
                <img onClick={onClose} className={AddCardModalCSS.closeModalIcon} src={X}/>
                <div className={AddCardModalCSS.modalTitle}>Add a credit or debit card</div>
                {/* Card Information */}
                <div className={AddCardModalCSS.cardInformationContainer}>
                    <div className={AddCardModalCSS.fullLengthContainer}>
                        <label className={AddCardModalCSS.formLabel}>Card number</label>
                        <input className={AddCardModalCSS.fullLengthInput} type="text" id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
                    </div>
                    <div className={AddCardModalCSS.fullLengthContainer}>
                        <label className={AddCardModalCSS.formLabel}>Name on card</label>
                        <input className={`${AddCardModalCSS.fullLengthInput} ${AddCardModalCSS.cardNameIcon}`} type="text" id="cardName" value={cardName} onChange={(e) => setCardName(e.target.value)} />
                    </div>
                    <div className={AddCardModalCSS.halfLengthMainContainer}>
                        <div className={AddCardModalCSS.halfLengthContainer}>
                            <label className={AddCardModalCSS.formLabel}>Expiration Date</label>
                            <input className={AddCardModalCSS.halfLengthInput} type="text" placeholder="MM/AA" id="cardExpirationDate" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
                        </div>
                        <div className={AddCardModalCSS.halfLengthContainer}>
                            <label className={AddCardModalCSS.formLabel}>CVC</label>
                            <input className={`${AddCardModalCSS.halfLengthInput} ${AddCardModalCSS.cvvIcon}`} type="text" id="securityCode" value={securityCode} onChange={(e) => setSecurityCode(e.target.value)} />
                        </div>
                    </div>
                </div>
                {/* Billing Address */}
                <div className={AddCardModalCSS.billingInformationContainer}>
                    <div className={AddCardModalCSS.billingInformationTitle}>Billing address</div>
                    <div className={AddCardModalCSS.fullLengthContainer}>
                            <label className={AddCardModalCSS.formLabel}>Country/Region</label>
                            <select name="regions" id="region" className={AddCardModalCSS.fullLengthInput} value={region} onChange={(e) => setRegion(e.target.value)}>
                                <option value="United State">United States</option>
                            </select>
                    </div>
                    <div className={AddCardModalCSS.fullLengthContainer}>
                            <label className={AddCardModalCSS.formLabel}>Address line 1</label>
                            <input className={AddCardModalCSS.fullLengthInput} type="text" id="addressOne" value={addressOne} onChange={(e) => setAddressOne(e.target.value)} />
                    </div>
                    <div className={AddCardModalCSS.fullLengthContainer}>
                            <label className={AddCardModalCSS.formLabel}>Address line 2 (optional)</label>
                            <input className={AddCardModalCSS.fullLengthInput} type="text" id="addressTwo" value={addressTwo} onChange={(e) => setAddressTwo(e.target.value)} />
                    </div>
                    <div className={AddCardModalCSS.halfLengthMainContainer}>
                        <div className={AddCardModalCSS.halfLengthContainer}>
                            <label className={AddCardModalCSS.formLabel}>City</label>
                            <input className={AddCardModalCSS.halfLengthInput} type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
                        </div>
                        <div className={AddCardModalCSS.halfLengthContainer}>
                            <label className={AddCardModalCSS.formLabel}>State</label>
                            <input className={AddCardModalCSS.halfLengthInput} type="text" id="state" value={state} onChange={(e) => setState(e.target.value)} />
                        </div>
                    </div>
                    <div className={AddCardModalCSS.zipcodeInput}>
                            <label className={AddCardModalCSS.formLabel}>Zip Code</label>
                            <input className={AddCardModalCSS.halfLengthInput} type="text" id="zipcode" value={zipcode} onChange={(e) => setZipcode(e.target.value)} />
                        </div>            
                    <div className={AddCardModalCSS.emailAddressContainer}>
                        <label className={AddCardModalCSS.emailLabel}>Email address</label>
                        <div className={AddCardModalCSS.emailInputdDescription}>You will recieve card payment and billing notifications. You can manage notifications in your account preferences.</div>
                        <input className={AddCardModalCSS.fullLengthInput} type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className={AddCardModalCSS.fullLengthContainer}>
                        <label className={AddCardModalCSS.formLabel}>Card Alias (optional)</label>
                        <input className={AddCardModalCSS.fullLengthInput} type="text" id="cardAlias" value={cardAlias} onChange={(e) => setcardAlias(e.target.value)}></input>
                    </div>
                </div>
                <div className={AddCardModalCSS.buttonContainer}>
                    <button className={AddCardModalCSS.cancelButton} onClick={onClose}>Cancel</button>
                    <button className={AddCardModalCSS.saveCard} type="submit">Save card</button>
                </div>
            </form>
        </div>
    </div>
}

export default AddCardModal;

