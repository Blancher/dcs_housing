import {useState, useEffect} from 'react';
import useInput from './useInput';

export default function Donate() {
    const [firstInput, setFirstInput, firstValid, firstInputClasses, handleFirstChange, handleFirstBlur, handleFirstSubmit, firstInvalid] = useInput((value) => value !== '' );
    const [lastInput, setLastInput, lastValid, lastInputClasses, handleLastChange, handleLastBlur, handleLastSubmit, lastInvalid] = useInput((value) => value !== '' );
    const [moneyInput, setMoneyInput, moneyValid, moneyInputClasses, handleMoneyChange, handleMoneyBlur, handleMoneySubmit, moneyInvalid] = useInput((value) => /^\d+(\.\d{1,2})?$/.test(value) && parseFloat(value) > 0 );
    const [phoneInput, setPhoneInput, phoneValid, phoneInputClasses, handlePhoneChange, handlePhoneBlur, handlePhoneSubmit, phoneInvalid] = useInput((value) => /^\d{10}$/.test(value) );
    const [creditInput, setCreditInput, creditValid, creditInputClasses, handleCreditChange, handleCreditBlur, handleCreditSubmit, creditInvalid] = useInput((value) => {
        value = value.replace(/ /g, '');
        return /^4[0-9]{12}(?:[0-9]{3})?$/.test(value) || /^5[1-5][0-9]{14}$/.test(value) || /^3[47][0-9]{13}$/.test(value) || /^6(?:011|5[0-9]{2})[0-9]{12}$/.test(value);;
    });
    const formValid = firstValid && lastValid && moneyValid && phoneValid && creditValid;
    const [message, setMessage] = useState(null);
    useEffect(() => {
        if (message !== null) {
            setTimeout(() => setMessage(null), 1500);
        }
    }, [message]);
    const handleSubmit = async(e) => {
        e.preventDefault();
        handleFirstSubmit();
        handleLastSubmit();
        handleMoneySubmit();
        handlePhoneSubmit();
        handleCreditSubmit();
        if (formValid) {
            try {
                const response = await fetch('https://react-http-627af-default-rtdb.firebaseio.com/donation.json', {
                    method: 'POST',
                    body: JSON.stringify({name: `${firstInput} ${lastInput}`, amount: moneyInput, phone: phoneInput, creditCard: creditInput}),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) {
                    throw new Error('Donation failed');
                }
                setMessage('Donation succeeded');
            } catch(err) {
                setMessage(err.message);
            }
            setFirstInput('');
            setLastInput('');
            setMoneyInput('');
            setPhoneInput('');
            setCreditInput('');
        };
    };
    return (
        <div>
            <img src="https://media.istockphoto.com/id/813128966/photo/hand-putting-coins-in-glass-jar-for-giving-and-donation-concept.jpg?s=612x612&w=0&k=20&c=n6JuwHg5qL5usrI45PCsvjXjX743Mk0Ov4pW2GtO8CA=" alt="" className="back-img"/>
            <div style={{background: 'linear-gradient(rgb(110,4,4),rgb(2, 3, 48))'}} className='content'>
                <form onSubmit={handleSubmit}>
                    <div className={`input ${firstInputClasses}`}>
                        <label htmlFor='fName'>First Name:</label><br/>
                        <input type='text' id='fName' placeholder={!firstInvalid ? '' : "Input can't be empty"} value={firstInput} onChange={handleFirstChange} onBlur={handleFirstBlur} />
                    </div>
                    <div className={`input ${lastInputClasses}`}>
                        <label htmlFor='lName'>Last Name:</label><br/>
                        <input type='text' id='lName' placeholder={!lastInvalid ? '' : "Input can't be empty"} value={lastInput} onChange={handleLastChange} onBlur={handleLastBlur} />
                    </div>
                    <div className={`input ${moneyInputClasses}`}>
                        <label htmlFor='amount'>Donation Amount:</label><br/>
                        <input type='text' id='amount' placeholder={!moneyInvalid ? '' : "Donated amount must be more than $0"} value={moneyInput} onChange={handleMoneyChange} onBlur={handleMoneyBlur} />
                    </div>
                    <div className={`input ${phoneInputClasses}`}>
                        <label htmlFor='phone'>Phone Number:</label><br/>
                        <input type='text' id='phone' placeholder={!phoneInvalid ? '' : "Phone number must be 10 digits"} value={phoneInput} onChange={handlePhoneChange} onBlur={handlePhoneBlur} />
                    </div>
                    <div className={`input ${creditInputClasses}`} id='creditcard'>
                        <label htmlFor='card'>Credit Card Number:</label><br/>
                        <input type='text' id='card' placeholder={!creditInvalid ? '' : "Credit card must be valid"} value={creditInput} onChange={handleCreditChange} onBlur={handleCreditBlur} />
                    </div>
                    <button>Submit Donation</button>
                    <h1 id='message' style={{display: message === null ? 'none' : 'block'}}>{message}</h1>
                </form>
            </div>
        </div>
    );
}