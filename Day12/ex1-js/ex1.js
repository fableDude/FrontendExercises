function Calculator(a,b){
    this.a=a;
    this.b=b;
}
Calculator.prototype.add=function(){
    return this.a + this.b;
}

Calculator.prototype.sub = function(){
    return this.a - this.b;
}

Calculator.prototype.mul = function(){
    return this.a * this.b;
}

Calculator.prototype.log = function(){
    console.log(this.a+' + '+this.b+' = '+this.add());
    console.log(this.a+' - '+this.b+' = '+this.sub());
    console.log(this.a+' * '+this.b+' = '+this.mul());
}

var c1 = new Calculator(5,10);
var c2 = new Calculator(8,3);
c1.log();
c2.log();

