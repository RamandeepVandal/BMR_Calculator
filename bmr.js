/*
activity level and calculations

    --BMR:
    male -> bmr = 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) - (5.677 x age in years)
    female -> bmr = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) - (4.330 x age in years)
    
    --activity level:
    1 -> total = 1.2 * bmr
    2 -> total = 1.375 * bmr
    3 -> total = 1.55 * bmr
    4 -> total = 1.725 * bmr

    --calorie deficit, maintain, calorie surplus:
    deficit -> total - 500;
    maintain -> total;
    surplus -> total + 500;
*/

const checkBMR = () => {
    let activityLvl = document.getElementById('activity-level').value;
    let age = document.getElementById('age').value;
    let gender = document.getElementById('gender').value;
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    // bmr value
    let bmr;
    if (gender === 'male') {
        bmr = ((88.362 + (13.397 * parseFloat(weight)) + (4.799 * parseFloat(height))) - (5.677 * parseFloat(age)));
    } else {
        bmr = ((447.593 + (9.247 * parseFloat(weight)) + (3.098 * parseFloat(height))) - (4.330 * parseFloat(age)));
    }

    // activity lvl
    let daily;
    if (activityLvl === 1) {
        daily = 1.2 * bmr;
    } else if (activityLvl === 2) {
        daily = 1.375 * bmr;
    } else if (activityLvl === 3) {
        daily = 1.55 * bmr;
    } else {
        daily = 1.725 * bmr;
    }

    // calculate deficit, maintain, surplus
    let normalDeficit = parseFloat(daily - 500);
    let normalSurplus = parseFloat(daily + 500);
    let extremeDeficit = parseFloat(daily - 800);
    let extremeSurplus = parseFloat(daily + 800);

    // span objects
    let usrBMR = document.getElementById('bmr');
    let usrTDEE = document.getElementById('tdee');
    let usrLoss1 = document.getElementById('lossNormal');
    let usrLoss2 = document.getElementById('lossExtreme');
    let usrGain1 = document.getElementById('gainNormal');
    let usrGain2 = document.getElementById('gainExtreme');
  
    // change the value of the span tags
    usrBMR.innerHTML = Math.floor(bmr);
    usrTDEE.innerHTML = Math.floor(daily);
    usrLoss1.innerHTML = Math.floor(normalDeficit);
    usrLoss2.innerHTML = Math.floor(extremeDeficit);
    usrGain1.innerHTML = Math.floor(normalSurplus);
    usrGain2.innerHTML = Math.floor(extremeSurplus); 

}