// BEGIN
export const getGirlFriends = (users) => {

  return users.reduce((girlFriends, user) => {

    const friends = user.friends.filter((friend) => friend.gender === 'female');
    
    return girlFriends.concat(friends);
  }, []);
};

export default getGirlFriends;

// END