var countries:Array<any> = ["Japan","United States of America","United Kingdom","Russian Federation","India","Algeria","South Africa"];
var countriesMappings:any = {
    "United States of America": "1",
    "United Kingdom": "UK",
    "Russian Federation": "Russia",
}
var updatedCountries = countries.map(x => {
    return countriesMappings[x]?countriesMappings[x]:x;
});
console.log(updatedCountries);
console.log(countriesMappings["America"]);