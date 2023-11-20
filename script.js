// Retrieve the initial account balance
let myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText);

// Function to handle money transfer
function sendMoney() {
    const enterName = document.getElementById("enterName").value;
    const enterAmount = parseInt(document.getElementById("enterAmount").value);

    if (enterAmount > 2500) {
        alert("Insufficient Balance.");
    } else {
        // Update sender's and recipient's account balances
        const findUserBankAccount = enterName + "BankBalance";
        const recipientBankBalance = parseInt(document.getElementById(findUserBankAccount).innerHTML);
        const finalAmount = recipientBankBalance + enterAmount;

        myAccountBalance -= enterAmount;
        document.getElementById("myAccountBalance").innerText = myAccountBalance;
        document.getElementById(findUserBankAccount).innerHTML = finalAmount;

        // Display successful transaction alert
        alert(`Successful Transaction !!  
        $${enterAmount} is sent to ${enterName}@email.com.`);

        // Log transaction history
        const transactionDetails = `$${enterAmount} is sent to recipient with Email-id ${enterName}@email.com on ${new Date()}.`;
        addTransactionHistory(transactionDetails);
    }
}

// Function to add transaction history
function addTransactionHistory(transactionDetails) {
    const createPTag = document.createElement("li");
    const textNode = document.createTextNode(transactionDetails);
    createPTag.appendChild(textNode);

    const element = document.getElementById("transaction-history-body");
    element.insertBefore(createPTag, element.firstChild);
}
