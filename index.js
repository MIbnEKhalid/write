
const firebaseConfig = {
    apiKey: "AIzaSyA0dQmm3-Ku1vFgumA77S9abQ-WdZvP6C8",
    authDomain: "read-d6f2b.firebaseapp.com",
    projectId: "read-d6f2b",
    storageBucket: "read-d6f2b.appspot.com",
    messagingSenderId: "393601857791",
    appId: "1:393601857791:web:a29aa96421c98a596e34ca"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);


// Set database variable
var database = firebase.database()

function save() {
var email = document.getElementById('email').value
var password = document.getElementById('password').value
var username = document.getElementById('username').value
var say_something = document.getElementById('say_something').value
var favourite_food = document.getElementById('favourite_food').value

database.ref('users/' + username).set({
  email : email,
  password : password,
  username : username,
  say_something : say_something,
  favourite_food : favourite_food
})

alert('Saved')
}

function get() {
var username = document.getElementById('username').value

var user_ref = database.ref('users/' + username)
user_ref.on('value', function(snapshot) {
  var data = snapshot.val()

  alert(data.email)

})

}

function update() {
var username = document.getElementById('username').value
var email = document.getElementById('email').value
var password = document.getElementById('password').value

var updates = {
  email : email,
  password : password
}

database.ref('users/' + username).update(updates)

alert('updated')
}

function remove() {
var username = document.getElementById('username').value

database.ref('users/' + username).remove()

alert('deleted')
}