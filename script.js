//------------------------------------------------------------------------------------------------------------------------------//
//Call :- With call() , an object can use a method belonging to another object.

var john = {

    name:'john',
    job: 'teacher',
    presentation: function(speech1,speech2)
    {
        console.log("My name is "+this.name+" I'm working as a "+this.job+speech1+speech2);
    }
}

john.presentation(" Nice to meet you !" , "What's up");

var Emy = {

    name:'Emy',
    job: 'designer',
}

john.presentation.call(Emy," Hi"," Nice to meet you");

//------------------------------------------------------------------------------------------------------------------------------//
//Apply :- similar to apply method but it accepts arguments as array.
//john.presentation.apply(Emy,[" Hi"]);


//------------------------------------------------------------------------------------------------------------------------------//
//Bind :- similar to call method , bind does not immediately call a function but generates a copy of it .

//bind method return a function , so let's store the function somewhere
var johnfriendly = john.presentation.bind(john," Hello");
johnfriendly("Missing you <3");
//bind also is useful when resetting arguments
johnfriendly("Missing you :P");