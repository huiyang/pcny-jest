const firebase = require('firebase/app');
const lite = require('firebase/firestore/lite');
const initializeApp = firebase.initializeApp;
const getFirestore = lite.getFirestore, collection = lite.collection, getDocs = lite.getDocs;

const firebaseConfig = {
  // apiKey: "API_KEY",
  authDomain: "ant-web-studio.firebaseapp.com",
  databaseURL: "https://ant-web-studio.firebaseio.com",
  projectId: "ant-web-studio",
  // storageBucket: "PROJECT_ID.appspot.com",
  // messagingSenderId: "SENDER_ID",
  // appId: "APP_ID",
  // measurementId: "G-MEASUREMENT_ID",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getProducts() {
  const productsCol = collection(db, 'Product');
  const productSnapshot = await getDocs(productsCol);
  const products = productSnapshot.docs.map(doc => doc.data());
  return products;
}

// async function getCities(db) {
//   const citiesCol = collection(db, 'cities');
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map(doc => doc.data());
//   return cityList;
// }

describe('Firebase', () => {
    it('test product name', async () => {
      let product = await getProducts();
      console.log(product);
      expect(product[0].name).toBe('test product name');
    });
});