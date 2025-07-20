function calculateBMI() {
    const heightCm = document.getElementById('height').value;
    const weightKg = document.getElementById('weight').value;

    if (heightCm <= 0 || weightKg <= 0) {
        alert("Please enter positive values for height and weight.");
        document.getElementById('bmiResult').textContent = "";
        document.getElementById('bmiCategory').textContent = "";
        return;
    }

    const heightM = heightCm / 100; // cmをmに変換
    const bmi = weightKg / (heightM * heightM);
    const bmiResultElement = document.getElementById('bmiResult');
    const bmiCategoryElement = document.getElementById('bmiCategory');

    bmiResultElement.textContent = `your BMI: ${bmi.toFixed(2)}`;

    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        category ="Normal";
    } else if (bmi >= 25 && bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obese";
    }
    bmiCategoryElement.textContent = `category: ${category}`;
}