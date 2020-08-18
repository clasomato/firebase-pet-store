<template>
  <div class='hello'>
    <Nav />
    <h1>Current Pets</h1>

    <div class="petArea">
      <ul id="example-1">
        <li v-for="item in items" :key="item.message">
          <div class="pet">
            {{ item.name }}
            {{ item.type }}
            {{ item.age }}
            {{ item.gender }}
            <p class="markers">Del</p>
          </div> <br>
        </li>
      </ul>
    </div>
  </div>
</template>

<!-- <script src="../firebase.js"></script> -->
<script>
import Nav from '@/components/Nav.vue'
import firebase from '../firebase.js'
var db = firebase

console.log(firebase)

export default {
  name: 'HelloWorld',
  components: {
    Nav
  },
  methods: {
    deleteItem: function () {

    }
  }, // Methods ENDS
  data () {
    return {
      items: false,
      fbdb: false
    }
  }, // Data ENDS
  created () {
    var v = this
    var data = []
    // v.fbdb = db
    // console.log(v.fbdb)

    db.collection('pet-store').onSnapshot(function (pets) {
      // pets is the data response or collection - we use a forEach
      // loop to loop through and then list
      pets.forEach(function (doc) {
        // eachDoc is a js object representing each document in the collection
        var eachDoc = doc.data()
        // logging eachDoc to the console
        console.log(eachDoc)
        data.push(eachDoc)
        v.items = data
        console.log(v.items)
      })
    })
  } // created ENDS
}

// Testing
console.log(db)

// function getCreatures () {
//
// }
//
// getCreatures()
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped lang='scss'>
* {
  box-sizing: border-box;
}

h3 {
  margin: 40px 0 0;
  color: blue;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.markers {
  display: none;
}

.pet {
  width: 100%;
  padding: 5%;
}

.hello {
  margin: 0;
  padding: 0;
}

body {
  margin: 0;
  padding: 0;
}
</style>
