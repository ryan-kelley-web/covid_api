//api url 
const globalSummary = 'https://api.covid19api.com/summary';

//assigning vars 
const newConfmBtn = document.getElementById('newConfm_dropdown-item');

const newDeathBtn = document.getElementById('newDeath_dropdown-item');

const newRecovBtn = document.getElementById('newRecov_dropdown-item');

const totConfmBtn = document.getElementById('totConfm_dropdown-item');

const totDeathBtn = document.getElementById('totDeath_dropdown-item');

const totRecovBtn = document.getElementById('totRecov_dropdown-item');

//jumbo default is hidden
const jumbo = document.querySelector('.container');

// jumbo.style = 'visibility: hidden;';

jumbo.style.visibility = 'hidden';

// //api fetch func
// function peek_globalSummary(e) {
//     fetch(globalSummary)
//         .then(res => res.json())
//         .then(json => display_globalSummary(json));
// }

//api fetch func new school (async)
async function peek_globalSummary(e) {
    let response = await fetch(globalSummary)
    let json = await response.json();
    display_globalSummary(json);
}

peek_globalSummary();

//api display func (master func)
function display_globalSummary(globalSummaryData) {
    //eLs, calling all sub funcs
    newConfmBtn.addEventListener('click', newConfmFunc);

    newDeathBtn.addEventListener('click', newDeathFunc);

    newRecovBtn.addEventListener('click', newRecovFunc);

    totConfmBtn.addEventListener('click', totConfmFunc);

    totDeathBtn.addEventListener('click', totDeathFunc);

    totRecovBtn.addEventListener('click', totRecovFunc);

    //sub func
    function newConfmFunc() {

        let newConfm = globalSummaryData.Countries[179].NewConfirmed;
        //assign var to target elt

        console.log(globalSummaryData.Countries[179].NewConfirmed);
        //conslog target elt

        document.getElementById('selectedStat').innerText = newConfm;
        //superimposing innerText (ie. newConfm var) into selectedStat id html elt

        document.getElementById('selectedDesc').innerText = 'New confirmed cases of Covid-19 in the US';
        //superimposing innerText (ie. custom desc) into selectedDes id elt

        jumbo.style = 'visibility: visible;';
        //lifts jumbo hidden default to display api data
    }

    function newDeathFunc() {

        let newDeath = globalSummaryData.Countries[179].NewDeaths;

        console.log(globalSummaryData.Countries[179].NewDeaths);

        document.getElementById('selectedStat').innerText = newDeath;

        document.getElementById('selectedDesc').innerText = 'New deaths from Covid-19 in the US';

        jumbo.style = 'visibility: visible;';
    }

    function newRecovFunc() {

        let newRecov = globalSummaryData.Countries[179].NewRecovered;

        console.log(globalSummaryData.Countries[179].NewRecovered);

        document.getElementById('selectedStat').innerText = newRecov;

        document.getElementById('selectedDesc').innerText = 'New recoveries from Covid-19 in the US';

        jumbo.style = 'visibility: visible;';
    }

    function totConfmFunc() {

        let totConfm = globalSummaryData.Countries[179].TotalConfirmed;

        console.log(globalSummaryData.Countries[179].TotalConfirmed);

        document.getElementById('selectedStat').innerText = totConfm;

        document.getElementById('selectedDesc').innerText = 'Total confirmed cases of Covid-19 in the US';

        jumbo.style = 'visibility: visible;';
    }

    function totDeathFunc() {

        let totDeath = globalSummaryData.Countries[179].TotalDeaths;

        console.log(globalSummaryData.Countries[179].TotalDeaths);

        document.getElementById('selectedStat').innerText = totDeath;

        document.getElementById('selectedDesc').innerText = 'Total dead from Covid-19 in the US';

        jumbo.style = 'visibility: visible;';
    }

    function totRecovFunc() {

        let totRecov = globalSummaryData.Countries[179].TotalRecovered;

        console.log(globalSummaryData.Countries[179].TotalRecovered);

        document.getElementById('selectedStat').innerText = totRecov;

        document.getElementById('selectedDesc').innerText = 'Total of those who have recovered from Covid-19 in the US';

        jumbo.style = 'visibility: visible;';
    }

}























