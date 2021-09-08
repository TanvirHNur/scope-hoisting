
// var is  hoisting thing
// const and let  
const fatherSMoney = 100000;

function brideGroom(age, earning=60000) {
    console.log(trueAge)
    console.log(age);
    console.log(earning);

    const decision = canMarry(15000);
    console.log(decision)

    var trueAge  = age+ 4;



    
  function canMarry (expense) {
        const remaining = fatherSMoney+ earning - expense;
        if(earning > 1000){
            return true;
        }
        return false;
    }



    // ReferenceError: Cannot access 'canMarry' before initialization
    // const canMarry = (expense) =>{
    //     const remaining = earning - expense;
    //     if(earning > 1000){
    //         return true;
    //     }
    //     return false;
    // }


 /*    
    // var's value can't hoist
    var  canMarry = (expense) =>{
        const remaining = earning - expense;
        if(earning > 1000){
            return true;
        }
        return false;
    } */

}

brideGroom(30)