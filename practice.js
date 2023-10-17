let i = 0;

i = 5 ;

let array1 = [[i, i+1, i+2, i+3], [i+5, i+6, i+7, i+8]] ;

function arrayzz(x,y){
    console.log(eval(`array${x}[${y}]`));
}

console.log(array1[1]);

arrayzz(1,1); 