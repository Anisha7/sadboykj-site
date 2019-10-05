// helpers for input data validation
export function validateFirstName(val, ref) {
    if (val.length === 0){
        ref.className = 'invalidInput'
        return false
    }
    ref.className = ''
    return true
}

export function validateLastName(val, ref) {
    if (val.length === 0){
        ref.className = 'invalidInput'
        return false
    }
    ref.className = ''
    return true
}

export function validateEmail(val, ref) {
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
