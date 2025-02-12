const root = document.getElementById("root");
// main page
const door_to_come_inside_ = document.createElement("div");
door_to_come_inside_.className = "door_to_come_inside";

const logo_of_company = document.createElement("img");
logo_of_company.src = "../photos/logo.jpg";
logo_of_company.alt = "Company Logo";
logo_of_company.className = "logo-of-company";

const welcome = document.createElement("div");
welcome.textContent = "Welcome To Vertex Academy";
welcome.style.display = "block";
welcome.style.fontSize = "20px";
welcome.style.lineHeight = "14px";
welcome.style.textAlign = "center";
welcome.style.font = "Verdana, Geneva, sans-serif";
welcome.style.position = "absolute";
welcome.style.left = "50%";
welcome.style.top = "50%";
welcome.style.transform = "translate(-50%, -50%)";

const text_of_move_forward = document.createElement("div");
text_of_move_forward.textContent = "Move Forward";
text_of_move_forward.style.display = "block";
text_of_move_forward.style.fontSize = "20px";
text_of_move_forward.style.lineHeight = "14px";
text_of_move_forward.style.textAlign = "center";
text_of_move_forward.style.font = "Verdana, Geneva, sans-serif";
text_of_move_forward.style.position = "absolute";
text_of_move_forward.style.left = "50%";
text_of_move_forward.style.top = "50%";
text_of_move_forward.style.transform = "translate(-50%, -50%)";
text_of_move_forward.style.color = "white";

const move_forward = document.createElement("div");
move_forward.className = "move_forward";

/*login and password part*/

const username = document.createElement("input");
username.placeholder = "username";
username.className = "username";
username.setAttribute("type", "text");
username.style.paddingLeft = "10px";

const password = document.createElement("input");
password.className = "password";
password.placeholder = "password";
password.setAttribute("type", "password");
password.style.paddingLeft = "10px";

const next_button_of_login_password  = document.createElement("div");
next_button_of_login_password.className = "next_button_of_login_password";

const text_of_next_button_of_login_password = document.createElement("div");
text_of_next_button_of_login_password.textContent = "next";
text_of_next_button_of_login_password.style.display = "block";
text_of_next_button_of_login_password.style.fontSize = "20px";
text_of_next_button_of_login_password.style.lineHeight = "14px";
text_of_next_button_of_login_password.style.textAlign = "center";
text_of_next_button_of_login_password.style.font = "Verdana, Geneva, sans-serif";
text_of_next_button_of_login_password.style.position = "absolute";
text_of_next_button_of_login_password.style.left = "50%";
text_of_next_button_of_login_password.style.top = "50%";
text_of_next_button_of_login_password.style.transform = "translate(-50%, -50%)";
text_of_next_button_of_login_password.style.color = "black";
next_button_of_login_password.appendChild(text_of_next_button_of_login_password);

const create_new_account = document.createElement("div");
create_new_account.className = "create_account";
create_new_account.textContent = "Create New Account";

username.style.display = "none";
password.style.display = "none";
text_of_next_button_of_login_password.style.display = "none";
create_new_account.style.display = "none";
next_button_of_login_password.style.display = "none";

door_to_come_inside_.appendChild(create_new_account);
door_to_come_inside_.appendChild(username);
door_to_come_inside_.appendChild(password)
door_to_come_inside_.appendChild(logo_of_company);
door_to_come_inside_.appendChild(next_button_of_login_password);
door_to_come_inside_.appendChild(logo_of_company);
door_to_come_inside_.appendChild(welcome);
move_forward.appendChild(text_of_move_forward);
door_to_come_inside_.appendChild(move_forward);
root.appendChild(door_to_come_inside_);

move_forward.addEventListener('click', function() {
    welcome.style.display = "none";
    move_forward.style.display = "none";
    username.style.display = "block";
    password.style.display = "block";
    text_of_next_button_of_login_password.style.display = "block";
    create_new_account.style.display = "block";
    next_button_of_login_password.style.display = "block";
});

next_button_of_login_password.addEventListener("click", function() {
    window.location.href = 'main_page.html'
})