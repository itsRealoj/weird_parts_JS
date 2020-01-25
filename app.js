let head = document.getElementById("hea");
let btn = document.getElementById("my_btn");

// const changeColor = () => {
//     console.log("You are doing great");
// }

// function changeColor(){
//     console.log("Woow this is awsome")
// }

(changeColor = (a,b) => {

    let person = {
        name: "John Doe",
        age: 17,
        country: "Kenya",
        education: [{kcpe: "A 82", kcse: "A 92",programming: "Second upper"}, "I am happy"]
    }

    let mood = document.getElementById("mood");
    let date = document.getElementById("date");
    let grade = document.getElementById("grade");

    console.log(a + b)

    // for(let i = 0; i<3; i++){
    //     console.log("Having agreat day")
        console.log(person.education[1])
    // }

    person.education.forEach(element => {
        console.log(element)
    });

    mood.innerHTML = person.education[0].kcpe;
    alert(person.education[0].kcpe)
})