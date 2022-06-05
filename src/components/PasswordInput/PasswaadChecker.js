/**
 * Takes in a password and checks for password strength
 * Supports only ASCII 0-127
 * 
 * @param {string} password 
 * @returns {String}
 */
function PasswaadChecker(password) {

    const N =password.length;

    if(N <= 6) {
        return "Weak";
    }

    let hasUpperCase =false;
    let hasLowerCase =false;
    let hasNumber =false;
    let hasSpecialChar =false;
    for(var i=0; i < N; i++) 
    {
        let code = password.charCodeAt(i);

        if(code >= 65 && code <= 90)
        {
            // hasUpperCase latin
            hasUpperCase =true;
        } 
        else if(code >= 97 && code <= 122)
        {
            // hasLowerCase latin
            hasLowerCase=true;
        } 
        else if(code >= 48 && code <= 57)
        {
            // hasNumbers
            hasNumber=true;
        }
        else if(code < 127)
        {
            // any other char
            hasSpecialChar=true;
        }
    }
    
    if(hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && N > 8)
    {
        return "Strong";
    }  
    else if((hasUpperCase && hasSpecialChar) || (hasLowerCase && hasSpecialChar) && N > 8) {
        return "Strong"
    }
    else if(hasUpperCase && hasLowerCase && N > 8) {
        return "Moderate"
    }
    else if((hasUpperCase && hasNumber) || (hasLowerCase && hasNumber) && N > 8 )
    {
        return "Moderate"
    }

}

export default PasswaadChecker