
module.exports = {

    invertText: (text)=>{
        let newText = [...text].reverse().join("");
        return {
            text: newText,
            palindrome: text.toLowerCase() === newText.toLowerCase() ? true : false
        }
    }

}