// getter and setter?

// Function declarations
function incrementCounter() //function name
{
    var spanElement = document.getElementById('counter');       // retrieve "counter" id selector from html --> refer to the 0 that is displayed
    var count = spanElement.getAttribute('numberOFClicks');     // retrieve number of click attribute --> refer to the 0 behind the screen
    count++;
    spanElement.innerText = count;                              // assign count to the "counter" id selector (change its value)
    spanElement.setAttribute('numberOfClicks', count);          // set the attribute of update the number of click attribute with the count value
}

function toggleVisibility()
{
    var charImage = document.getElementById('chart1');
    if (chartImage.style.display === "none")
    {
        chartImage.style.display = "block";
    }
    else
    {
        chartImage.style.display = "none";
    }
}
// Script calls
// I want the interaction happen at the button called incrementButton that I created just now in HTML
document.getElementById('incrementButton').addEventListener('click', incrementCounter);