var firebaseConfig = {
apiKey: "AIzaSyAxC8AU39-HsD8Avy1zqBSb0sxcE8IXqv4",
authDomain: "tiendas-a18ea.firebaseapp.com",
databaseURL: "https://tiendas-a18ea-default-rtdb.firebaseio.com",
projectId: "tiendas-a18ea",
storageBucket: "tiendas-a18ea.appspot.com",
messagingSenderId: "744577627820",
appId: "1:744577627820:web:356e2a0c4f274bf50f9109",
measurementId: "G-XC4EW57PM6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const storeId = document.getElementById('storeId')
const storeName = document.getElementById('storeName')
const description = document.getElementById('description')
const logo = document.getElementById('logo')
const correo = document.getElementById('correo')
const telefono = document.getElementById('telefono')
//Coords
const latitude = document.getElementById('latitude')
const longitude = document.getElementById('longitude')
//Subcategory
const subCatId = document.getElementById('subCategoryId')
const subCatName = document.getElementById('subCatName')
const icon = document.getElementById('icon')
const iconType = document.getElementById('iconType')
const color = document.getElementById('color')

//const saveBtn = document.getElementById('saveBtn')

const addBtn = document.getElementById('addBtn')

const database = firebase.database();
const rootRef = database.ref("stores");


addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    
    rootRef.child(storeId.value).set({
        id: storeId.value,
        name: storeName.value,
        description: description.value,
        logo: logo.value,
        correo: correo.value,
        telefono: telefono.value,
        isSelected: false,
    })
    
    const rootRef2 = database.ref(`stores/${storeId.value}`)
    
    rootRef2.child("coords").set({
        latitude: Number.parseFloat(latitude.value),
        longitude: Number.parseFloat(longitude.value)
    })

    rootRef2.child("Subcategories").set({
        id: subCatId.value,
        name: subCatName.value,
        icon: icon.value,
        iconType: iconType.value,
        color: color.value,
    })
    /*window.location.href ="categories.html"*/
})

/*saveBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const rootRef_2 = database.ref(`stores/${storeId.value}`)
    
    rootRef_2.child("categorie").set({
        prueba: "Prueba"
    })
})

*/