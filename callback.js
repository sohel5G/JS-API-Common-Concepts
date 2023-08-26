function greeting(person, name) {
    person(name);
}


function greetingHandlr(name){
    console.log('Good morning', name);
}

greeting( greetingHandlr, 'Sohel ' );


