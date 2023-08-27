function sum(a, b, c) {
    const result = a + b + c;

    // console.log(arguments.length);
    // console.log(arguments[7]);
    // console.log(typeof arguments);

    // for (let x of arguments){
    //     console.log(x);
    // }

    let totalSum = Object.values(arguments).reduce((prev, cur) => prev + cur, 0);
    let findSmall = Object.values(arguments).filter(x => x < 10);

    let makeArr = [...arguments];  // Object take array te convert kora;
    makeArr.push('new one')
    return makeArr;
}

const total = sum(2, 4, 7, 3, 4, 7, 21, 36, 86);
console.log(total);

//console.log(sum.length);  // Function er koyta parametar ase seyta deka jabe


