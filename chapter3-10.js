const person = {
    name: "John",
    age: 30,
    city: "New york"
};
for (let key in person) {
    console.log("key:", key, "value": person[key]);
}