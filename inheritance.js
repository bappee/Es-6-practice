

class parent{
    constructor(){
        this.fatherName="Bashir";

    }
}

class child extends parent{
    constructor(name){
    super();
    this.name=name;
    }

    GetName(){
        return this.name + " " + this.fatherName;
    }
}
const baby= new child("babu")
const baby2= new child("Tom")
console.log(baby.fatherName,baby2);