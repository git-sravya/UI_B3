class Student
{
    constructor(name,age,mobile){
        this.name=name;
        this.age=age;
        this.mobile=mobile;
    }
    display()
    {
        console.log(this.name);
        console.log(this.age);
        console.log(this.mobile);
    }
}


s=new Student('sam',22,99999);
s.display();

s1=new Student('Mark',21,98989899);
console.log(s1);
