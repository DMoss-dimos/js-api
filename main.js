// Four ways to make an api resquest

// XMLHttpRequest

const request = new XMLHttpRequest();
request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();
request.onload = () => {
  console.log(request);
  if (request.status === 200) {
    // console.log(request.response); Check results
    // To put into text format
    console.log(JSON.parse(request.response));
  } else {
    // If there is a problem connect will show error and 404 in console
    console.log(`error ${request.status}`);
  }
};

// Fetch Api

// window.fetch() can use too
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    console.log(json);
  });

// second approach
async function getUsers() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();
  return data;
}

getUsers().then((response) => {
  console.log(response);
});

//Axios js library
//Nee to import the library-can use cdn too-cdnjd.com
axios.get("https://jsonplaceholder.typicode.com/users").then(
  (response) => {
    console.log(response.data);
  },
  (err) => {
    console.log(err);
  }
);

//JQuery cdn
$(document).ready(function () {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    type: "GET",
    seccess: function (result) {
      console.log(result);
    },
    error: function (err) {
      console.log(err);
    },
  });
});
