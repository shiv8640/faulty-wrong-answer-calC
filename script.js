function calculate() {

    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let operator = document.getElementById("operator").value;

    let random = Math.random(); // 0 to 1
    let isFaulty = random < 0.1; // 10% chance

    let result;

    if (isFaulty) {
        // Wrong operations
        if (operator === "+") {
            result = num1 - num2;
        } 
        else if (operator === "*") {
            result = num1 + num2;
        } 
        else if (operator === "-") {
            result = num1 / num2;
        } 
        else if (operator === "/") {
            result = num1 ** num2;
        } 
        else {
            result = "Invalid Operator";
        }

        document.getElementById("result").innerText =
            "⚠ Faulty Result: " + result;

    } else {
        // Correct operations
        if (operator === "+") {
            result = num1 + num2;
        } 
        else if (operator === "-") {
            result = num1 - num2;
        } 
        else if (operator === "*") {
            result = num1 * num2;
        } 
        else if (operator === "/") {
            result = num1 / num2;
        } 
        else {
            result = "Invalid Operator";
        }

        document.getElementById("result").innerText =
            "✅ Correct Result: " + result;
    }
}
