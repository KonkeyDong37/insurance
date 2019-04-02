// Variables
const form = document.getElementById('request-quote');
const html = new HTMLUI();


// Event listeners
eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', function() {
        // Create the <option> for the years
        html.dispalyYears();
    
    });
    
    // When the form is submitted
    form.addEventListener('submit', function(e) {
        e.preventDefault();
    
        // Read the values from the form
        const make = document.getElementById('make').value;
        const year = document.getElementById('year').value;

        // Read the radio buttons
        const level = document.querySelector('input[name="level"]:checked').value;

        // Check that all the field have something
        if(make === '' || year === '' || level === '') {
            html.dispalyError('All the fields are mandatory')
        } else {
            // Clear the previous qoutes

            const prevResult = document.querySelector('#result div');
            if(prevResult != null) {
                prevResult.remove();
            }
            // Make the quotation
            const insurance = new Insurance(make, year, level);
            const price = insurance.calculateQuotation(insurance);

            // Print the result fromHTMLUI();
            html.showResult(price, insurance);
        }
    });
};