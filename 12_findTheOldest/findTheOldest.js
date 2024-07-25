const findTheOldest = function(infos) {
    let res = {};
    let oldestAge = 0;
    for (let i=0; i<infos.length; i++){
        let yearOfDeath = 2024;
        if (infos[i].hasOwnProperty('yearOfDeath')){
            yearOfDeath = infos[i].yearOfDeath;
        }
        let curAge = yearOfDeath - infos[i].yearOfBirth;
        if (curAge > oldestAge){
            oldestAge = curAge;
            res = infos[i];
        }
    }
    return res;

};

// Do not edit below this line
module.exports = findTheOldest;
