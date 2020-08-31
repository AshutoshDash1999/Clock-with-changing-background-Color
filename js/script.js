var hour, minute, second, year, month, date, day, d;

function clockDate(){
    d = new Date();
    hour = d.getHours();
    minute = d.getMinutes();
    second = d.getSeconds();
    year = d.getFullYear();
    month = d.getMonth();
    date = d.getDate();
    day = d.getDay();

    if (hour <= 9){
        hour = "0" + hour;
    }

    if (minute <= 9){
        minute = "0" + minute;
    }

    if (second <= 9){
        second = "0" + second;
    }

    if (month <= 9){
        month = "0" + month;
    }

    color = "#" + hour + minute + second;
    clock = hour + ":" + minute + ":" + second;
    date = date + " " + month + "," + year + ". " + day;

    document.getElementById("clock").innerHTML = clock;
    document.getElementById("date").innerHTML = date;
    document.body.style.backgroundColor = color;
    setTimeout(clockDate, 10)
}

clockDate(); 