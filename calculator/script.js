function handleValue (value) {
    const calculation = document.querySelector('[name="screen"]');
    if (value) {
        calculation.value += value;
    }
} 
function handleClear(value) {
    const calculation = document.querySelector('[name="screen"]');
    if (value === 'C') {
        calculation.value = "";
    } else if (value === 'CE') {
        calculation.value = (calculation.value).substring(0, calculation.value. length - 1);
    }
}
function handleSubmit() {
    const calculation = document.querySelector('[name="screen"]');
    const arr = calculation;
    console.log(Number(calculation));
}