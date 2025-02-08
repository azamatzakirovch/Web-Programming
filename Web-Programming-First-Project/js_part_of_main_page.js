const root = document.getElementById("root");

// Controller bar
const controller_bar = document.createElement('div');
controller_bar.className = "controller_bar";
controller_bar.style.cssText = "width: 100%; height: 70px; background-color: #D9D9D9;";


const account_settings = document.createElement('div');
account_settings.className = "account_settings";
account_settings.id = "open_popup";

const img_of_profile = document.createElement("img");
img_of_profile.className = "img_of_profile";
img_of_profile.src = "photos/azamatzakirovch.jpg"
img_of_profile.alt = "Profile Photo";



const name_of_user_for_controller_bar = document.createElement("div");
name_of_user_for_controller_bar.textContent = "Azamat Zakirovch";
name_of_user_for_controller_bar.style.display = "block";
name_of_user_for_controller_bar.style.fontSize = "22px";
name_of_user_for_controller_bar.style.lineHeight = "14px";
name_of_user_for_controller_bar.style.textAlign = "center";
name_of_user_for_controller_bar.style.position = "absolute";
name_of_user_for_controller_bar.style.right = "25px";
name_of_user_for_controller_bar.style.fontFamily = "Arial";
name_of_user_for_controller_bar.style.top = "16px";

const username_of_user_for_controller_bar = document.createElement("div");
username_of_user_for_controller_bar.textContent = "@azamatzakirovch";
username_of_user_for_controller_bar.style.display = "block";
username_of_user_for_controller_bar.style.fontSize = "20px";
username_of_user_for_controller_bar.style.lineHeight = "14px";
username_of_user_for_controller_bar.style.textAlign = "center";
username_of_user_for_controller_bar.style.fontFamily = "Arial";
username_of_user_for_controller_bar.style.position = "absolute";
username_of_user_for_controller_bar.style.right = "32px";
username_of_user_for_controller_bar.style.top = "42px";
username_of_user_for_controller_bar.style.color = "#AEAEAE";


// Append elements
account_settings.appendChild(img_of_profile);
controller_bar.appendChild(name_of_user_for_controller_bar);
controller_bar.appendChild(account_settings);
controller_bar.appendChild(username_of_user_for_controller_bar);
root.appendChild(controller_bar);

document.addEventListener('DOMContentLoaded', function() {
    const openPopupBtn = document.getElementById('open_popup');
    const closePopupBtn = document.getElementById('closePopup');
    const backdrop = document.getElementById('backdrop');
    const mainContent = document.getElementById('mainContent');

    openPopupBtn.addEventListener('click', function() {
        backdrop.style.display = 'block';
        mainContent.classList.add('blur');
    });

    closePopupBtn.addEventListener('click', function() {
        backdrop.style.display = 'none';
        mainContent.classList.remove('blur');
    });

    backdrop.addEventListener('click', function(event) {
        if (event.target === backdrop) {
            backdrop.style.display = 'none';
            mainContent.classList.remove('blur');
        }
    });
});


