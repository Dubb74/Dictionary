let lookUp; // this variable hold the " lookUp file" from the setData function below.


let input; // this variable holds the "input value" from the input element


function setData(data) {// the setData function then assignes the global variable "lookUp" to the data passed in 
    info = data.lookUP //then assingines it to new variable "info" 



}



function handleSearch(e) {
  
    e.preventDefault() // when you click the submit button we prevent the default action "submit" which would refresh the page

    if (!info.hasOwnProperty(input)) {  //this IF statement checks to see if "info" does not have its own property
        let result = document.getElementById('result') //document.getElementById('result') is set to this variable "result"
        result.innerHTML = "nonAvailable try a different word" // if result is not a word or is not Available result will be this  message 
        result.className = "over" //  this uses my classname from my css to display the err message

    } else { // if info does have its own property this code block will run

        document.getElementById('result')//
            .innerHTML = info[input]//
        result.className = "over" //this uses my className from my css to display the result in that style
    }

}

function handleInput(e) {
    if (input) {



        if (input.length >= e.target.value.length) {//this IF statement checks to see if input grater then or equal to target value length if so display input

            let result = document.getElementById("result")//document.getElementById is reassigned to result
            result.className = "disappear"//if the IF statement is false class name disappear will display none


        }

    }

    input = e.target.value//if the IF statement is ture then the input will display the event target value
}

fetch('./EnglishDictionary.json')// this fetches the data from './EnglishDictionary.json'

    .then((res) => res.json())// then we parse the data to json ex: {}
    .then(file => {  // once data is parsed we then wait 500ms and call setData function passing data to the setData function

        setTimeout(() => {
            setData(file)
        }, 500);
    })