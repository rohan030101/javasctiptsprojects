console.log("Scirpt Loaded");

const reviews = [
  {
    id: 1,
    name: "Rohan Janrao",
    job: "Desktop Engineer",
    text: "Dedicated Desktop Engineer with a strong background in maintaining and optimizing computer systems for optimal performance. Proficient in troubleshooting hardware and software issues, ensuring seamless functionality for end-users. Committed to delivering efficient IT solutions and providing exceptional technical support.",
  },
  {
    id: 2,
    name: "Ganesh Sale",
    job: "Desktop Engineer",
    text: "Dedicated Desktop Engineer with a strong background in maintaining and optimizing computer systems for optimal performance. Proficient in troubleshooting hardware and software issues, ensuring seamless functionality for end-users. Committed to delivering efficient IT solutions and providing exceptional technical support.",
  },
  {
    id: 3,
    name: "Nikhil Jakate",
    job: "Desktop Engineer",
    text: "Dedicated Desktop Engineer with a strong background in maintaining and optimizing computer systems for optimal performance. Proficient in troubleshooting hardware and software issues, ensuring seamless functionality for end-users. Committed to delivering efficient IT solutions and providing exceptional technical support.",
  },
  {
    id: 4,
    name: "Naresh Sir",
    job: "Desktop Engineer",
    text: "Dedicated Desktop Engineer with a strong background in maintaining and optimizing computer systems for optimal performance. Proficient in troubleshooting hardware and software issues, ensuring seamless functionality for end-users. Committed to delivering efficient IT solutions and providing exceptional technical support.",
  },
];

// console.log(reviews);

var leftbtn = document.getElementById("left-btn");
var rightbtn = document.getElementById("right-btn");
var randombtn = document.getElementById("random-btn");

let currentitem = 0;

rightbtn.addEventListener("click", function () {
  currentitem++;
  if(currentitem > reviews.length -1){
   currentitem = 0;
  }
  var person = reviews[currentitem];
  console.log(person.name); 
  console.log("right button clicked ");
});