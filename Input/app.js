
const buttonClick = document.getElementById("onclick")
const post = document.getElementById("post")

buttonClick.addEventListener("click", function () {
    const inPutText = document.getElementById("input").value

    postElements(inPutText)
})

function postElements(inPutText) {
    //const inPutText = document.getElementById("input").value
    const postText = document.createElement("p")

    postText.innerText = inPutText
    post.append(postText)
}