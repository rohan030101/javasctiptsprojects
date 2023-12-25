console.log("Scirpt Loaded");

const reviews = [
  {
    id: 1,
    name: "Rohan Janrao",
    job: "Web Developer",
    text: " Passionate web developer dedicated to creating seamless, user-centric experiences through innovative and efficient coding.",
    profile:
      "https://media.licdn.com/dms/image/C4D03AQH6vrrdb8SCyw/profile-displayphoto-shrink_200_200/0/1658660051102?e=2147483647&v=beta&t=vaeRr0lgTXcBmwEXjTrPSPJA5CT_inwzHaaYiI3jIhU",
  },
  {
    id: 2,
    name: "Ganesh Sale",
    job: "Desktop Engineer",
    text: "Results-driven desktop engineer specializing in maintaining and optimizing computer systems to ensure optimal performance and user satisfaction.",
    profile:
      "https://media.istockphoto.com/id/1497142422/photo/close-up-photo-portrait-of-young-successful-entrepreneur-businessman-investor-wearing-glasses.jpg?s=612x612&w=is&k=20&c=ggQXarDv5XjNDCqAGqT0bseXZdCOpetoRUSLBjp3kt4=",
  },
  {
    id: 3,
    name: "Nikhil Jakate",
    job: "Automobile Engineer",
    text: "Versatile automobile engineer skilled in designing and optimizing automotive systems for performance, efficiency, and safety.",
    profile:
      "https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=1024x1024&w=is&k=20&c=y4FFqpMLolCvEqoxlr4oypQqhAL1ta0ojXUnOofQXHk=",
  },
  {
    id: 4,
    name: "Naresh Sir",
    job: "AccessControl Engineer",
    text: "Dedicated access control engineer adept at implementing and managing sophisticated security systems for seamless control and protection.",
    profile:
      "https://media.istockphoto.com/id/1406197730/photo/portrait-of-a-young-handsome-indian-man.jpg?s=1024x1024&w=is&k=20&c=VruKKTu4jBF2xPEEQUMWwd4bwJPysSsqLuZ7h1OyD8M=",
  },
  {
    id: 5,
    name: "Rocky Roridges",
    job: "Printer    Engineer",
    text: "Experienced printer engineer proficient in troubleshooting, maintaining, and optimizing printing systems to deliver reliable and efficient solutions.",
    profile:
      "https://www.istockphoto.com/photo/portrait-of-mid-20s-african-american-man-outdoors-at-dusk-gm1365997131-436669508?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Fprofile&utm_medium=affiliate&utm_source=unsplash&utm_term=profile%3A%3A%3A",
  },
];

// console.log(reviews);
//element ids
var leftbtn = document.getElementById("left-btn");
var rightbtn = document.getElementById("right-btn");
var randombtn = document.getElementById("random-btn");

//
var img = document.getElementById("profile-img");
var nm = document.getElementById("name");
var jbt = document.getElementById("jobtitle");
var info = document.getElementById("text");

let currentitem = 0;

window.addEventListener("DOMContentLoaded", showData(currentitem));
function showData(candidate) {
  const items = reviews[candidate];
  img.src = items.profile;
  nm.textContent = items.name;
  jbt.textContent = items.job;
  info.textContent = items.text;
}

rightbtn.addEventListener("click", function () {
  currentitem++;
  if (currentitem > reviews.length - 1) {
    currentitem = 0;
  }
  showData(currentitem);
});

leftbtn.addEventListener("click", function () {
  currentitem--;
  if (currentitem < 0) {
    currentitem = reviews.length-1;
  }
  showData(currentitem);
});

randombtn.addEventListener('click',function(){
currentitem = Math.floor(Math.random()*(reviews.length-1 + 0)+0);
console.log(currentitem);
showData(currentitem);
});