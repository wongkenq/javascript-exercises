const findTheOldest = function(obj) {
	return obj.sort((a,b) => {
        return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth)
      }, 0)[0]
};

// Do not edit below this line
module.exports = findTheOldest;
