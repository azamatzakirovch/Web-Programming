const root = document.getElementById("root");

const door_to_come_inside = document.createElement("div");
door_to_come_inside.className = "door_to_come_inside";

const logo_of_company = document.createElement("img");
logo_of_company.className = "logo-of-company";
logo_of_company.alt = "logo of company";
logo_of_company.src = "../photos/logo.jpg";

const name = document.createElement("input");
name.placeholder = "Name";
name.className = "username";
name.setAttribute("type", "text");
name.style.paddingLeft = "10px";


const surname = document.createElement("input");
surname.className = "password";
surname.placeholder = "Surname";
surname.setAttribute("type", "password");
surname.style.paddingLeft = "10px";

const next_button_of_login_password  = document.createElement("div");
next_button_of_login_password.className = "next_button_of_login_password";

const next_button_of_login_password1  = document.createElement("div");
next_button_of_login_password1.className = "next_button_of_login_password";
next_button_of_login_password1.style.display = 'none'



const text_of_next_button_of_login_password = document.createElement("div");
text_of_next_button_of_login_password.textContent = "next";
text_of_next_button_of_login_password.style.display = "block";
text_of_next_button_of_login_password.style.fontSize = "20px";
text_of_next_button_of_login_password.style.lineHeight = "14px";
text_of_next_button_of_login_password.style.textAlign = "center";
text_of_next_button_of_login_password.style.font = "Arial";
text_of_next_button_of_login_password.style.top = "50%";
text_of_next_button_of_login_password.style.transform = "translateY(50%)";
text_of_next_button_of_login_password.style.color = "black";
next_button_of_login_password.appendChild(text_of_next_button_of_login_password);
// next_button_of_login_password1.appendChild(text_of_next_button_of_login_password);

const select_the_year = document.createElement("select");
select_the_year.className = "select_the_year";
select_the_year.style.display = "none";

const select_the_month = document.createElement("select");
select_the_month.className = "select_the_month";
select_the_month.style.display = "none";


const select_the_day = document.createElement("select");
select_the_day.className = "select_the_day";
select_the_day.style.display = "none";


const select_the_region = document.createElement("select");
select_the_region.className = "select_the_region";
select_the_region.style.display = "none";



document.body.appendChild(select_the_year);
document.body.appendChild(select_the_month);
document.body.appendChild(select_the_day);
door_to_come_inside.appendChild(select_the_region);



function selection(element, array) {
    element.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        let option = document.createElement("option");
        option.value = array[i];
        option.textContent = array[i];
        element.appendChild(option);
    }
}

select_the_year.addEventListener("click", function() {
    let year = [];
    const currentYear = new Date().getFullYear();
    for (let i = 1900; i <= currentYear; i++) {
        year.push(i);
    }
    selection(select_the_year, year);
});

select_the_month.addEventListener("click", function() {
    let month = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    selection(select_the_month, month);
});

select_the_region.addEventListener("click", function() {
    let month = [
        "Andijan Region",
        "Bukhara Region",
        "Fergana Region",
        "Jizzakh Region",
        "Khorezm Region",
        "Namangan Region",
        "Navoiy Region",
        "Qashqadaryo Region",
        "Samarkand Region",
        "Sirdaryo Region",
        "Surxondaryo Region",
        "Tashkent Region",
        "Tashkent City",
        "Republic of Karakalpakstan"
    ];
    selection(select_the_region, month);
});




select_the_day.addEventListener("click", function() {
    let month = select_the_month.value;
    let year = parseInt(select_the_year.value);
    let days = getDays(month, year);
    selection(select_the_day, days);
});

function determine_leap(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function getDays(month, year) {
    let days = [];
    if (month === 'February') {
        if (determine_leap(year)) {
            for (let i = 1; i <= 29; i++) {
                days.push(i);
            }
        } else {
            for (let i = 1; i <= 28; i++) {
                days.push(i);
            }
        }
    } else if (['April', 'June', 'September', 'November'].includes(month)) {
        for (let i = 1; i <= 30; i++) {
            days.push(i);
        }
    } else {
        for (let i = 1; i <= 31; i++) {
            days.push(i);
        }
    }
    return days;
}


next_button_of_login_password.addEventListener("click", function() {
    name.style.display = "none";
    surname.style.display = "none";
    next_button_of_login_password.style.display = "none";
    next_button_of_login_password1.style.display = "block";
    next_button_of_login_password1.appendChild(text_of_next_button_of_login_password);
    select_the_year.style.display = "block";
    select_the_month.style.display = "block";
    select_the_day.style.display = "block";
    select_the_region.style.display = "block";
})

next_button_of_login_password1.addEventListener("click", function() {
    window.location.href = '../html-files/login_and_password.html'
})

door_to_come_inside.appendChild(select_the_month);
door_to_come_inside.appendChild(select_the_year);
door_to_come_inside.appendChild(select_the_day);


door_to_come_inside.appendChild(name)
door_to_come_inside.appendChild(surname)
door_to_come_inside.appendChild(next_button_of_login_password)
door_to_come_inside.append(next_button_of_login_password1);
door_to_come_inside.appendChild(logo_of_company);

root.append(door_to_come_inside);





