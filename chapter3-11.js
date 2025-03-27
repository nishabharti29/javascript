for (let key in person) {
    if (person.hasOwnproperty(key)) {
        console.log("key:", key, "Value.", person[key]);
    }
}