const saveBtn = document.getElementById('saveBtn')
const storeId = document.getElementById('storeId')

const database = firebase.database();
const rootRef = database.ref("stores");


saveBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const rootRef_2 = database.ref(`stores/${storeId.value}`)
    
    rootRef_2.child("categorie").set({
        prueba: "Prueba"
    })
})