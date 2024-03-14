const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const message = document.querySelector('#message');

    if ((height === '') || (height < 0) || (isNaN(height))) {

        results.innerHTML = "mohon masukan tinggi badan yang valid";

    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = "mohon masukan berat badan yang valid";
    } else {

        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        results.innerHTML = `<span>${bmi}</span>`


        if (bmi < 18.6) {
            message.innerHTML = "kamu kekurangan berat badan";
        } else if (bmi > 18.6 && bmi < 24.9) {
            message.innerHTML = "Normal(ideal)"
        } else if (bmi > 24.9) {
            message.innerHTML = "kamu kelebihan berat badan"
        }
    }
});