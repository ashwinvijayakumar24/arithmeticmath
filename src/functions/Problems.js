import correctSound from '../music/correctsound.wav';
import incorrectSound from '../music/incorrectsound.wav';

let combinedRandomArray = []; 
let answersArray = [];
let questionCount = 0;
let randomIndex = (Math.floor(Math.random() * combinedRandomArray.length));
let correctCount = 0;
let totalCount = 0;
const correctAudio = new Audio(correctSound);
const incorrectAudio = new Audio(incorrectSound);

export function problems(types, problems) {

    let additionProblems = Math.floor(problems / types.length);
    let subtractionProblems = Math.floor(problems / types.length);
    let multiplicationProblems = Math.floor(problems / types.length);
    let divisionProblems = Math.floor(problems / types.length);

    for(let i = 0; i < problems % types.length; i++) {
        if(types[i] === "Addition") {
            additionProblems += 1;
        }
        if(types[i] === "Subtraction") {
            subtractionProblems += 1;
        }
        if(types[i] === "Multiplication") {
            multiplicationProblems += 1;
        }
        if(types[i] === "Division") {
            divisionProblems += 1;
        }
    }

    for(let i = 0; i< types.length; i++) {
        if(types[i] === "Addition") {
            let numOneAddition = Math.floor(Math.random() * 21);
            let numTwoAddition = Math.floor(Math.random() * 21);
            for(let i = 0; i < additionProblems; i++) {
                combinedRandomArray.push(`What is ${numOneAddition} + ${numTwoAddition} ?`);
                answersArray.push(numOneAddition + numTwoAddition);
                numOneAddition = Math.floor(Math.random() * 21);
                numTwoAddition = Math.floor(Math.random() * 21);
            }
            
        }
        if(types[i] === "Subtraction") {
            let numOneSubtraction = Math.floor(Math.random() * 11) + 10;
            let numTwoSubtraction = Math.floor(Math.random() * 11);
            for(let i = 0; i < subtractionProblems; i++) {
                combinedRandomArray.push(`What is ${numOneSubtraction} - ${numTwoSubtraction} ?`);
                answersArray.push(numOneSubtraction - numTwoSubtraction);
                numOneSubtraction = Math.floor(Math.random() * 11) + 10;
                numTwoSubtraction = Math.floor(Math.random() * 11);
            }
        }
        if(types[i] === "Multiplication") {
            let numOneMultiplication = Math.floor(Math.random() * 13);
            let numTwoMultiplication = Math.floor(Math.random() * 13);
            for(let i = 0; i < multiplicationProblems; i++) {
                combinedRandomArray.push(`What is ${numOneMultiplication} x ${numTwoMultiplication} ?`);
                answersArray.push(numOneMultiplication * numTwoMultiplication);
                numOneMultiplication = Math.floor(Math.random() * 13);
                numTwoMultiplication = Math.floor(Math.random() * 13);
            }
        }
        if(types[i] === "Division") {
            let numOneDivision;
            let numTwoDivision;
            do {
                numOneDivision = Math.floor(Math.random() * 144) + 1;
                numTwoDivision = Math.floor(Math.random() * 12) + 1;
            } while (!(numOneDivision % numTwoDivision === 0 || numTwoDivision % numOneDivision === 0)  || Math.floor(numOneDivision / numTwoDivision) > 9 || Math.floor(numTwoDivision / numOneDivision) > 9 );
            
            for(let i = 0; i < divisionProblems; i++) {
                if(numOneDivision >= numTwoDivision) {
                    combinedRandomArray.push(`What is ${numOneDivision} ÷ ${numTwoDivision} ?`);
                    answersArray.push(numOneDivision / numTwoDivision);
                }
                else {
                    combinedRandomArray.push(`What is ${numTwoDivision} ÷ ${numOneDivision} ?`);
                    answersArray.push(numTwoDivision / numOneDivision);
                }
                do {
                    numOneDivision = Math.floor(Math.random() * 144) + 1;
                    numTwoDivision = Math.floor(Math.random() * 12) + 1;
                } while (!(numOneDivision % numTwoDivision === 0 || numTwoDivision % numOneDivision === 0)  || Math.floor(numOneDivision / numTwoDivision) > 9 || Math.floor(numTwoDivision / numOneDivision) > 9);
            }
        }
    }
    displayProblems();
}

 export function displayProblems() {
    if(combinedRandomArray[randomIndex] !== undefined) {
        document.getElementById('answer-button').style.display = 'block';
        document.getElementById('answer-input').style.display = 'block';
        document.getElementById('answer-input').value = '';
        document.getElementById('answer-input').focus();
        document.getElementById('next-button').style.display = 'none';
        document.getElementById('individual-problem').innerHTML = `${questionCount + 1}. ${combinedRandomArray[randomIndex]}`;
        questionCount++;
    }
    else {
        endSession();
    }
    
}

export function validateAnswer() {
    let value = document.getElementById("answer-input").value;
    const pattern = /^\d+$/;
    if(pattern.test(value) === false) {
        document.getElementById('answer-input-validator').style.display = "block";
        return;
    }
    else {
        document.getElementById('answer-input-validator').style.display = "none";
    }
    if(combinedRandomArray[randomIndex] !== undefined) {
        document.getElementById('answer-button').style.display = 'none';
        document.getElementById('next-button').style.display = 'block';
        document.getElementById('answer-input').style.display = 'none';
        if(parseInt(value) === answersArray[randomIndex]) {
            correctAudio.play();
            correctCount += 1;
            totalCount += 1;
            document.getElementById('individual-problem').innerHTML = "Correct!";
            combinedRandomArray.splice(randomIndex, 1);
            answersArray.splice(randomIndex, 1);
            randomIndex = (Math.floor(Math.random() * combinedRandomArray.length));
        }
        else {
            incorrectAudio.play();
            totalCount += 1;
            document.getElementById('individual-problem').innerHTML = `Sorry, the correct answer was ${answersArray[randomIndex]}`;
            combinedRandomArray.splice(randomIndex, 1);
            answersArray.splice(randomIndex, 1);
            randomIndex = (Math.floor(Math.random() * combinedRandomArray.length));
        }
    }
}



export function endSession() {
    document.getElementById('individual-problem').innerHTML = `You have gotten ${correctCount} out of ${totalCount} questions correct!`;
    document.getElementById('answer-button').style.display = 'none';
    document.getElementById('next-button').style.display = 'none';
    document.getElementById('end-button').style.display = 'none';
    document.getElementById('answer-input').style.display = 'none';
    document.getElementById('answer-input-validator').style.display = 'none';
    document.getElementById('home-button').style.display = 'block';
}

export function backToHome() {
    window.location.reload();
}