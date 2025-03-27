const student = {
    firstName: "Bob",
    LastName: "Smith"
    Grades: [80, 90, 75],
    getFullName: function() {
        return this.firstName + " " + this.LastName;
    };
    getAverageGrade: function(){
        let sum = 0;
        for (let i = 0; < this.grade.length; i++){
        sum += this.grades[i];
    }
    return sum / this.grades.length;

}
};
console.log(student.getFullName());
console.log(student.getAverageGrade());