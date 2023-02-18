var firstName = "Abdul";

var lastName = "Azeem";

var dob = 12;

// let value = "test";

// console.log(value);

// value = "test2";

// console.log(value);

// function name(first, last, age) {
//   alert("My name is " + first + " " + last + " and my age is " + age);
// }

// function checkAzeem(cast) {
//   if (cast === "Khan") {
//     console.log("Abdul Azeem khan");
//   } else {
//     console.log("This is not Abdul Azeem khan");
//   }
// }

// checkAzeem("mian");

// Object
// var student = {
//   name: "Abdul Azeem Khan",
//   age: "17",
//   cast: "Khan",
// };

// Array
// var friends = ["Friend1", "Friend2", "Friend3"];
// friends.push("newFriends");
// friends.pop("Friends");

// console.log(friends);

var menuIcon = document.querySelector(".top-banner .menu-icon");

var navBar = document.querySelector(".navigation");

// freeTrial.addEventListener("click", function () {
//   if (navBar.hidden) {
//     navBar.hidden = false;
//   } else {
//     navBar.hidden = true;
//   }
// });

menuIcon.addEventListener("click", () => {
  navBar.classList.toggle("active");
});
