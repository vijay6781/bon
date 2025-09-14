import moment from 'moment';

export const getFinancialYear = (d?: moment.MomentInput) => {
  const date = moment(d).utcOffset('+05:30');
  const Apr1 = moment().utcOffset('+05:30').set('date', 1).set('month', 3).startOf('day').toString();

  const year = Number(date.format('YY'));

  if (date.isSameOrAfter(Apr1)) {
    return Number(`${year}${year + 1}`);
  } else {
    return Number(`${year - 1}${year}`);
  }
};
