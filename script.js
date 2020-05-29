setInterval(displayClock, 500);
function displayClock () {
    var time = new Date();
    var hrs = time.getHours();
    var min = time.getMinutes();
    var morningNight = "Good Morning";
    var dd = "AM";

    // Diatas jam 12
    if (hrs >= 12) {
        hrs = hrs;
        dd = "PM";
        morningNight = "Good Afternoon";
    }

    // Dibawah jam 9
    if (hrs <= 9) {
        dd = "AM";
        morningNight = "Good Morning";
        hrs = ("0" + hrs).slice(-2);
        min = ("0" + min).slice(-2);
    }

    document.getElementById("clock").innerHTML = hrs + ':' + min + " " + dd;
    document.getElementById("time").innerHTML = morningNight;
}