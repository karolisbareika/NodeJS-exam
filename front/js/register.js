


// const registerPost = e => {
//   e.preventDefault();

// const fullName = document.querySelector('input[name="fullName"]').value;
// const email = document.querySelector('input[name="email"]').value;
// const password = document.querySelector('input[name="password1"]').value;
// const repeatPassword = document.querySelector('input[name="password2"]').value;



// fetch('http://localhost:3000/register', {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//     body: JSON.stringify(user),
//   })
 
//   .then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error('Something went wrong');
//   })

//   .catch(error => console.log(error));

// if (password != password2) {
//   return alert("Wrong password");

//   const user = { fullName, email, password, repeatPassword };
// registerUser(user);
// }

// }





document.querySelector('form').addEventListener('submit', registerPost);









document.forms.register.addEventListener("submit", (e) => {
  e.preventDefault();



  console.log(fullName, email, password1, repeatPassword);

  if (password != password2) {
    return alert("Passwords do not match");
  }

  fetch(`${baseURL}/v1/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fullName, email, password }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.msg) {
        alert("Registration succesfull");
        return location.replace("/index.html");
      }

      return alert(data.err || "Unexpected error occured. Please try again");
    })
    .catch((err) => alert(err));
});