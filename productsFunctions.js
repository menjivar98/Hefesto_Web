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

const database = firebase.database();
const rootRef = database.ref("products");

const id = document.getElementById('productId');
const marca = document.getElementById('marca');
const modelo = document.getElementById('modelo');
const sistema_operativo = document.getElementById('sistema_operativo');
const memoria = document.getElementById('memoria');
const price = document.getElementById('price');
const caracteristicas = document.getElementById('caracteristicas');
const subCategory = document.getElementById('subCategory');
const image = document.getElementById('image');
const storeId = document.getElementById('storeId');

const addBtn = document.getElementById('addBtn');


addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    
    rootRef.child(id.value).set({
        id: id.value,
        marca: marca.value,
        modelo: modelo.value,
        sistema_operativo: sistema_operativo.value,
        memoria: memoria.value,
        price: price.value,
        caracteristicas: caracteristicas.value,
        subCategory: subCategory.value,
        image: image.value,
    })
    
    const storesCollection = database.ref(`products/${id.value}`)

    let storesAux = {};
    storesAux[storeId.value] = storeId.value;
    storesCollection.child("Stores").set(storesAux);

    document.getElementById("productsForm").reset();
})

/*
const userId = document.getElementById('userId')
const firstName = document.getElementById('firstName')
const lastName = document.getElementById('lastName')
const addBtn = document.getElementById('addBtn')
const number = document.getElementById('number')

const database = firebase.database();
const rootRef = database.ref("products");


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

*/

