const receivesAFunction = (callback) => {
  callback();
};
const returnsANamedFunction = () => {
  function returnFunction() {
    console.log("Named Function");
  }
  return returnFunction;
};
const returnsAnAnonymousFunction = () => {
  return () => {
    console.log("Anonymous Function");
  };
};
const returnFirstTwoDrivers = (scuberDrivers) => {
  return scuberDrivers.slice(0, 2);
};
const returnLastTwoDrivers = (scuberDrivers) => {
  return scuberDrivers.slice(-2);
};
selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = (num) => {
  return (fare) => {
    return fare * num;
  };
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
// console.log(createFareMultiplier(4)(10)); // 40
console.log(fareDoubler(10)); // 20
console.log(fareTripler(10)); // 30

const selectDifferentDrivers = (scuberDrivers, returnTwoDriversFunction) => {
  return returnTwoDriversFunction(scuberDrivers);
};
console.log(
  selectDifferentDrivers(["one", "two", "three", "four"], returnFirstTwoDrivers)
);
