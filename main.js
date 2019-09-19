let name= {
    fname:"mayank",
    lname:"kumar",
}

let pname = function(){
    console.log(this.fname +" "+ this.lname)
}

let printmyname= pname.bind(name);
printmyname();


Function.prototype.mybind = function(...args){
    let obj=this;
    params = args.slice(1);
    return function (){
        obj.apply(args[0],params);
    }
}

let printmyname2 = pname.mybind(name);