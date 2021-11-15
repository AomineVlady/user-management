const getUser = (usersList, id) => usersList.find(user => user.id === id);

export default getUser;