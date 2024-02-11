//data = newString())
//    console.log(data);
//  };

//const doThing = (thing) => {
//    return thing.doSomething();
//};

// }function doThing(thing) {
// }    return thing.doSomething();
//}


//const getStdIn = parse("stdOut") 

//function getStdIn() {
//    return stdOut.toPrint();
//};

const input = {
  "address": "1234 Inkless St. Dallas, TX, 76543",
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
  return `INPUT INTO homes 
    (streetNumber, street, city, state, zip, sqft, isRental, cost, dateAvailable)
    VALUES ("1234", "Inkless", "Dallas", "TX", "76543", ${json.sqft}, ${json.isRental ? 1 : 0}, ${json.cost}, 2024-02-09 00:00:00.000);`;
}


function getOutput(i) {console.log(i)
};
console.log(transformJsonToSql(input))
