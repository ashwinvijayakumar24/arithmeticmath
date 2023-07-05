import React from 'react';
import { useState } from 'react';
import '../styles/setup.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { problems } from '../functions/Problems';


const Setup = () => {

    const [problemTypes, setProblemTypes] = useState([]);
    const [numberOfQuestions, setNumberOfQuestions] = useState(0);
    const [showTextInput, setShowTextInput] = useState(false);
    const [inputValue, setInputValue] = useState('');

    const revealCustomInput = () => {
        setShowTextInput(!showTextInput);
    };
    
    const hideCustomInput = () => {
        setShowTextInput(false);
    };

    const handleInputChange = (e) => {
        setNumberOfQuestions(e.target.value);
        setInputValue(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const pattern = /^\d+$/;
        if(problemTypes.length === 0 || numberOfQuestions === 0) {
            document.getElementById('custom-input-validator').style.display = "block";
            document.getElementById('custom-input-validator').innerHTML = "Please select at least one option for all of the categories";
            return;
        }
        else if(pattern.test(numberOfQuestions) === false || numberOfQuestions === '') {
            document.getElementById('custom-input-validator').style.display = "block";
            document.getElementById('custom-input-validator').innerHTML = "You must type in a number!";
            return;
        }
        else {
            document.getElementById('custom-input-validator').style.display = "none";
        }
        console.log('Problem Types:', problemTypes);
        console.log('Number of Questions:', numberOfQuestions);
        document.getElementById('setup-container').style.display = 'none';
        document.getElementById('problems-container').style.display = 'flex';
        problems(problemTypes, numberOfQuestions);
    };




    return(
        <div className='program-container' id='setup-container'>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <h5>1. What type(s) of problems do you want to solve?</h5>
                    <div className='options-container checkbox-container'>
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                value="Addition" 
                                checked={problemTypes.includes('Addition')} 
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setProblemTypes((prevState) =>
                                      prevState.includes(value)
                                        ? prevState.filter((item) => item !== value)
                                        : [...prevState, value]
                                    );
                                }}
                            />
                            <label className="form-check-label">
                                Addition (+)    
                            </label>
                        </div>
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                value="Subtraction" 
                                checked={problemTypes.includes('Subtraction')}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setProblemTypes((prevState) =>
                                      prevState.includes(value)
                                        ? prevState.filter((item) => item !== value)
                                        : [...prevState, value]
                                    );
                                }}
                            />
                            <label className="form-check-label">
                                Subtraction (-)
                            </label>
                        </div>
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                value="Multiplication" 
                                checked={problemTypes.includes('Multiplication')}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setProblemTypes((prevState) =>
                                      prevState.includes(value)
                                        ? prevState.filter((item) => item !== value)
                                        : [...prevState, value]
                                    );
                                }}
                            />
                            <label className="form-check-label">
                                Multiplication (x)
                            </label>
                        </div>
                        <div className="form-check">
                            <input 
                                className="form-check-input" 
                                type="checkbox" 
                                value="Division" 
                                checked={problemTypes.includes('Division')}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setProblemTypes((prevState) =>
                                      prevState.includes(value)
                                        ? prevState.filter((item) => item !== value)
                                        : [...prevState, value]
                                    );
                                }}
                            />
                            <label className="form-check-label">
                                Division (÷)
                            </label>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <h5>2. How many questions do you want to practice?</h5>
                    <div className='options-container'>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="question3" value="10" checked={numberOfQuestions === '10'} onChange={(e) => setNumberOfQuestions(e.target.value)} onClick={hideCustomInput}/>
                            <label className="form-check-label">
                                10
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="question3" value="20" checked={numberOfQuestions === '20'} onChange={(e) => setNumberOfQuestions(e.target.value)} onClick={hideCustomInput}/>
                            <label className="form-check-label">
                                20
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="question3" value="25" checked={numberOfQuestions === '25'} onChange={(e) => setNumberOfQuestions(e.target.value)} onClick={hideCustomInput}/>
                            <label className="form-check-label">
                                25
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="question3" value="30" checked={numberOfQuestions === '30'} onChange={(e) => setNumberOfQuestions(e.target.value)} onClick={hideCustomInput}/>
                            <label className="form-check-label">
                                30
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="question3" value="50" checked={numberOfQuestions === '50'} onChange={(e) => setNumberOfQuestions(e.target.value)} onClick={hideCustomInput}/>
                            <label className="form-check-label">
                                50
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="question3" value={inputValue} checked={showTextInput}  onChange={(e) => setNumberOfQuestions(e.target.value)} onClick={revealCustomInput}/>
                            <label className="form-check-label">
                                Custom
                            </label>
                            {showTextInput && 
                                <input className="form-control" 
                                    id="custom-input" type="text" aria-label="Custom Input" 
                                    aria-describedby="inputGroup-sizing-lg" autoComplete='off' maxLength='3' 
                                    value={inputValue} onChange={handleInputChange} autoFocus
                                />
                            }   
                        </div>       
                    </div> 
                </div>
                <div className="start-button-container">
                    <button type="submit" className="btn btn-success btn-lg" id="start-button"> Start</button>
                </div>
            </form>
            <h3 id="custom-input-validator">Please select at least one option for all of the categories</h3>
        </div>
    );
}

export default Setup;