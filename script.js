function createLi() {
    let input1vl = document.getElementById("input-text-todo").value;
    let btn = document.getElementById("addbtn");
    let div1 = document.createElement("div")
    div1.id = "div1";
    let newLi = document.createElement("li");
    newLi.classList.add("newElLi");
    let listofItems = document.getElementById("listitems");
    newLi.innerHTML = input1vl;
    newLi.id = "newLi";
    var myItemsList = document.getElementsByTagName("LI");
    let closebtn = document.createElement("button");
    closebtn.id = "closebtn";
    closebtn.innerHTML = "X";
    closebtn.classList.add("closebtn");
    div1.appendChild(newLi)
    div1.appendChild(closebtn)
    listofItems.appendChild(div1);

    if (document.getElementById("input-text-todo").value == "") {
        alert("You must write something!");
        newLi.remove()
        closebtn.remove()
        div1.remove()
    } else {

    }
    document.getElementById("input-text-todo").value = "";
    newLi.addEventListener('click', function() {
        newLi.classList.toggle("mystyle")
    });
    closebtn.addEventListener('click', function() {
        div1.remove()
    });
}


function display_d() {
    var refresh = 1000;
    mytime = setTimeout("display_day()", refresh)
}

function display_day() {
    let date = new Date();
    let day = date.getDay();
    switch (day) {
        case 1:
            document.getElementById("day").innerHTML = "Monday";
            break;
        case 2:
            document.getElementById("day").innerHTML = "Tuesday";
            break;
        case 3:
            document.getElementById("day").innerHTML = "Wednesday";
            break;
        case 4:
            document.getElementById("day").innerHTML = "Thursday";
            break;
        case 5:
            document.getElementById("day").innerHTML = "Friday";
            break;
        case 6:
            document.getElementById("day").innerHTML = "Saturday";
            break;
        case 7:
            document.getElementById("day").innerHTML = "Sunday";
            break;
    }
    display_d()
}

function displayDate() {
    var d = new Date();

    var date = d.getDate();
    var month = d.getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12
    var year = d.getFullYear();

    var dateStr = date + "/" + month + "/" + year;
    var dateHTML = document.getElementById("date");
    dateHTML.innerHTML = dateStr;
}

document.getElementById("addbtn").addEventListener("click", createLi);