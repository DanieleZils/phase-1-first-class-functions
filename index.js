function receivesAFunction(Spy){
    Spy()
};

function returnsANamedFunction(){
   return function namedFunction() {
    console.log('I am a function')
   };
}

function returnsAnAnonymousFunction(){
    return function () {
        console.log('I am an anonymous function')
    };
}