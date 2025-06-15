let input = document.getElementById("display");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

arr.forEach((button) => {
    button.addEventListener("click", (e) => {
        let btnText = e.target.innerHTML;

        if (btnText === "=") {
            try {
                string = eval(string);
                input.value = string;
            } catch (err) {
                input.value = "Error";
                string = "";
            }
        } 
        else if (btnText === "AC") {
            string = "";
            input.value = string;
        } 
        else if (btnText === "DE") {
            string = string.slice(0, -1);
            input.value = string;
        } 
        else {
            string += btnText;
            input.value = string;
        }
    });
});

