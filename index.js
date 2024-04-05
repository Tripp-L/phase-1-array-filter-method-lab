function findMatching(drivers, name) { // (name) is a string, but doesn't need "" or '' 
                                       // because (name) is an identifier 
                                       // that represents the values that will be
                                       // passed to the function when it's called; 
    return drivers.filter(function (driversName) { // This filters the (drivers) array; 
                                                   // So for each element in the (drivers) array,
                                                   // the anonymous function is called,
                                                   // and the current element is passed as (driversname);  
        return driversName.toLowerCase() === name.toLowerCase() // This converts the current driver name,
                                                                // and the (name) argument to lowercase;
    })
}

function fuzzyMatch(drivers, query) { // (drivers) is an array of driver names,
                                      // and (query) is a string representing the query to match;
    return drivers.filter(driver =>   // This filters the (drivers) array.
                                      // For each element in the (drivers) array,
                                      // the arrow function is called with the current element as (driver);
        driver.toLowerCase().startsWith(query.toLowerCase()) // This converts (driver)
                                                             // and the provided (query) argument to lower case;
                                                             // startsWith() checks if the lowercase driver name
                                                             //starts with the lowercase (query) string;
    )
}

function matchName(drivers, name) { // (drivers) is an array of driver objects,
                                    // and name is a string representing the name to match;
    return drivers.filter(driver => driver.name === name) // This filters the (drivers) array;
                                                          // For each element in the (drivers) array of objects,
                                                          // the arrow function is called with the current element as (driver);
                                                          // the (driver.name === name) checks if (name) property
                                                          // of the current driver object (driver.name)
                                                          // is exactly equal to the provided (name) argument;
}



