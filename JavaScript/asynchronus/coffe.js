export function makeCoffee(name, callback){
    const estimationTime = 5000;
    let isSuccess = false;


    const inSecond = estimationTime / 1000;
    console.log(`Mohon menunggu. Pramusaji  sedang membuat kopi dalam ${inSecond}`);

    setTimeout(() => {
        const number  = Math.random();
        if (number > 0.3) {
            isSuccess = true;
        }

        if(!isSuccess){
            callback( new Error('Gagal membuat kopi.'), null);
            return;
        }

        console.log('Pramusaji selesai membuat kopi.');
        callback(null, name);
    }, estimationTime);
}

export function sendCoffee(name, callback){
    const estimationTime = 2000;
    let isSuccess = false;

    console.log('Pramusaji sedang mengantarkan Kopi pesanan.');

    setTimeout(() => {
        const number = Math.random();
        if(number > 0.3){
            isSuccess = true;
        }

        if(!isSuccess){
            callback(new Error('Gagal mengirimkan kopi.'), null);
            return;
        }

        console.log('Pramusaji sudah sampai ke meja');
        callback(null, name);
    }, estimationTime);
}