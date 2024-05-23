function reverseString(str) {
    const sliceWord = str.slice(0, -1);
    const reverse = (str) => {
        return str.split("").reverse().join("");
      };
    const result = reverse(sliceWord) + str.slice(-1);
    return result;
   }
console.log(reverseString('NEGIE1'));