setInterval(displayClock, 500);
function displayClock () {
    var time = new Date();
    var hrs = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var morningNight = "Good Morning";
    var dd = "AM";

    var kokBelumTidur = document.getElementById("kokbelumtidur");
    kokBelumTidur.style.visibility = "hidden"

    // Dibawah jam 3 subuh
    if (hrs <= 3) {
        hrs = hrs;
        dd = "AM";
        morningNight = "Good Morning";
        kokBelumTidur.style.visibility = "Visible";
        kokBelumTidur.textContent = "Kamu begadang ya beb?"
    }

    // Dibawah jam 9 Pagi
    if (hrs <= 9) {
        dd = "AM";
        morningNight = "Good Morning";
        hrs = ("0" + hrs).slice(-2);
        min = ("0" + min).slice(-2);

    }

    if (hrs >= 6) {
        var blog = document.getElementById("main-content");
        var nama = document.getElementById("najlasyifa");
        dd = "AM";
        hrs = hrs;
        min = min;
        // document.body.style.backgroundColor = 'white';
        // blog.style.backgroundColor = 'white';
        // nama.style.color = '#0e0e0e';
    }

    // Diatas jam 12
    if (hrs >= 12) {
        hrs = hrs;
        dd = "PM";
        morningNight = "Good Afternoon";
    }

    if (hrs >= 18) {
        hrs = hrs;
        dd = "PM";
        morningNight = "Good Night";
    } 
    
    // if (hrs >= 22 && min >= 30 || hrs >= 22 && min >= 0) {
        // hrs = hrs;
        // min = min;
        // dd = "PM";
        // morningNight = "Good Night";
       // kokBelumTidur.style.visibility = "Visible";
    // }

    if (sec < 10) {
        sec = ("0" + sec).slice(-2);
    }

    if (min < 10) {
        min = ("0" + min).slice(-2);
    }

    document.getElementById("clock").innerHTML = hrs + ':' + min + ':' + sec + " " + dd;
    document.getElementById("time").innerHTML = morningNight;
}

function count_down(obj) {
    var element = document.getElementById("chars");
    element.innerHTML = 300 - obj.value.length;
    if (300 - obj.value.length <= 20) {
        element.style.color = 'red';
    } else {
        element.style.color = 'white';
    }
}