var date_input = document.querySelector("#luckydate")
var lucky_number = document.querySelector("#luckynum")
var check_btn = document.querySelector("#btn1")
var msg1 = document.querySelector("#msg")

// num1.replaceAll('-',0)

function handler1() {
    var sum = 0
    let lcn = Number(lucky_number.value);
    var num1 = date_input.value.replaceAll('-', '')
    // console.log(Number(num1), lucky_number.value, lcn)
    if (Number(num1) === 0 || lucky_number.value === "") {
        msg1.innerText = "Please enter values"
    }

    else {
        for (var i = 0; i <= 10; i++) {
            var k = Number(num1.charAt(i));

            sum = sum + k
        }
        // console.log(sum)
        if (sum % lcn === 0) {
            msg1.innerText = "Your birthday is lucky 🎉🎉🎉🎉🎉"
        }
        else {
            msg1.innerText = "Your birthday is not lucky 😔😔😔😔😔"
        }

    }


}


check_btn.addEventListener("click", handler1)