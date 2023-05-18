//document.getElementById("count-el").innerText=5
// let countEl = document.getElementById("count-el")
// console.log(countEl)
// countEl.innerText = count

// intialize the count as 0
// listen for clicks on the increment button
let count = document.getElementById("count-el").innerText
// increment the count variable when the button is clicked
function increment(){
    count++
    console.log("The Button Was Clicked",count)
    document.getElementById("count-el").innerText=count

}
// change the count-el in the HTML


function save(){
    document.getElementById("entries").textContent+=count +" - " 
    console.log()
    count=0;
    document.getElementById("count-el").innerText=0
}









