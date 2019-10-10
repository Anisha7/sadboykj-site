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
};

// helpers for input data validation
function validateFirstName(val) {
    // check for malicious scripts
    if (isMaliciousString(val)) {
        return false
    }
    // check that val is entered
    if (val.length === 0){
        return false
    }
    return true
};

function validateLastName(val) {
    if (isMaliciousString(val)) {
        return false
    }
    
    if (val.length === 0){
        return false
    }
    return true
};

function validateAge(val) {
    if (val < 1 || val > 90) {
        return false
    }
    return true
};



module.exports = {
    validateFirstName,
    validateLastName,
    validateAge
};
