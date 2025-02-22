const root = document.getElementById("root");

const users_name = 'Azamat Zakirovch'
const users_login = '@azamatzakirovch'
const users_phone = '+998 98 123 21 05'
const users_birthday = 'Oct 21, 2005 (19 years old)'
const the_location_of_users_profile_photo = '../photos/azamatzakirovch.jpg'

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
image_of_close_button.src = '../photos/close.png';
image_of_close_button.style.width = '30px'
image_of_close_button.style.high = '30px'
/*from here it started*/
const edit_profile = document.createElement("div");
edit_profile.className = "edit_profile";
edit_profile.textContent = "edit";
edit_profile.textContent.fontcolor("##0f26e1")

const save_edited_profile = document.createElement("div");
save_edited_profile.className = "edit_profile";
save_edited_profile.textContent = "save";
save_edited_profile.textContent.fontcolor("##0f26e1")
save_edited_profile.style.display = "none";

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

rectangle_mini_window.appendChild(createDivider('65','30'));
rectangle_mini_window.appendChild(username_for_mini_window);
rectangle_mini_window.appendChild(real_username_for_mini_window);

rectangle_mini_window.appendChild(createDivider('120','30'));
rectangle_mini_window.appendChild(phone_for_mini_window);
rectangle_mini_window.appendChild(phone_for_mini_window_);

rectangle_mini_window.appendChild(birthday_for_mini_window_);
rectangle_mini_window.appendChild(birthday_for_mini_window);

close_button_of_mini_window_to_see_account.appendChild(image_of_close_button);
edit_profile_photo.appendChild(edit_profile_photo_);

const really_edit_profile_name_and_surname = document.createElement("div");
really_edit_profile_name_and_surname.className = "really_edit_profile_name_and_surname";
really_edit_profile_name_and_surname.style.display = "none";

const really_profile_photo_changer = document.createElement("div");
really_profile_photo_changer.className = "really_profile_photo_changer";

const img_of_really_profile_photo_changer = document.createElement("img");
img_of_really_profile_photo_changer.className = "img_of_really_profile_photo_changer";
img_of_really_profile_photo_changer.src = the_location_of_users_profile_photo;
img_of_really_profile_photo_changer.alt = "Profile Photo";

const edit_name = document.createElement("input");
edit_name.className = "edit_name";
edit_name.style.paddingLeft = "10px";
edit_name.style.paddingRight = "10px";
edit_name.style.paddingTop = "10px";
edit_name.style.paddingBottom = "10px";
edit_name.value = users_name;

const divider_bay = document.createElement("div");
divider_bay.className = "divider_bay";

const helper_to_change_name_and_profile_photo = document.createElement("div");
helper_to_change_name_and_profile_photo.textContent = "Enter your name and change the profile photo.";
helper_to_change_name_and_profile_photo.style.display = "block";
helper_to_change_name_and_profile_photo.style.fontSize = "10px";
helper_to_change_name_and_profile_photo.style.fontFamily = "Arial";
helper_to_change_name_and_profile_photo.style.position = "absolute";
helper_to_change_name_and_profile_photo.style.left = "80px";
helper_to_change_name_and_profile_photo.style.top = "250px";
helper_to_change_name_and_profile_photo.style.color = "#AEAEAE";
helper_to_change_name_and_profile_photo.style.display = "none";


const rectangle_for_edit_birthday = document.createElement("div");
rectangle_for_edit_birthday.className = "rectangle_for_edit_birthday";
rectangle_for_edit_birthday.style.display = "none";

const edit_birthday_button = document.createElement("div");
edit_birthday_button.className = "edit_birthday_button";
edit_birthday_button.textContent = "edit";
edit_birthday_button.textContent.fontcolor("##0f26e1")
edit_birthday_button.style.display = "none";



const helper_to_change_birthday = document.createElement("div");
helper_to_change_birthday.textContent = "Enter your birthday";
helper_to_change_birthday.style.display = "block";
helper_to_change_birthday.style.fontSize = "10px";
helper_to_change_birthday.style.fontFamily = "Arial";
helper_to_change_birthday.style.position = "absolute";
helper_to_change_birthday.style.left = "80px";
helper_to_change_birthday.style.top = "400px";
helper_to_change_birthday.style.color = "#AEAEAE";

const show_birthday_in_editor_part = document.createElement("div");
show_birthday_in_editor_part.textContent = "birthday";
show_birthday_in_editor_part.style.fontSize = "20px";
show_birthday_in_editor_part.style.lineHeight = "14px";
show_birthday_in_editor_part.style.textAlign = "center";
show_birthday_in_editor_part.style.fontFamily = "Arial";
show_birthday_in_editor_part.style.position = "absolute";
show_birthday_in_editor_part.style.left = "30px";
show_birthday_in_editor_part.style.top = "15px";
show_birthday_in_editor_part.style.color = "#0f26e1";
show_birthday_in_editor_part.style.display = "none";

const show_birthday_in_editor_part_ = document.createElement("div");
show_birthday_in_editor_part_.textContent = users_birthday;
show_birthday_in_editor_part_.style.fontSize = "17px";
show_birthday_in_editor_part_.style.lineHeight = "14px";
show_birthday_in_editor_part_.style.fontFamily = "Arial";
show_birthday_in_editor_part_.style.position = "absolute";
show_birthday_in_editor_part_.style.left = "30px";
show_birthday_in_editor_part_.style.top = "45px";
show_birthday_in_editor_part_.style.color = "#000000";


const rectangle_of_phone_and_username_changer = document.createElement("div");
rectangle_of_phone_and_username_changer.className = 'rectangle_of_phone_and_username_changer'
rectangle_of_phone_and_username_changer.style.display = 'none'

const divided_by_phone_and_username = document.createElement("div");
divided_by_phone_and_username.className = "divided_by_phone_and_username";
divided_by_phone_and_username.style.display = 'none';

const helper_to_change_phone_number_and_username = document.createElement("div");
helper_to_change_phone_number_and_username.textContent = "Edit your username or change your phone number";
helper_to_change_phone_number_and_username.style.display = "block";
helper_to_change_phone_number_and_username.style.fontSize = "10px";
helper_to_change_phone_number_and_username.style.fontFamily = "Arial";
helper_to_change_phone_number_and_username.style.position = "absolute";
helper_to_change_phone_number_and_username.style.left = "80px";
helper_to_change_phone_number_and_username.style.top = "590px";
helper_to_change_phone_number_and_username.style.color = "#AEAEAE";
helper_to_change_phone_number_and_username.style.display = "none";

const show_phone_number = document.createElement("div");
show_phone_number.textContent = "phone";
show_phone_number.style.fontSize = "20px";
show_phone_number.style.lineHeight = "14px";
show_phone_number.style.textAlign = "center";
show_phone_number.style.fontFamily = "Arial";
show_phone_number.style.position = "absolute";
show_phone_number.style.left = "30px";
show_phone_number.style.top = "15px";
show_phone_number.style.color = "#0f26e1";
show_phone_number.style.display = "none";

const show_phone_number_ = document.createElement("div");
show_phone_number_.textContent = users_phone;
show_phone_number_.style.fontSize = "17px";
show_phone_number_.style.lineHeight = "14px";
show_phone_number_.style.fontFamily = "Arial";
show_phone_number_.style.position = "absolute";
show_phone_number_.style.left = "30px";
show_phone_number_.style.top = "45px";
show_phone_number_.style.color = "#000000";
show_phone_number_.style.display = "none";

const show_users_username_for_editing = document.createElement("div");
show_users_username_for_editing.textContent = "username";
show_users_username_for_editing.style.fontSize = "20px";
show_users_username_for_editing.style.fontFamily = "Arial";
show_users_username_for_editing.style.position = "absolute";
show_users_username_for_editing.style.left = "30px";
show_users_username_for_editing.style.top = "65px";
show_users_username_for_editing.style.color = "#0f26e1";
show_users_username_for_editing.style.display = "none";

const show_users_username_for_editing_ = document.createElement("div");
show_users_username_for_editing_.textContent = users_login;
show_users_username_for_editing_.style.fontSize = "17px";
show_users_username_for_editing_.style.lineHeight = "14px";
show_users_username_for_editing_.style.fontFamily = "Arial";
show_users_username_for_editing_.style.position = "absolute";
show_users_username_for_editing_.style.left = "30px";
show_users_username_for_editing_.style.top = "95px";
show_users_username_for_editing_.style.color = "#000000";
show_users_username_for_editing_.style.display = "none";
show_users_username_for_editing_.style.display = "none";

const edit_button_for_phone_number = document.createElement("div");
edit_button_for_phone_number.className = "edit_birthday_button";
edit_button_for_phone_number.textContent = "edit";
edit_button_for_phone_number.textContent.fontcolor("##0f26e1")
edit_button_for_phone_number.style.display = "none";

const edit_button_for_username = document.createElement("div");
edit_button_for_username.className = "edit_username_button";
edit_button_for_username.textContent = "edit";
edit_button_for_username.textContent.fontcolor("##0f26e1")
edit_button_for_username.style.display = "none";

const sidebar = document.createElement("div");
sidebar.className = "sidebar";

const sidebar_button = document.createElement("div");
sidebar_button.className = "menu-btn";

const img_of_sidebar_button = document.createElement("img");
img_of_sidebar_button.className = "image_of_sidebar";
img_of_sidebar_button.src = '../photos/sidebar_button.png';
img_of_sidebar_button.alt = "Sidebar Photo";

const close_sidebar_button = document.createElement("div");
close_sidebar_button.className = "close_sidebar";

const image_of_close_sidebar = document.createElement("img");
image_of_close_sidebar.className = "image_of_sidebar";
image_of_close_sidebar.src = '../photos/close.png';
image_of_close_sidebar.alt = "Sidebar Photo";
close_sidebar_button.appendChild(image_of_close_sidebar);

sidebar_button.appendChild(img_of_sidebar_button);
controller_bar.appendChild(sidebar_button);
controller_bar.appendChild(sidebar);

const learning_button = document.createElement("div");
learning_button.className = "learning_button";

const txt_learning_button = document.createElement("div");
txt_learning_button.textContent = 'Learning';
txt_learning_button.style.fontSize = "30px";
txt_learning_button.style.lineHeight = "14px";
txt_learning_button.style.fontFamily = "Arial";
txt_learning_button.style.position = "absolute";
txt_learning_button.style.left = "80px";
txt_learning_button.style.top = "50%";
txt_learning_button.style.transform = "translateY(-50%)";
txt_learning_button.style.color = "#000000";
learning_button.appendChild(txt_learning_button);

const quiz_button = document.createElement("div");
quiz_button.className = "quiz_button";
const txt_quiz_button = document.createElement("div");
txt_quiz_button.textContent = 'Quiz';
txt_quiz_button.style.fontSize = "30px";
txt_quiz_button.style.lineHeight = "14px";
txt_quiz_button.style.fontFamily = "Arial";
txt_quiz_button.style.position = "absolute";
txt_quiz_button.style.left = "80px";
txt_quiz_button.style.top = "50%";
txt_quiz_button.style.transform = "translateY(-50%)";
txt_quiz_button.style.color = "#000000";
quiz_button.appendChild(txt_quiz_button);

const home_work_button = document.createElement("div");
home_work_button.className = "home_work_button";
const txt_home_work_button = document.createElement("div");
txt_home_work_button.textContent = 'Get & Upload Home Work';
txt_home_work_button.style.fontSize = "30px";
txt_home_work_button.style.lineHeight = "14px";
txt_home_work_button.style.fontFamily = "Arial";
txt_home_work_button.style.position = "absolute";
txt_home_work_button.style.left = "80px";
txt_home_work_button.style.top = "50%";
txt_home_work_button.style.transform = "translateY(-50%)";
txt_home_work_button.style.color = "#000000";
home_work_button.appendChild(txt_home_work_button);


const grader_button = document.createElement("div");
grader_button.className = "grader_button";
const txt_grader_button = document.createElement("div");
txt_grader_button.textContent = 'Grades';
txt_grader_button.style.fontSize = "30px";
txt_grader_button.style.lineHeight = "14px";
txt_grader_button.style.fontFamily = "Arial";
txt_grader_button.style.position = "absolute";
txt_grader_button.style.left = "80px";
txt_grader_button.style.top = "50%";
txt_grader_button.style.transform = "translateY(-50%)";
txt_grader_button.style.color = "#000000";
grader_button.appendChild(txt_grader_button);

sidebar.appendChild(close_sidebar_button);
sidebar.appendChild(quiz_button);
sidebar.appendChild(home_work_button);
sidebar.appendChild(grader_button);
sidebar.appendChild(learning_button);
sidebar.appendChild(close_sidebar_button);
sidebar.appendChild(learning_button);

rectangle_for_edit_birthday.appendChild(edit_birthday_button);
rectangle_for_edit_birthday.appendChild(show_birthday_in_editor_part_);
rectangle_for_edit_birthday.appendChild(show_birthday_in_editor_part);

rectangle_of_phone_and_username_changer.appendChild(show_phone_number);
rectangle_of_phone_and_username_changer.appendChild(show_phone_number_);
rectangle_of_phone_and_username_changer.appendChild(divided_by_phone_and_username);
rectangle_of_phone_and_username_changer.appendChild(show_users_username_for_editing);
rectangle_of_phone_and_username_changer.appendChild(show_users_username_for_editing_);
rectangle_of_phone_and_username_changer.appendChild(edit_button_for_phone_number);
rectangle_of_phone_and_username_changer.appendChild(edit_button_for_username);

really_edit_profile_name_and_surname.appendChild(edit_name);
really_edit_profile_name_and_surname.appendChild(divider_bay);
really_profile_photo_changer.appendChild(img_of_really_profile_photo_changer)
really_edit_profile_name_and_surname.appendChild(really_profile_photo_changer);


mini_window_to_see_account.appendChild(rectangle_of_phone_and_username_changer);
mini_window_to_see_account.appendChild(helper_to_change_phone_number_and_username)
mini_window_to_see_account.appendChild(helper_to_change_name_and_profile_photo);
mini_window_to_see_account.appendChild(helper_to_change_birthday);
mini_window_to_see_account.appendChild(rectangle_for_edit_birthday);
mini_window_to_see_account.appendChild(really_edit_profile_name_and_surname);
mini_window_to_see_account.appendChild(save_edited_profile);
mini_window_to_see_account.appendChild(rectangle_mini_window);
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

edit_profile.addEventListener('click', function() {
    hider_of_first_page('not_success')
    hider_of_2nd_window('success')
});

save_edited_profile.addEventListener('click', function() {
    hider_of_first_page('success')
    hider_of_2nd_window('not_success')
});

sidebar_button.addEventListener('click', function() {
    sidebar.classList.toggle("active");
});

close_sidebar_button.addEventListener('click', function() {
    sidebar.classList.toggle("active");
});

learning_button.addEventListener('click', function() {

});

function hider_of_first_page(f){
    let show_or_hide = 'none'
    if(f === "success"){
        show_or_hide = 'block'
    }
    edit_profile.style.display = show_or_hide
    edit_profile_photo.style.display = show_or_hide
    edit_profile_photo.style.display = show_or_hide
    edit_profile_photo_.style.display = show_or_hide
    name_of_user_for_mini_window.style.display = show_or_hide
    status.style.display = show_or_hide
    rectangle_mini_window.style.display = show_or_hide
    username_for_mini_window.style.display = show_or_hide
    real_username_for_mini_window.style.display = show_or_hide
    phone_for_mini_window.style.display = show_or_hide
    phone_for_mini_window_.style.display = show_or_hide
    birthday_for_mini_window.style.display = show_or_hide
    birthday_for_mini_window.style.display_ = show_or_hide
    save_edited_profile.style.display = 'block'

}

function hider_of_2nd_window(f){
    let show_or_hide = 'none'
    if(f === "success"){
        show_or_hide = 'block'
    }
    really_edit_profile_name_and_surname.style.display = show_or_hide;
    helper_to_change_name_and_profile_photo.style.display = show_or_hide;
    save_edited_profile.style.display = show_or_hide;
    rectangle_of_phone_and_username_changer.style.display = show_or_hide;
    divided_by_phone_and_username.style.display = show_or_hide;
    helper_to_change_birthday.style.display = show_or_hide;
    edit_birthday_button.style.display = show_or_hide;
    rectangle_for_edit_birthday.style.display = show_or_hide;
    show_birthday_in_editor_part.style.display = show_or_hide;
    show_birthday_in_editor_part.style.display_ = show_or_hide;
    show_phone_number.style.display = show_or_hide;
    helper_to_change_phone_number_and_username.style.display = show_or_hide;
    show_phone_number_.style.display = show_or_hide;
    show_phone_number.style.display = show_or_hide;
    show_users_username_for_editing_.style.display = show_or_hide;
    show_users_username_for_editing.style.display = show_or_hide;
    edit_button_for_username.style.display = show_or_hide;
    edit_button_for_phone_number.style.display = show_or_hide;
}

function createDivider(x,y, height = "1px") {
    const divider = document.createElement("div");
    divider.className = "divider";
    divider.style.position = "absolute";
    divider.style.top = x + "px";
    divider.style.right =y+ "px";
    divider.style.width = "90%";
    divider.style.height = height;
    divider.style.backgroundColor = "black";
    document.body.appendChild(divider);
    return divider;
}
