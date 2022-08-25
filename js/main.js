// create a scope to limit our variables

{
    // set the navbar to dark by replacing the word light with dark in className
    let navBar = document.querySelector('nav');
        navBar.className = navBar.className.replaceAll('light', 'dark');   

    // create an array for the colors
    var buttonColors = ['primary', 'secondary', 'success', 'warning', 'danger', 'info'];

    // get the buttons from the document (children of col-2 buttons only) Nodelist type
    let myButtons = document.querySelectorAll('.col-2 > button');
    // console.log(myButtons);

    // loop through the buttons and apply a class to each button w the button colors
    for (let i = 0; i < myButtons.length; i++){
        // console.log(myButtons[i], buttonColors[i]);
        myButtons[i].className = `btn btn-${buttonColors[i]}`;
    }

    // add a header under the buttons in the container

    // first create the header
    let newHeader = document.createElement('h4');
    newHeader.id = 'myHeader';
    newHeader.className = 'text-center lead mt-3';
    newHeader.innerHTML = 'Created by Alex w the help of JavaScript';

    // get the row of buttons
    let buttonRow = document.getElementById('row-1'); // you can also do document.getElementByClassName('row')[0]
    // console.log(buttonRow);

    // add newHeader after the row of buttons (vs appending to the end)
    buttonRow.after(newHeader);
};


// create a new scope
{
    // get the header we created
    let myHeader = document.getElementById('myHeader');
    console.log(myHeader)


    // create a fn to be executed when our event triggers
    function handleHeaderEvent(event){
        console.log(event);
        // event.target is a property of the event object...you can name event anything you want but not target
        let elementToChange = event.target;
        console.log(elementToChange);
        if (elementToChange.style.color === 'black'){
            elementToChange.style.color = 'red';
        } else {
            elementToChange.style.color = 'black';
        }
    }



    // add the handleHeaderEvent fn as an event listener on the header element
    myHeader.addEventListener('mouseover', handleHeaderEvent) // on mouseover
    myHeader.addEventListener('dblclick', handleHeaderEvent) // double click
    myHeader.addEventListener('click', handleHeaderEvent) // single click
}



// create a new scope
// add event listeners ro our buttons -> change the background
{
    // console.log(buttonColors)
    let myButtons = document.querySelectorAll('.col-2 > button');

    for (let i = 0; i < myButtons.length; i++){
        let button = myButtons[i];
        // console.log(button)
        // add an event listener
        button.addEventListener('click', () => {
            // console.log('Button clicked!')
            let body = document.body;
            body.className = `bg-${buttonColors[i]}`
        })
    }
}