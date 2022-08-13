import moment from 'moment';

console.log(moment.now());

const rightNow = moment();

console.log(rightNow);

const birthday = moment('2001-09-10', 'YYYY-MM-DD');

console.log(birthday.fromNow());

console.log(birthday.format('MMMM Do YYYY'));

const twoWeeksFromNow = moment().add(2, 'weeks');

console.log(twoWeeksFromNow.toString());

const sixMonthsAgo = moment().subtract(6, 'months');

console.log(sixMonthsAgo.toString());

let day = moment.unix(1968781876);

console.log(day)
