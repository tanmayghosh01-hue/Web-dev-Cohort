setInterval(myCallback, 1000);

let counter = 1;

function myCallback() {
    console.log(counter+"s");
    counter++;
}