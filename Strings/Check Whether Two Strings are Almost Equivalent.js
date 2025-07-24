//brut force
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    let check={}
    for(let char of word1){
        check[char]=(check[char]||0)+1;
    }
    for(let char of word2){
        check[char]=(check[char]||0)-1;
    }
    for(let key in check){
        if(Math.abs(check[key])>3)
        return false;
    }
    return true
    
};
//take the sme time comblexity 
/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var checkAlmostEquivalent = function(word1, word2) {
    const freq= new Array(26).fill(0);
    for(let char of word1){
       freq[char.charCodeAt()-97]++;
    }
    for(let char of word2){
        freq[char.charCodeAt()-97]--;
    }
    for(let char of freq){
        if(Math.abs(char)>3)
        return false ;
    }
    return true;
    
};
