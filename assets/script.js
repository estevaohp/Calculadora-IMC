form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    // Validação para garantir que peso e altura são números válidos
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("Por favor, insira valores válidos para peso e altura.");
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);

    const value = document.getElementById('value');
    let description = '';

    value.classList.add('attention');
    document.getElementById('infos').classList.remove('hidden');

    if (bmi < 18.5) {
        description = 'Seu peso está baixo!';
    } 
    else if (bmi >= 18.5 && bmi < 25) {
        description = 'Você está no peso ideal!';
        value.classList.remove('attention');
        value.classList.add('normal');
    } 
    else if (bmi >= 25 && bmi <= 30) {
        description = 'Cuidado, você está com sobrepeso!';
    } 
    else if (bmi > 30 && bmi <= 35) {
        description = 'Cuidado, você está com obesidade moderada!';
    } 
    else if (bmi > 35 && bmi <= 40) {
        description = 'Cuidado, você está com obesidade severa!';
    } 
    else {
        description = 'Cuidado, você está com obesidade mórbida!';
    }

    value.textContent = bmi.replace('.', ',');
    document.getElementById('description').textContent = description;
});
