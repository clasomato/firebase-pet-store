<template>
  <div class='nav'>
    <a @click="addPet">Add</a>
    <a @click="removePet" id="removeButton">Remove</a>

    <div id="addPet">
      <div class="navContent">
        <h2>Add Pet</h2>
        <label>Name</label> <br>
        <input type="text" name="" id="name">
        <br>
        <label>Type</label> <br>
        <input type="text" name="" id="type">
        <br>
        <label>Gender</label> <br>
        <input type="text" name="" id="gender">
        <br>
        <label>Age</label> <br>
        <input type="number" name="" id="age">
        <br>
        <button @click='addPetToFirebase'>Add</button> <br>

        <button style="position:absolute; bottom:0; right:0;"  @click="closeAdd">Close Nav</button>
      </div>
    </div>

    <div id="removePet">
      <div class="navContent">
        <ul id="example-1">
          <li v-for="item in items" :key="item.message">
            <div class="pet">
              {{ item.name }}
              {{ item.type }}
              <button @click='removeSinglePet(item)'>Remove</button>
            </div> <br>
          </li>
        </ul>

        <button style="position:absolute; bottom:0; right:0;"  @click="closeRemove">Close Nav</button>
      </div>
    </div>
  </div>
</template>

<!-- <script src="../firebase.js"></script> -->
<script>
import jQuery from 'jquery'
import firebase from '../firebase.js'
var db = firebase

const $ = jQuery
window.$ = $

export default {
  name: 'Nav',
  data () {
    return {
      removeButtonType: false,
      items: false
    }
  },
  props: {
    parentData: Object
  },
  methods: {
    removeSinglePet: function (item) {
      console.log(item)
      var itemToRemove = item.id
      console.log(itemToRemove)
      db.collection('pet-store').doc(itemToRemove).delete().then(function () {
        console.log('Document successfully deleted!')
      }).catch(function (error) {
        console.error('Error removing document: ', error)
      })
    },
    addPet: function () {
      console.log('OpenNav')
      $('#addPet').show(400)
    },
    removePet: function () {
      $('#removePet').show(400)
    },
    closeAdd: function () {
      $('#addPet').hide(200)

      location.reload()
    },
    closeRemove: function () {
      $('#removePet').hide(200)
      location.reload()
    },
    addPetToFirebase: function () {
      console.log('wew')
      var name = document.getElementById('name').value
      var type = document.getElementById('type').value
      var gender = document.getElementById('gender').value
      var age = document.getElementById('age').value

      function getRandomInt (max) {
        return Math.floor(Math.random() * Math.floor(max))
      }

      var id = getRandomInt(1000)
      var docoId = id.toString()

      db.collection('pet-store').doc(docoId).set({
        id: docoId,
        name: name,
        type: type,
        gender: gender,
        age: age
      }).then(function () {
        console.log('Document successfully written!')
      }).catch(function (error) {
        console.error('Error writing document: ', error)
      })
    }
  }, // Methods ENDS
  created () {
    var v = this
    var data = []

    db.collection('pet-store').onSnapshot(function (pets) {
      // pets is the data response or collection - we use a forEach
      // loop to loop through and then list
      pets.forEach(function (doc) {
        // eachDoc is a js object representing each document in the collection
        var eachDoc = doc.data()
        // logging eachDoc to the console
        data.push(eachDoc)
        v.items = data
      })
    })
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='scss'>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.nav {
  width: 100%;
  // background-color: lightgrey;
  // padding: 2%;
  display: flex;
  justify-content: space-between;
}
a {
  // float: right;
  background-color: lightseagreen;
  padding: 2% 10%;
  border-radius: 0.25em;
  font-size: 1.5em;
}

.navContent {
  width: 80%;
  height: 80%;
  background-color: lightgrey;
  position: absolute;
  top: 0;
  left: 0;
}

#addPet {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba($color: #000000, $alpha: .8);
  width: 100%;
  height: 100vh;
}

#removePet {
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba($color: #000000, $alpha: .8);
  width: 100%;
  height: 100vh;
}
</style>
