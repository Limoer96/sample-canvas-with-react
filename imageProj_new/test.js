class Test{
    constructor(a){
        this.a = a;
    }
    doTest(){
        return () =>{
            console.log(this.a);
        }
    }
}
var b = new Test(10);
b.doTest()();



