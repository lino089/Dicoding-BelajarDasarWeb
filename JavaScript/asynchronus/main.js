import { makeCoffee, sendCoffee } from "./coffe.js";

const order  = 'Kopi Espreso';

console.log(`Saya memesan ${order} di kafe.`);

makeCoffee(order, (makeCoffeeError, makeCoffeeData) => {
    if(makeCoffeeError){
        console.error(makeCoffeeError);
        return;
    }

    sendCoffee(makeCoffeeData, (sendCoffeeError, sendCoffeeData) => {
        if(sendCoffeeError){
            console.error(sendCoffeeError);
            return;
        }

        console.log(`Pramusaji memberikan ${sendCoffeeData} pesanan.`);
        console.log(`Saya mendapatkan ${sendCoffeeData} dan menghabiskannya`);
    });
});