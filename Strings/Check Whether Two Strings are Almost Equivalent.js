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
