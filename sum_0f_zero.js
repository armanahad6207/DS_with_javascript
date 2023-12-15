//[-5,-4,-3,-2,0,2,4,6,8]
//here we have to find that pair which will give zero after sum
// e.g. [-4,4] 
 function sumofZero(array){
    for( let number of array){
        for(let j=1; j<=array.length;j++){
            if((number+array[j])==0)
            return[number,array[j]];
        }
    }

 }
 let a=sumofZero([-5,-4,-3,-2,2,4,6,8]);
 console.log(a);