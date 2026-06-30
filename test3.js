let messages = [];

const input = document.getElementById("messageInput");
const addBtn = document.getElementById("addBtn");
const clearBtn = document.getElementById("clearBtn");
const count = document.getElementById("count");
const container = document.getElementById("messageContainer");
const status = document.getElementById("status");

// Character Count
input.addEventListener("input", function(){

    count.textContent = "Character Count: " + input.value.length;

});

// Add Message
addBtn.addEventListener("click", function(){

    let message = input.value.trim();

    let promise = new Promise(function(resolve,reject){

        if(message.length >= 3){
            resolve(message);
        }
        else{
            reject("Message must contain at least 3 characters");
        }

    });

    promise.then(function(msg){

        status.textContent = "Message Added Successfully";

        messages.push(msg);

        displayMessages();

        input.value = "";
        count.textContent = "Character Count: 0";

    })

    .catch(function(error){

        status.textContent = error;

    });

});

// Display Messages
function displayMessages(){

    container.innerHTML = "";

    messages.forEach(function(msg,index){

        let p = document.createElement("p");

        p.className = "message";

        p.textContent = msg;

        container.appendChild(p);

        // Remove after 10 seconds
        setTimeout(function(){

            messages.splice(index,1);

            displayMessages();

            status.textContent = "Message Expired";

        },10000);

    });

}

// Clear All Messages
clearBtn.addEventListener("click", function(){

    messages = [];

    container.innerHTML = "";

    status.textContent = "All Messages Cleared";

});