export const getUser = (usersList, id) => usersList.find(user => user.id === id);

const adapter = (dataList) => {
    const usersList = [];
    dataList.forEach(user => {
        usersList.push({
            id: user._id,
            email: user.email,
            name: user.first_name,
            surname: user.last_name,
            avatar: user.avatar,
        })
    });
    return usersList;
};

export default adapter;
