
//3999

const buttonClick = document.getElementById("onclick")
const post = document.getElementById("post")

// const I = 1
// const IV = 4
// const V = 5
// const IX = 9
// const X = 10
// const XL = 40
// const L = 50
// const C = 100
// const CD = 400
// const D = 500

const num = { I: 1, IV: 4, V: 5, IX: 9, X: 10, XL: 40, L: 50, C: 100, CD: 400, D: 500 }
const numTwo = { I: "I", IV: "IV", V: "V", IX: "IX", X: "X", XL: "XL", L: "L", C: "C", CD: "CD", D: "D" }

//console.log(num.IV)

buttonClick.addEventListener("click", function () {
    const inPutText = document.getElementById("input").value
    console.log(typeof (inPutText))
    checkRoman(inPutText)
})

function checkRoman(inPutText) {
    //const inPutText = document.getElementById("input").value
    //const postText = document.createElement("p")
    // postText.innerText = inPutText
    // post.append(postText)
    // if (inPutText.toUpperCase() === "X") {
    //     console.log("10")
    // }
    //romanLength = inPutText.length
    let romanNumber = []
    for (let i = 0; i < inPutText.length; i++) {
        romanNumber[i] = inPutText.toUpperCase().charAt(i);
    }
    postRoman(countNumbers(romanNumber))
    //hello()
}

function countNumbers(romanNumber) {

    let arabic = 0
    for (let i = 0; i < romanNumber.length; i++) {
        if ((romanNumber[i] + romanNumber[i + 1]) === numTwo[(romanNumber[i] + romanNumber[i + 1])]) {
            arabic = arabic + num[(romanNumber[i] + romanNumber[i + 1])]
            i++
            // } else if (romanNumber[i] + romanNumber[i + 1] === "IX") {
            //     arabic = arabic + IX
            //     i++
            // } else if (romanNumber[i] + romanNumber[i + 1] === "XL") {
            //     arabic = arabic + XL
            //     i++
            // } else if (romanNumber[i] + romanNumber[i + 1] === "CD") {
            //     arabic = arabic + CD
            //     i++
        } else if (romanNumber[i] === numTwo[romanNumber[i]]) {
            arabic = arabic + num[romanNumber[i]]
            // } else if (romanNumber[i] === "V") {
            //     arabic = arabic + num[romanNumber[i]]
            // } else if (romanNumber[i] === "X") {
            //     arabic = arabic + num[romanNumber[i]]
            // } else if (romanNumber[i] === "L") {
            //     arabic = arabic + num[romanNumber[i]]
            // } else if (romanNumber[i] === "C") {
            //     arabic = arabic + num[romanNumber[i]]
            // } else if (romanNumber[i] === "D") {
            //     arabic = arabic + num[romanNumber[i]]
        } else alert("Not Valid")
    }
    return arabic
}

function postRoman(item) {

    const postText = document.createElement("p")

    postText.innerText = item
    post.prepend(postText)
}

// function hello() {
//     let scope = {
//         a: "hello world",
//         b: "welcom here"
//     };
//     let varName = "b";
//     console.log(scope[varName]); 
// }
