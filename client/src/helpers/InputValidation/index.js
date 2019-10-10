function isMaliciousString(val) {
    if (typeof val !== "string") {
        return true
    }
    
    let regex = /^[A-Za-z0-9\-\_]+/
    if (!val.match(regex)) {
        return true
    }

    let validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-@."
    for (let i = 0; i < val.length; i++) {
        if (!validChars.includes(val[i])) {
            return true
        }
    }

    return false
}

// helpers for input data validation
export function validateFirstName(val, ref) {
    // check for malicious scripts
    if (isMaliciousString(val)) {
        ref.className = 'invalidInput'
        return false
    }
    
    // check that val is entered
    if (val.length === 0){
        ref.className = 'invalidInput'
        return false
    }
    ref.className = ''
    return true
}

export function validateLastName(val, ref) {
    if (isMaliciousString(val)) {
        ref.className = 'invalidInput'
        return false
    }
    
    if (val.length === 0){
        ref.className = 'invalidInput'
        return false
    }
    ref.className = ''
    return true
}

export function validateEmail(val, ref) {
    if (isMaliciousString(val)) {
        ref.className = 'invalidInput'
        return false
    }
    
    // eslint-disable-next-line
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const valid = re.test(String(val).toLowerCase());
    if (!valid) {
        ref.className = 'invalidInput'
        return valid
    }
    ref.className = ''
    return valid
}

export function validateAge(val, ref) {
    if (val < 1 || val > 90) {
        ref.className = 'invalidInput'
        return false
    }
    ref.className = ''
    return true
}
