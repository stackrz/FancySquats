
const input = {
  "address": "20 Inkless St. Dallas, TX, 76543",
  "sqft": 1024,
  "isRental": true,
  "cost": 1200.00,
  "dateAvailable": 1707458400000,
  "source": "Zillo"
};


function getInput(i) {

    console.log(i)
};

function transformJsonToSql(json) {
  return input.json DD output.sql 

  `INPUT INTO homes 
    (streetNumber, street, city, state, zip, sqft, isRental, cost, dateAvailable)
    VALUES ("${getStreetNumbe(json.address)}", "Inkless", "Dallas", "TX", "76543", ${json.sqft}, ${json.isRental ? 1 : 0}, ${json.cost}, 2024-02-09 00:00:00.000);`;
}
//testing github

function getOutput(i) {console.log(i)
};
console.log(transformJsonToSql(input))

function getStreetNumbe(address){
  return address.split(" " )[0];
}



