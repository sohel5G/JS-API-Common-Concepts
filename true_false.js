// // Truthy 
//     true
//     4 or -4
//     'any string' or ' ' 1ta kali string also truthy
//     '0'


// // falsy 
//     false
//     '' Just a empty string is false 
//     0 
//     undefined
//     null
//     empty object & array




const x = '0';
if (x) {
    console.log('This is truthy');
} else {
    console.log('This is falsy');
}

const y = null;
if (!y) {
    console.log('value is falsy');
}

const z = ' ';
if (!!z) {
    console.log('value is truthy')
}



