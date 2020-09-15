const globalSummary = 'https://api.covid19api.com/summary'
    //new
    let usa_newConfm = globalSummaryData.Countries[179].NewConfirmed;
    let usa_newDeath = globalSummaryData.Countries[179].NewDeaths;
    let usa_newRecov = globalSummaryData.Countries[179].NewRecovered;
    //tot
    let usa_totConfm = globalSummaryData.Countries[179].TotalConfirmed;
    let usa_totDeath = globalSummaryData.Countries[179].TotalDeaths;
    let usa_totRecov = globalSummaryData.Countries[179].TotalRecovered;
    
function peek_globalSummary() {
    fetch(globalSummary)
    .then(res => res.json())
    .then(json => display_globalSummary(json));
}

peek_globalSummary();

function display_globalSummary(globalSummaryData) {
    console.log(globalSummaryData.Countries[179]);

}

