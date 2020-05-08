let input = document.getElementById("country");
let wrapper = document.getElementById("countries");
let countries = [];



let api = "https://coronavirus-19-api.herokuapp.com/countries/";

function getAllCountries(){

    fetch(api)
        .then((response) => {
           
            return response.json();
          
            
        })
        .then((data) => {
          showCountries(data);
          
        })

        .catch((error) => {
           console.log(error);
        });
    }

getAllCountries();

function showCountries(data){

    data.forEach(country => {
        var markup = `
        <div class = "box" id= ${country.country}>
           <h2>${country.country}</h2>
           <div class = "inner-holder">
           <div class = "right_keywords">
             <ul class="right">
                <li>Infections</li>
                <li>Today Infections</li>
                <li>Deaths</li>
                <li>Today Deaths</li>
                <li>Recovered</li>
                <li>Active</li>
                <li>Critical</li>

           </div>
           <div class = "left_keywords">
                <ul class="right">
                    <li>${country.cases}</li>
                    <li>${country.todayCases}</li>
                    <li>${country.deaths}</li>
                    <li>${country.todayDeaths}</li>
                    <li>${country.recovered}</li>
                    <li>${country.active}</li>
                    <li>${country.critical}</li>
                    
                </ul>
         </div>
         </div>       
           </div>
        </div>
       
       `;
       wrapper.innerHTML += markup;
       
    })
}



function myFilter() {

    filter = input.value.toUpperCase();
    let box  = document.getElementsByClassName("box");
    for (const country of box) 
    {
        if (country.id.toUpperCase().indexOf(filter) > -1) {
            country.style.display = "";
        } 
        else {
            country.style.display = "none";
        }
    }

  }