function calculateSI() {
    let principal = document.getElementById("principal").value;
    let rate = document.getElementById("rate").value;
    let time = document.getElementById("time").value;

    if (principal === "" || rate === "" || time === "") {
        document.getElementById("result").innerText = "⚠️ Please fill all fields!";
        return;
    }

    // Formula: SI = (P × R × T) / 100
    let simpleInterest = (principal * rate * time) / 100;
    let totalAmount = parseFloat(principal) + simpleInterest;

    document.getElementById("result").innerHTML = `
        Simple Interest = ₹${simpleInterest.toFixed(2)} <br>
        Total Amount = ₹${totalAmount.toFixed(2)}
    `;
}