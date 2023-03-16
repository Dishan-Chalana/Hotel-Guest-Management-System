const fs = require('fs');
const chalk = require('chalk');

const dataFile = 'userData.json';


//add user Details
const addUser = (name, address, telno, visitDate) => {
    const userData = loadUserData();
    
    //auto assign id for each user
    const length = userData.length;
    let id = 1;
    console.log(length);
     if (length > 0) {
         id = userData[length - 1].id + 1;
     }

    userData.push({
        id,
        name,
        address,
        telno,
        visitDate
    })
    saveUser(userData);

    console.log(chalk.bgGreenBright('New user added sucsessfully....!'))

};

//read user Details
const readUser = (id) => {
    console.log(chalk.yellow('Read user', id))
};

//list user Details
const listUser = () => {
    console.log(chalk.orange('Read user', id))
};

//update user Details
const updateUser = (id) => {
    console.log(chalk.cyan('Update user', id))
};

//remove user 
const removeUser = (id) => {
    console.log(chalk.red('Remove  user', id))

};


const saveUser = (user) => {
    const dataJSON = JSON.stringify(user);
    fs.appendFileSync(dataFile, dataJSON+'\n');
};


const loadUserData = () => {
    try {
        const dataBuffer = fs.readFileSync('');
        const dataJSON = dataBuffer.toString();
        const data = JSON.parse(dataJSON);
        return data;
    } catch (e) {
        return [];
    };
    

};



//export
module.exports = {
    addUser,
    readUser,
    listUser,
    updateUser,
    removeUser
}