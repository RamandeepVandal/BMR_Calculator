/*
activity level and calculations

    --BMR:
    male -> bmr = (66 + (6.23*weight) + (12.7*height) - (6.8*age));
    female -> bmr = (665 + (4.35*weight) + (4.7*height) - (4.7*age));
    
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
        bmr = (66 + (6.23 * parseFloat(weight)) + (12.7 * parseFloat(height)) - (6.8 * parseFloat(age)));
    } else {
        bmr = (665 + (4.35 * parseFloat(weight)) + (4.7 * parseFloat(height)) - (4.7 * parseFloat(age)));
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
    let deficit = parseFloat(daily - 500);
    let maintain = parseFloat(daily);
    let surplus = parseFloat(daily + 500);

    // span objects
    let lossS = document.getElementById('loss');
    let gainS = document.getElementById('gain');
    let maintainS = document.getElementById('maintain');

    lossS.innerHTML = Math.floor(deficit);
    gainS.innerHTML = Math.floor(surplus);
    maintainS.innerHTML = Math.floor(maintain);

}