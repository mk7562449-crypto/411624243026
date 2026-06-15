function checkRoll() {
    let roll = Number(document.getElementById("roll").value);

    let video = document.getElementById("video");
    let btn = document.getElementById("mainbtn");
    let img = document.getElementById("img");

    if (roll % 2 == 0) {
        img.style.borderRadius = "50px";
    } else {
        img.style.borderRadius = "20px";
    }

    let lastDigit = roll % 10;

    if (lastDigit <= 3) {
        video.style.backgroundColor = "blue";
        btn.style.backgroundColor = "blue";
    } else if (lastDigit <= 6) {
        video.style.backgroundColor = "green";
        btn.style.backgroundColor = "green";
    } else {
        video.style.backgroundColor = "purple";
        btn.style.backgroundColor = "purple";
    }
}