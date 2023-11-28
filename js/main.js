
function chart()

{


  fetch('https://data.cityofnewyork.us/api/views/rc75-m7u3/rows.json?accessType=DOWNLOAD')
  .then(response => {
    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json(); // Parse JSON from the response
  })
  .then(data => {
    // Use the data here
    console.log(data);
    // You can now use this data to populate your chart or do other tasks
  })
  .catch(error => {
    // Handle any errors
    console.error('There was a problem with the fetch operation:', error);
  });




}



































function myFunction()
{
document.getElementById("demo").innerHTML=""
}

function addition(numbers)
{
    var a=5;
    var b=10;
    var c=a+b;
    document.getElementById("CalcVar").innerHTML("The value of C is ")

}




document.addEventListener('DOMContentLoaded', function() {
    var ulElement = document.getElementById('links');
    var liElement = document.createElement('li');
    liElement.appendChild(document.createTextNode('created by main.js'));
  
  });
/**
 * Sample code
 */
document.addEventListener('DOMContentLoaded', function() {
  var ulElement = document.getElementById('links');
  var liElement = document.createElement('li');
  liElement.appendChild(document.createTextNode('created by main.js'));

 
});
