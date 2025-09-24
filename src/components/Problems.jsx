import React from 'react';
import '../styles/problems.css';
import {backToHome, displayProblems, endSession, validateAnswer} from '../functions/Problems';
const Problems = () => {
    return(
        <div className='program-container' id="problems-container">
            <h1 id="individual-problem">
            </h1>
            <div className="input-group input-group-lg mb-3" id="answer-input-div">
                <input type="text" id="answer-input" className="form-control" aria-label="Answer Input" aria-describedby="inputGroup-sizing-lg" autoComplete='off' maxLength='3'/>
            </div>
            <button type="submit" className="btn btn-success btn-lg" id="answer-button" onClick={validateAnswer}>Submit</button>
            <button type="button" className="btn btn-success btn-lg" id="next-button" onClick={displayProblems}>Next</button>
            <button type="button" className="btn btn-danger btn-lg" id="end-button" onClick={endSession}>End Session</button>
            <button type="button" className="btn btn-warning btn-lg" id="home-button" onClick={backToHome}>Back to Home</button>
            <h3 id="answer-input-validator">You must type in a number!</h3>
        </div>
    );

}

export default Problems;