function calculateInterest() {
    var principal = parseFloat(document.getElementById('principal').value);
    var rate = parseFloat(document.getElementById('rate').value);
    var time = parseFloat(document.getElementById('time').value);

    var interest = (principal * rate * time) / 100;
    var totalAmount = principal + interest;

    var resultMessage = `Interest: ${interest.toFixed(2)} Rs.<br>Total Amount: ${totalAmount.toFixed(2)} Rs.`;

    document.getElementById('result').innerHTML = resultMessage;
}