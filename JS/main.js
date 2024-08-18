// https://dummyjson.com/users

var container = document.getElementById("container")


fetch("https://dummyjson.com/users")
    .then(function(response){
        return response.json();
    })

    .then(function(data) {
        console.log(data);
        data.users.forEach(user => {
            console.log(user.firstName);
            container.innerHTML += `
            <div class="box">
                <img src="${user.image}">
                <h2>${user.firstName}  ${user.lastName}</h2>
                <p>Email: ${user.email}</p>
            </div>
            `
        });
    })



