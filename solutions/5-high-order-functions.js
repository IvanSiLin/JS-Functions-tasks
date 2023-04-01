import _ from 'lodash';

// BEGIN
export const takeOldest = (users, n = 1) => {

  let sortedUsers = _.sortBy(users, (user) => Date.parse(user.birthday));
  /*let oldestUsers = _.take(sortedUsers, n);
  return oldestUsers.map((user) => {

    return {

      ...user,
      birthday: new Date(Date.parse(user.birthday)).toUTCString(),
    };
  });*/

  return sortedUsers.slice(0, n);
};
export default takeOldest;

// END