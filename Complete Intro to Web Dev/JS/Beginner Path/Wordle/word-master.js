const letters = document.querySelectorAll(".scoreboard-letter");
const loadingDiv = document.querySelector(".info-bar");
const ANSWER_LENGTH = 5;
const ROUNDS = 6;

async function init(){
    let currentGuess = "";
    let currentRow = 0;
    let isLoading = true;

    const res = await fetch('https://words.dev-apis.com/word-of-the-day');
    const resObj = await res.json()
    const word = resObj.word.toUpperCase();
    // const word = "HELLO";
    const wordParts = word.split("");
    let done = false;
    setLoading(false);
    isLoading = false;

    //add letter
    function addLetter(letter){
        if(currentGuess.length < ANSWER_LENGTH){
            // add letter to the end
            currentGuess += letter;
        }else{
            // replace the last letter
            currentGuess = currentGuess.substring(0, currentGuess.length-1) + letter;
        }

        letters[ANSWER_LENGTH*currentRow + currentGuess.length-1].innerText = letter;
    }

    //commit - when enter key is pressed
    async function commit(){
        if(currentGuess.length !== ANSWER_LENGTH){
            //do nothing
            return;
        }

        // validate the word
        isLoading = true;
        setLoading(true);
        
        const res = await fetch("https://words.dev-apis.com/validate-word",{
            method: "POST",
            body: JSON.stringify({word:currentGuess})
        })
        const resObj = await res.json();
        const validWord = resObj.validWord;
        // const {validWord} = resObj; => this is same as above, here we are doing destructuring

        isLoading = false;
        setLoading(false);

        if(!validWord){
            markInvalidWord();
            return;
        }


        // do all the marking as "correct" "close" or "wrong"

        const guessParts = currentGuess.split("");
        const map = makeMap(wordParts);
        // console.log(map);
        
        for(let i=0;i<ANSWER_LENGTH; i++){
            //mark as correct
            if(guessParts[i] === wordParts[i]){
                letters[currentRow*ANSWER_LENGTH+i].classList.add("correct");
                map[guessParts[i]]--;
            }
            //mark as close
            else if(wordParts.includes(guessParts[i]) && map[guessParts[i]]>0){
                letters[currentRow*ANSWER_LENGTH+i].classList.add("close");
                map[guessParts[i]]--;
                
            }
            //mark as incorrect
            else{
                letters[currentRow*ANSWER_LENGTH+i].classList.add("wrong");
            }
        }

        currentRow++;
        
        if(currentGuess === word){
            //win alert
            alert("congratulations!! You won!");
            document.querySelector('.brand').classList.add('winner');
            done = true;
            return;
        }
        else if(currentRow === ROUNDS){
            alert(`You lose, the word was ${word}`);
            done = true;
        }
        currentGuess = "";
    }

    //BackSpace - when backspace 
    function backspace(){
        currentGuess = currentGuess.substring(0,currentGuess.length-1);

        letters[ANSWER_LENGTH*currentRow + currentGuess.length].innerText = "";
    }

    function markInvalidWord(){
        // alert("not a valid word");
        for(let i =0;i<ANSWER_LENGTH; i++){
            letters[currentRow*ANSWER_LENGTH+i].classList.remove("invalid");
            
            setTimeout(()=>{
                letters[currentRow*ANSWER_LENGTH+i].classList.add("invalid");
            },100);
        }
    }


    document.addEventListener("keydown",function handleKeyPress(event){
        if(done || isLoading){
            //do nothing;
            return;
        }

        const action = event.key;
        // console.log(action);

        if(action === 'Enter'){
            commit();
        }else if(action === "Backspace"){
            backspace();
        }else if(isLetter(action)){
            addLetter(action.toUpperCase());
        }else{
            //do nothing
        }

    })
}

function isLetter(letter){
    return /^[a-zA-Z]$/.test(letter);
}

function setLoading(isLoading){
    loadingDiv.classList.toggle('hidden', !isLoading);
}

//to keep track of the total occurence of each letter in the string
function makeMap (array){
    const obj = {};
    for(let i =0; i<array.length; i++){
        const letter = array[i];
        if(obj[letter]){
            obj[letter]++
        }else{
            obj[letter] = 1;
        }
    }

    return obj;
}

init();