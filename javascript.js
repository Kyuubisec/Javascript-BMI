function calculateBMI(weight, height) {
    return weight / (height ** 2); // Výpočet BMI
}


// BMI
function calculateAndDisplayBMI() {
    const weight = parseFloat(document.getElementById("weight").value); // Hmotnost (kg)
    let height = parseFloat(document.getElementById("height").value); // výška (cm)


    if (height > 10) {
        height /= 100; // prevod z cm na m
    }

    if (!weight || !height || height <= 0) {
        alert("Zadej platné hodnoty pro hmotnost a výšku.");
        return;
    }

    const bmi = calculateBMI(weight, height); // výpočet BMI
    let category = "";

    if (bmi < 18.5) {
        category = "Podváha";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normální váha";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Nadváha";
    } else {
        category = "Obezita";
    }

    document.getElementById("bmiResult").textContent = `Vaše BMI je ${bmi.toFixed(2)} (${category}).`;
}

// Funkce BMR
function calculateBMR(weight, height, age, gender, activityLevel) {
    height *= 100; // Převod výšky z m na cm

    let bmr = 0;
    if (gender === "male") {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age); // BMR muž
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age); // BMR žena
    }

    return bmr * activityLevel; // aktivity
}

// BMR
function calculateAndDisplayBMR() {
    const weight = parseFloat(document.getElementById("weight").value); // Hmotnost (kg)
    let height = parseFloat(document.getElementById("height").value); // výška (cm)
    const age = parseInt(document.getElementById("age").value); // věk
    const gender = document.getElementById("gender").value; // pohlaví
    const activityLevel = parseFloat(document.getElementById("activityLevel").value); // Aktivita

    if (height > 10) {
        height /= 100; // převod z cm na m
    }

    if (!weight || !height || !age || height <= 0 || age <= 0) {
        alert("Zadejte platné hodnoty pro hmotnost, výšku a věk.");
        return;
    }

    const bmr = calculateBMR(weight, height, age, gender, activityLevel); // Výpočet BMR
    document.getElementById("bmrResult").textContent = `Doporučený denní příjem kalorií je ${bmr.toFixed(2)} kcal.`;
}
