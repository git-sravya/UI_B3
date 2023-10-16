class vehicle
{
    constructor(brand,color,model)
    {
        this.brand=brand;
        this.color=color;
        this.model=model;
    }

    display()
    {
        console.log(this.brand);
        console.log(this.model);
        console.log(this.color);

    }
    
}

class Heavyvehicle extends vehicle
{
    brand;
    color;
    model;
    
    constructor(brand,color,model,noofwheels,ispermit)
    {
        super(brand,color,model);
        this.noofwheels=noofwheels;
        this.ispermit=ispermit;
    }

    display()
    {
        super.display();
        console.log(this.noofwheels);
        console.log(this.ispermit);
    }
}

v=new vehicle('Porsche','black',911);
v.display();

hv=new Heavyvehicle('Mercedes','Silver','G-wagon',8,true);
hv.display();
