import axios from 'axios';

const entry = 'https://randomuser.me/api/?results=50';

const apiRequest = async function(){
    const respons = await axios.get(entry);
    if(respons.data.results && respons.status === 200){
        console.log('respons.data.results = ', respons.data.results);
        return respons.data.results;
    }else{
        throw new Error('Сервер не доступен')
    }
};

const filterDate = function(val) {
    if (val) {
        const d = new Date(val);
        return d.toLocaleDateString("ru-RU");
    }
};

export default {
    async getAllUsers(){
        let id = 1;
        const modifyUser = await apiRequest();
        console.log('modify - ', modifyUser);
        modifyUser.forEach(item => {
            item.fullName = `${item.name.first} ${item.name.last}`;
            item.birthday  = filterDate(item.dob.date);
            item.id = id++;
        });
        return modifyUser;
    },
}