const storeId = document.getElementById('storeId')
const storeName = document.getElementById('storeName')
const description = document.getElementById('description')
const logo = document.getElementById('logo')
const correo = document.getElementById('correo')
const latitude = document.getElementById('latitude')
const longitude = document.getElementById('longitude')
const saveBtn = document.getElementById('saveBtn')


const addBtn = document.getElementById('addBtn')

const database = firebase.database();
const rootRef = database.ref("stores");


addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    
    rootRef.child(storeId.value).set({
        storeId: storeId.value,
        storeName: storeName.value,
        description: description.value,
        logo: logo.value,
        correo: correo.value,
        
    })
    
    const rootRef_2 = database.ref(`stores/${storeId.value}`)
    

    rootRef_2.child("coord").set({
        latitude: latitude.value,
        longitude: longitude.value
    })

    /*rootRef_2.child("subcategorie").set({
        prueba: "Prueba"
    })
    */
    window.location.href ="categories.html"
    
})

saveBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const rootRef_2 = database.ref(`stores/${storeId.value}`)
    
    rootRef_2.child("categorie").set({
        prueba: "Prueba"
    })
})

