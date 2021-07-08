const userId = document.getElementById('userId')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const addBtn = document.getElementById('addBtn')
const number = document.getElementById('number')

const database = firebase.database();
const rootRef = database.ref("stores");


addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    
    rootRef.child(userId.value).set({
        number: number.value
    })
    
    const rootRef_2 = database.ref(`stores/${userId.value}`)
    
    rootRef_2.child("fullname").set({
        first_name: firstName.value,
        last_name: lastName.value,
    })
})