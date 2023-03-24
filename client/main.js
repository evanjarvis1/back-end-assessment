const complimentBtn = document.getElementById("complimentButton")

const fortuneBtn = document.getElementById("fortuneButton")

const fortuneTxt = document.getElementById("fortuneText")

const delTxt = document.getElementById("deleteText")

const submitBtn = document.getElementById("submitButton")

const firstName = document.getElementById("firstNameText")

const lastName = document.getElementById("lastNameText")

const fullNameForm = document.getElementById("nameForm")

const form = document.getElementById("fortuneForm")

const delForm = document.getElementById("deleteButton")

// let formData = {
//     userFortune: `${fortuneTxt.textContent}`
// }

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};


const getFortune = () => {
    axios.get("http://localhost:4000/server/index.js/fortune")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const postFortune = () => {

    let formData = {
        userFortune: `${fortuneTxt.value}`
    }

    axios.post("http://localhost:4000/server/index.js/fortune", formData)
        .then(res => {
            alert(res.data);
    });
};

deleteOption = () => {



    axios.delete(`http://localhost:4000/server/index.js/fortune`)
    .then(res => {
        alert(res.data);
})
}

changeName = () => {

    let nameObj = {
        firstName: `${firstName.value}`,
        lastName: `${lastName.value}`
    }

    console.log(nameObj)

    axios.put('http://localhost:4000/server/index.js/user', nameObj)
        .then(res => {
            alert(res.data)
        })

}


fortuneBtn.addEventListener('click', getFortune)

delForm.addEventListener('click', deleteOption)

fullNameForm.addEventListener('submit', changeName)


complimentBtn.addEventListener('click', getCompliment)

form.addEventListener('submit', postFortune)