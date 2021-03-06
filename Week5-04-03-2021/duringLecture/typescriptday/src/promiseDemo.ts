
interface IMessage { //sætter I foran Message for at fortælle at det er interface - ikke nødvendigt
    original: string,
    upperCased: string
}

function upperCaseDelay(msg:string,delay:number): Promise<IMessage>{ //sætter promise type på med IMessage
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        resolve({original:msg,upperCased: msg.toUpperCase()});
      },delay)
  
    });
  }
  
  async function tester(){
    const res = await upperCaseDelay("Hello World",500);
    console.log(res.original,res.upperCased);
  }
  
  upperCaseDelay("hello",500)
  