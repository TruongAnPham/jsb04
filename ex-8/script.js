const account_right = "abc@gmail.com";
const password_right = "1234";

const account_input = document.getElementById("ac-right");
const password_input = document.getElementById("pw-right");

function test() {
    if (account_input.value == account_right && password_input.value == password_right) {
        console.log("Dung");
    }

    else {
        console.log("Sai");
    }
};
let click_button = document.getElementById("button").addEventListener("click", test);