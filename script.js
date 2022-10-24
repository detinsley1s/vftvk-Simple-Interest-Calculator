function compute() {
    const principal = document.getElementById("principal").value;
    const rate = document.getElementById("rate").value;
    const years = document.getElementById("years").value;
    const interest = principal * years * rate / 100;
    const year = new Date().getFullYear() + parseInt(years);
    const result = document.getElementById("result");

    // Principal must be acceptable positive input
    if (principal > 0) {
        result.innerHTML = `If you deposit <mark>${principal}</mark>,<br>
                            at an interest rate of <mark>${rate}%</mark>.<br>
                            You will receive an amount of <mark>${interest}</mark><br>
                            in the year <mark>${year}</mark>`;
    }
    else {
        // Clear out any text that may be displayed on the screen
        result.innerHTML = "";

        // Show an alert box to the user
        alert("Enter a positive number");

        // Place focus back inside the 'Amount' box
        document.getElementById("principal").focus();
    }
}

function updateRate() {
    const rateVal = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = `${rateVal}%`;
}