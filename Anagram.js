// anagram =>if two string have a same lenght and equal number of same character 
// e.g. hello ->llheo (anagram)
//      hello ->llleo (not anagram)
//  condition

// check length of string

function isAnagram(string1,string2){
    if((string1.length)!==(string2.length)){
        return false;
    }
    let counter={};
    for(let letter of string1) {
     counter[letter]=(counter[letter] || 0)+1;
    //  console.log(counter[letter]);
        
    }
    for(let item of string2){
        if(!counter[item]){
            return false
        }
        counter[item] -=1;
    }
    return true;
    
    
}
console.log(isAnagram('heello','lleeho'));
