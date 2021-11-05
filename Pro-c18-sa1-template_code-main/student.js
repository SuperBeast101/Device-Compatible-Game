
class Student
{
    Student(name, age, grade)
    {
       this.name = "john";
       this.age = 12;
       this.grade = 6;
    }
}

display() 
{
    console.log(this.name)
    console.log(this.age);
    console.log(this.grade);
}