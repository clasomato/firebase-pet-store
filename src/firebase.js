var firebase = require('firebase')

var firebaseObj = {
  firebaseConfig: {
    apiKey: 'AIzaSyACjdbrUWNxvzfbs686EcijhWDCcRuXj7s',
    authDomain: 'learning-firebase-64659.firebaseapp.com',
    databaseURL: 'https://learning-firebase-64659.firebaseio.com',
    projectId: 'learning-firebase-64659',
    storageBucket: 'learning-firebase-64659.appspot.com',
    messagingSenderId: '1048519956227',
    appId: '1:1048519956227:web:dba34d8dfdb21c5c48fb36',
    measurementId: 'G-E21513BRD0'
  },
  getDb: function () {
    const firebaseApp = firebase.initializeApp(firebaseObj.firebaseConfig)
    const db = firebaseApp.firestore()
    return db
  }
}
module.exports = firebaseObj.getDb()
