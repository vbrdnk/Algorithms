async function getNumber(x) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(x);
        }, 1000);
    });  
}

async function printRandomNumber(x) {
    let a = await getNumber(20);
    let b = await getNumber(25);

    console.log(x + a + b);
} 

printRandomNumber(50);