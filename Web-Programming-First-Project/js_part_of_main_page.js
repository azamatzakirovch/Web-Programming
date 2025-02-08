const root = document.getElementById("root");

const users_name = 'Azamat Zakirovch'
const users_login = '@azamatzakirovch'
const users_phone = '+998 98 123 21 05'
const users_birthday = 'Oct 21, 2005 (19 years old)'
const the_location_of_users_profile_photo = 'photos/azamatzakirovch.jpg'

const controller_bar = document.createElement('div');
controller_bar.className = "controller_bar";
controller_bar.style.cssText = "width: 100%; height: 70px; background-color: #D9D9D9;";

const account_settings = document.createElement('div');
account_settings.className = "account_settings";
account_settings.id = "open_popup";

const img_of_profile = document.createElement("img");
img_of_profile.className = "img_of_profile";
img_of_profile.src = the_location_of_users_profile_photo;
img_of_profile.alt = "Profile Photo";

const name_of_user_for_controller_bar = document.createElement("div");
name_of_user_for_controller_bar.textContent = users_name;
name_of_user_for_controller_bar.style.display = "block";
name_of_user_for_controller_bar.style.fontSize = "22px";
name_of_user_for_controller_bar.style.lineHeight = "14px";
name_of_user_for_controller_bar.style.textAlign = "center";
name_of_user_for_controller_bar.style.position = "absolute";
name_of_user_for_controller_bar.style.right = "25px";
name_of_user_for_controller_bar.style.fontFamily = "Arial";
name_of_user_for_controller_bar.style.top = "16px";

const username_of_user_for_controller_bar = document.createElement("div");
username_of_user_for_controller_bar.textContent = users_login;
username_of_user_for_controller_bar.style.display = "block";
username_of_user_for_controller_bar.style.fontSize = "20px";
username_of_user_for_controller_bar.style.lineHeight = "14px";
username_of_user_for_controller_bar.style.textAlign = "center";
username_of_user_for_controller_bar.style.fontFamily = "Arial";
username_of_user_for_controller_bar.style.position = "absolute";
username_of_user_for_controller_bar.style.right = "32px";
username_of_user_for_controller_bar.style.top = "42px";
username_of_user_for_controller_bar.style.color = "#AEAEAE";

const mini_window_to_see_account = document.createElement("div");
mini_window_to_see_account.className = "popup";
mini_window_to_see_account.style.display = "none";

const close_button_of_mini_window_to_see_account = document.createElement("div");
close_button_of_mini_window_to_see_account.className = "close-btn";
close_button_of_mini_window_to_see_account.style.display = "block";

const image_of_close_button = document.createElement("img");
image_of_close_button.src = 'photos/close.png';
image_of_close_button.style.width = '30px'
image_of_close_button.style.high = '30px'

const edit_profile = document.createElement("div");
edit_profile.className = "edit_profile";
edit_profile.textContent = "edit";
edit_profile.textContent.fontcolor("##0f26e1")

const edit_profile_photo = document.createElement("div");
edit_profile_photo.className = "edit_profile_photo";

const edit_profile_photo_ = document.createElement("img");
edit_profile_photo_.src = the_location_of_users_profile_photo;
edit_profile_photo_.style.width = '250px'
edit_profile_photo_.style.height = '250px'
edit_profile_photo_.style.borderRadius = '50%';


const name_of_user_for_mini_window = document.createElement("div");
name_of_user_for_mini_window.textContent = users_name;
name_of_user_for_mini_window.style.display = "block";
name_of_user_for_mini_window.style.fontSize = "22px";
name_of_user_for_mini_window.style.lineHeight = "14px";
name_of_user_for_mini_window.style.textAlign = "center";
name_of_user_for_mini_window.style.position = "absolute";
name_of_user_for_mini_window.style.fontFamily = "Arial";
name_of_user_for_mini_window.style.top = "310px";
name_of_user_for_mini_window.style.right = "240px";


const status = document.createElement("div");
status.textContent = "online";
status.style.display = "block";
status.style.fontSize = "20px";
status.style.lineHeight = "14px";
status.style.textAlign = "center";
status.style.fontFamily = "Arial";
status.style.position = "absolute";
status.style.right = "310px";
status.style.top = "335px";
status.style.color = "#AEAEAE";

const rectangle_mini_window = document.createElement("div");
rectangle_mini_window.className = "rectangle_for_mini_window";

const username_for_mini_window = document.createElement("div");
username_for_mini_window.textContent = "username";
username_for_mini_window.style.display = "block";
username_for_mini_window.style.fontSize = "20px";
username_for_mini_window.style.lineHeight = "14px";
username_for_mini_window.style.textAlign = "center";
username_for_mini_window.style.fontFamily = "Arial";
username_for_mini_window.style.position = "absolute";
username_for_mini_window.style.left = "30px";
username_for_mini_window.style.top = "15px";
username_for_mini_window.style.color = "#000000";

const real_username_for_mini_window = document.createElement("div");
real_username_for_mini_window.textContent = users_login;
real_username_for_mini_window.style.display = "block";
real_username_for_mini_window.style.fontSize = "17px";
real_username_for_mini_window.style.lineHeight = "14px";
real_username_for_mini_window.style.textAlign = "center";
real_username_for_mini_window.style.fontFamily = "Arial";
real_username_for_mini_window.style.position = "absolute";
real_username_for_mini_window.style.left = "30px";
real_username_for_mini_window.style.top = "45px";
real_username_for_mini_window.style.color = "#0f26e1";



const phone_for_mini_window = document.createElement("div");
phone_for_mini_window.textContent = "phone";
phone_for_mini_window.style.display = "block";
phone_for_mini_window.style.fontSize = "20px";
phone_for_mini_window.style.lineHeight = "14px";
phone_for_mini_window.style.textAlign = "center";
phone_for_mini_window.style.fontFamily = "Arial";
phone_for_mini_window.style.position = "absolute";
phone_for_mini_window.style.left = "30px";
phone_for_mini_window.style.top = "70px";
phone_for_mini_window.style.color = "#0f26e1";

const phone_for_mini_window_ = document.createElement("div");
phone_for_mini_window_.textContent = users_phone;
phone_for_mini_window_.style.display = "block";
phone_for_mini_window_.style.fontSize = "17px";
phone_for_mini_window_.style.lineHeight = "14px";
phone_for_mini_window_.style.textAlign = "center";
phone_for_mini_window_.style.fontFamily = "Arial";
phone_for_mini_window_.style.position = "absolute";
phone_for_mini_window_.style.left = "30px";
phone_for_mini_window_.style.top = "100px";
phone_for_mini_window_.style.color = "#000000";


const birthday_for_mini_window = document.createElement("div");
birthday_for_mini_window.textContent = "birthday";
birthday_for_mini_window.style.display = "block";
birthday_for_mini_window.style.fontSize = "20px";
birthday_for_mini_window.style.lineHeight = "14px";
birthday_for_mini_window.style.textAlign = "center";
birthday_for_mini_window.style.fontFamily = "Arial";
birthday_for_mini_window.style.position = "absolute";
birthday_for_mini_window.style.left = "30px";
birthday_for_mini_window.style.top = "130px";
birthday_for_mini_window.style.color = "#0f26e1";

const birthday_for_mini_window_ = document.createElement("div");
birthday_for_mini_window_.textContent = users_birthday;
birthday_for_mini_window_.style.display = "block";
birthday_for_mini_window_.style.fontSize = "17px";
birthday_for_mini_window_.style.lineHeight = "14px";
birthday_for_mini_window_.style.textAlign = "center";
birthday_for_mini_window_.style.fontFamily = "Arial";
birthday_for_mini_window_.style.position = "absolute";
birthday_for_mini_window_.style.left = "30px";
birthday_for_mini_window_.style.top = "160px";
birthday_for_mini_window_.style.color = "#000000";

rectangle_mini_window.appendChild(createDivider('65'));
rectangle_mini_window.appendChild(username_for_mini_window);
rectangle_mini_window.appendChild(real_username_for_mini_window);

rectangle_mini_window.appendChild(createDivider('120'));
rectangle_mini_window.appendChild(phone_for_mini_window);
rectangle_mini_window.appendChild(phone_for_mini_window_);

rectangle_mini_window.appendChild(birthday_for_mini_window_);
rectangle_mini_window.appendChild(birthday_for_mini_window);

mini_window_to_see_account.appendChild(rectangle_mini_window);
close_button_of_mini_window_to_see_account.appendChild(image_of_close_button);
edit_profile_photo.appendChild(edit_profile_photo_);

mini_window_to_see_account.appendChild(edit_profile);
mini_window_to_see_account.appendChild(edit_profile_photo);
mini_window_to_see_account.appendChild(name_of_user_for_mini_window);
mini_window_to_see_account.appendChild(status);
mini_window_to_see_account.appendChild(close_button_of_mini_window_to_see_account);

account_settings.appendChild(img_of_profile);
controller_bar.appendChild(name_of_user_for_controller_bar);
controller_bar.appendChild(account_settings);
controller_bar.appendChild(username_of_user_for_controller_bar);

root.appendChild(mini_window_to_see_account);
root.appendChild(controller_bar);

account_settings.addEventListener('click', function() {
    mini_window_to_see_account.style.display = "block";
});

close_button_of_mini_window_to_see_account.addEventListener('click', function() {
    mini_window_to_see_account.style.display = "none";
});



function createDivider(x, height = "1px") {
    const divider = document.createElement("div");
    divider.className = "divider";
    divider.style.position = "absolute";
    divider.style.top = x + "px";
    divider.style.right = "30px";
    divider.style.width = "90%";
    divider.style.height = height;
    divider.style.backgroundColor = "black";

    document.body.appendChild(divider);

    return divider;
}
