const root = document.getElementById("root");

const menuPanel = document.createElement("div");
menuPanel.className = "_menu_panel";
root.appendChild(menuPanel);


const profileImage = document.createElement("img");
profileImage.src = "azamatzakirovch.jpg";
profileImage.alt = "Profile";
profileImage.className = "profile-image";
menuPanel.appendChild(profileImage);


const sayHello = document.createElement("div");
sayHello.className = "say_hello";
sayHello.textContent = "Hey, Azamat Zakirovch";
menuPanel.appendChild(sayHello);


const questionPanel = document.createElement("div");
questionPanel.className = "question_panel";
root.appendChild(questionPanel);


const rectangleForAnswer = document.createElement("div");
rectangleForAnswer.className = "rectangle_for_result_html";
root.appendChild(rectangleForAnswer);


const goToHtml = document.createElement("button");
goToHtml.className = "to_html";
goToHtml.textContent = "Go to HTML";
root.appendChild(goToHtml);


const goToJs = document.createElement("button");
goToJs.className = "to_js";
goToJs.textContent = "Go to JS";
root.appendChild(goToJs);


const questionTitle = document.createElement("div");
questionTitle.className = "question_is_here";
questionTitle.textContent = "Question 10";
questionPanel.appendChild(questionTitle);


const taskManager = document.createElement("div");
taskManager.className = "task_manager";
taskManager.textContent = "What you need to do is you need to make a mini calculator like this!";
questionPanel.appendChild(taskManager);


const divider = document.createElement("div");
divider.className = "divider";
questionPanel.appendChild(divider);


const aspects = document.createElement("div");
aspects.className = "aspects";
aspects.id = "text";
aspects.innerHTML = "1. You Must Enter Only Integer <br>Numbers<br>2. Ensure Both Fields Are Filled<br>3. Avoid Division by Zero<br>4. Both Buttons Must Be Worked";
questionPanel.appendChild(aspects);


const calculator = document.createElement("div");
calculator.className = "calculator";
questionPanel.appendChild(calculator);


const calcTitle = document.createElement("h3");
calcTitle.textContent = "Simple Calculator";
calculator.appendChild(calcTitle);


const form = document.createElement("form");
calculator.appendChild(form);


const firstNumberLabel = document.createElement("label");
firstNumberLabel.textContent = "First Number: ";
form.appendChild(firstNumberLabel);

const firstNumberInput = document.createElement("input");
firstNumberInput.type = "text";
firstNumberInput.id = "firstNumber";
form.appendChild(firstNumberInput);
form.appendChild(document.createElement("br"));


const secondNumberLabel = document.createElement("label");
secondNumberLabel.textContent = "Second Number: ";
form.appendChild(secondNumberLabel);

const secondNumberInput = document.createElement("input");
secondNumberInput.type = "text";
secondNumberInput.id = "secondNumber";
form.appendChild(secondNumberInput);
form.appendChild(document.createElement("br"));


const multiplyButton = document.createElement("button");
multiplyButton.type = "button";
multiplyButton.textContent = "Multiply";
multiplyButton.onclick = multiplyBy;
form.appendChild(multiplyButton);


const divideButton = document.createElement("button");
divideButton.type = "button";
divideButton.textContent = "Divide";
divideButton.onclick = divideBy;
form.appendChild(divideButton);


const resultText = document.createElement("p");
resultText.innerHTML = "The Result is: <span id='result'></span>";
calculator.appendChild(resultText);


function multiplyBy() {
    let num1 = document.getElementById("firstNumber").value;
    let num2 = document.getElementById("secondNumber").value;

    if (num1 === "" || num2 === "") {
        document.getElementById("result").innerText = "Please enter both numbers!";
    } else if (!Number.isInteger(Number(num1)) || !Number.isInteger(Number(num2))) {
        document.getElementById("result").innerText = "Only integer numbers allowed!";
    } else {
        document.getElementById("result").innerText = Number(num1) * Number(num2);
    }
}

function divideBy() {
    let num1 = document.getElementById("firstNumber").value;
    let num2 = document.getElementById("secondNumber").value;

    if (num1 === "" || num2 === "") {
        document.getElementById("result").innerText = "Please enter both numbers!";
    } else if (!Number.isInteger(Number(num1)) || !Number.isInteger(Number(num2))) {
        document.getElementById("result").innerText = "Only integer numbers allowed!";
    } else if (num2 == 0) {
        document.getElementById("result").innerText = "Cannot divide by zero!";
    } else {
        document.getElementById("result").innerText = (Number(num1) / Number(num2)).toFixed(2);
    }
}
