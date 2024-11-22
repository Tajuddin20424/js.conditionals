const age = 62;
const price = 500;
if (age <= 12) {
    console.log('you can eat free');
}
else if (age >= 60) {
    // 50% discount
    const discount = price * 50 / 100;
    const amount = price - discount;
    console.log(payAmount);
}

else if(age >= 50){
    // 25% discount
    const discount = price * 50 /100;
    const amount = price - discount;
    console.log(payAmount);
}


else if(age >= 40){
    // 10% discount
    const discount = price * 50 /100;
    const amount = price - discount;
    console.log(payAmount);
}

else {
    console.log(price);
}