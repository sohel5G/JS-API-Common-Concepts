
function kitchen() {
    let roast = 0;
    return function () {
        roast++;
        return roast;
    }
}

let frst = kitchen();
console.log(frst());
console.log(frst());
console.log(frst());
console.log(frst());
console.log(frst());

let frst2 = kitchen();
console.log(frst2());
console.log(frst2());
console.log(frst2());
console.log(frst2());

let frst3 = kitchen();
console.log(frst3());
console.log(frst3());
console.log(frst3());
console.log(frst3());
console.log(frst3());




















