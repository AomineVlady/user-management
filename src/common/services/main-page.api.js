import * as mokData from './mokup-user-data.json';

const adapter = (dataList) => {
    const usersList = [];
    dataList.forEach(user => {
        usersList.push({
            id: user.id,
            email: user.email,
            name: user.first_name,
            surname: user.last_name,
            avatar: user.avatar,
        })
    });
    return usersList;
};

const getUsersDataList = () => adapter(mokData.data);

export default getUsersDataList;