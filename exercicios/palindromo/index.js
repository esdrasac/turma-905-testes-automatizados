const isPalindrome = (word) => {
    const reverseWord = word.split('').reverse().join('')

    return word === reverseWord
}

console.log(isPalindrome('arara'))