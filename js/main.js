// create a scope to limit our variables

{
    // set the navbar to dark by replacing the word light with dark in className
    let navBar = document.querySelector('nav');
        navBar.className = navBar.className.replaceAll('light', 'dark');
        // navBar.className = 'navbar navbar-dark bg-dark';

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
    let myHeader = document.getElementById('myHeader'); // defined above
    // console.log(myHeader);


    // create a fn to be executed when our event triggers
    function handleHeaderEvent(event){
        console.log('this is the event here:');
        console.log(event);
        // event.target is a property of the event object...you can name event anything you want, but not so w target
        let elementToChange = event.target; 
        console.log('this is event.target');
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
        button.addEventListener('mouseover', () => {
            // console.log('Button clicked!')
            // let body = document.body;
            document.body.className = `bg-${buttonColors[i]}`
        })
    }
}


// get the country from the form and display on the page
{
    //  grab the form
    let form = document.getElementById('countryForm');
    // let form = document.querySelectorAll('input');
    // console.log(form);

    // create a fn to handle submit event; 'e' for event, and 'e' = htmlelement
    async function handleSubmit(e){
        // preventDefault somehow prevents form from submitting default
        e.preventDefault();
        let inputCountry = e.target.countryName.value; // this is getting countryName and value from where? it is retrieving from the 'Enter Country Name" search box in the html???????????????? why does this not need an 'await'???
        let country = await getCountryInfo(inputCountry); // call the get country info fn w the data from the form
        // e for event, target is <form> element?, countryName in form?
        console.log(country);
        console.log(typeof country);
        buildCountryCard(country);
    }

    // Function that will fetch the data from the country API
    async function getCountryInfo(inputCountryStr){
        let res = await fetch(`https://restcountries.com/v3.1/name/${inputCountryStr}`) // returns a promise
        let data = await res.json() // need to separate .json from res since we need to call .json()?
        return data[0] // since this gives an array w info, looking for the data at index 0 of array; in case of china, has 4 indexes in list for diff territories, so this would give back the first, which is hong kong
    }

    // function that will take the country obj from the API and build an HTML card for it
    function buildCountryCard(countryObj){
        // create card div
        let card = document.createElement('div');
        card.className = 'card';

        // create a top image for the card
        let image = document.createElement('img');
        image.className = 'card-img-top';
        image.src = countryObj.flags.png;
        // add image as a child to the card div
        card.append(image);

        // create card body
        let cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        // create country name and population elements
        let countryTitle = document.createElement('h5');
        countryTitle.className = 'card-title';
        countryTitle.innerHTML = countryObj.name.common;

        let population = document.createElement('p');
        population.className = 'card-text ';
        population.innerHTML = `Population: ${countryObj.population.toLocaleString('en-US')}` // the toLocalString() converts a number to a comma separated string

        // add title and population to the card body
        cardBody.append(countryTitle);
        cardBody.append(population);

        // add the card body to the card
        card.append(cardBody);

        
        // create a column for the row
        let col = document.createElement('div');
        col.className = 'col-12 col-md-6 col-lg-3';
        
        // add the card as a child to the column
        col.append(card);

        
        // get the country display row and add our new column
        document.getElementById('countryDisplay').append(col);

        console.log(card);
    }

        // add handleSubmit fn as listener to submit event on form, form htmlelement is passed into 'e' above in fn
        form.addEventListener('submit', handleSubmit);
}