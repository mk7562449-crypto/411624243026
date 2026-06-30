const button = document.getElementById("btn");

button.addEventListener("click", function () {

    document.getElementById("status").innerText = "Loading...";

    setTimeout(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => {

                let output = "";

                data.forEach(user => {

                    output += `
                        <div class="user">
                            <h3>${user.name}</h3>
                            <p>Email: ${user.email}</p>
                            <p>Phone: ${user.phone}</p>
                        </div>
                    `;

                });

                document.getElementById("users").innerHTML = output;

                document.getElementById("status").innerText =
                "Loaded successfully";

            })
            .catch(error => {

                document.getElementById("status").innerText =
                "Error loading data";

                console.log(error);

            });

    }, 2000);

});