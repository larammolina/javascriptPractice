const sillySentence = (adjective, verb, noun) => `I am so ${adjective} because I ${verb} coding! Time to write some more awesome ${noun}!`

function canIVote(age) {
    if (age >= 18) {
      return true;
    } else {
      return false;
    }
}

function numImaginaryFriends(friends) {
    let imaginaryFriends = 33*friends/100;
    return Math.round(imaginaryFriends);
}
  

const rollTheDice = () => {
    let die1 = Math.floor(Math.random() * 6 + 1)
    let die2 = Math.floor(Math.random() * 6 + 1)
    return die1 + die2
} 

const agreeOrDisagree = (first, second) => {
    if (first === second) {
        return 'You agree!'
    } else {
        return 'You disagree!'
    }
}

const lifePhase = age => {
    if (age < 0 || age > 140) {
        return 'This is not a valid age'
    } else if (age < 4) {
        return 'baby'
    } else if (age < 13) {
        return 'child'
    } else if (age < 20) {
        return 'teen'
    } else if (age < 65) {
        return 'adult'
    } else {
        return 'senior citizen'
    }
}

const finalGrade = (midterm, final, homework) => {
    if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
        return 'You have entered an invalid grade.'
    }
    let average = (midterm + final + homework) / 3
    if (average < 60) {
        return 'F'
    }
    else if (average < 70) {
        return 'D'
    }
    else if (average < 80) {
        return 'C'
    }
    else if (average < 90) {
        return 'B'
    } else {
        return 'A'
    }
}


const reportingForDuty = (rank, lastName) => `${rank} ${lastName} reporting for duty!`

const calculateWeight = (earthWeight, planet) => {
    switch (planet) {
        case 'Mercury':
            return earthWeight * .378;
        case 'Venus':
            return earthWeight * .907;
        case 'Mars':
            return earthWeight * .377;
        case 'Jupiter':
            return earthWeight * 2.36;
        case 'Saturn':
            return earthWeight * .916;
        default:
            return 'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
    }
}

function truthyOrFalsy(value) {
    if (value) {
      return true;
    } else {
      return false;
    }
}


  