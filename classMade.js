class Bloger{
    constructor(firstName , secondName , chanalName){
        this.chanalName = chanalName ;
        this.firstName = firstName ;
        this.secondName =  secondName ;
    }

    Result(){
        console.log( `Канал ${this.chanalName} [ автор канала  ${this.secondName}  ${this.firstName}]`)
    }
}

const Max = new Bloger("Maxim" , "Galapalosov","+100500");

Max.Result();

const Ivan = new Bloger("ivan" , "Urgant","EveningUrgant");

Ivan.Result();