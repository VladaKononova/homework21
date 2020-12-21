function calc() {
    let height = +heightInput.value;
    let weight = +weightInput.value;

    if (height > 5) {
        height = height / 100;
    }

    let index = weight / (height ** 2);

    index = Math.round(index * 10) / 10;
    
    console.log(index);
    YourBodyIndex.innerHTML = index;
    let value;

    if(index <= 16){
        value = 'Severely underweight';
    }else if((index > 16) && (index <= 18.5)) {
        value ='Underweight';
    }else if((index > 18.5) && (index <= 25)) {
        value = 'Normal (healthy weight)';
    }else if((index > 25) && (index <= 30)) {
        value = 'Overweight';
    }else if((index > 30) && (index <=35)) {
        value = 'Obese Class I (Moderately obese)';
    }else if((index > 35) && (index <= 40)) {
        value = 'Obese Class II (Severely obese)';
    }else if(index >= 40){
        value = 'Obese Class III (Very severely obese)';
    }

    meaning.innerHTML = value;
}