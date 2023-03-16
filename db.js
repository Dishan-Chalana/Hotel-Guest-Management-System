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
    
    const users = loadUserData();
    const user = users.find((user) => {
        return user.id === id;
    });

    if (user) {
        console.log(chalk.yellow('User details of user ID:', id));
        console.log(user);
        
    } else {
        console.log(chalk.bgRed('  User details not found...!  '));
    };


    
};

//list user Details
const listUser = () => {
    console.log(chalk.magenta('List  user'))

    const user = loadUserData();
    user.forEach((user)=>{
        console.log(user);
    });
    

};

//update user Details
const updateUser = (id,name, address, telno, visitDate) => {
    console.log(chalk.cyan('Update user', id))

    const userData = loadUserData();
    // const userIndex = userData.findIndex((user)=>user.id===id);
    // console.log(userIndex);
};

//remove user 
const removeUser = (id) => {

    const users = loadUserData();
    const newUsers = users.filter((user) => {
        return user.id != id;
    });

    if(users.length > newUsers.length){
        saveUser(newUsers);
        console.log(chalk.bgGreenBright('User details removed successfully...!'));
    } else {
        console.log(chalk.bgRed('  User details not found...!  '));
    }

};


const saveUser = (user) => {
    const dataJSON = JSON.stringify(user);
    fs.writeFileSync(dataFile,dataJSON);
}




const loadUserData = () => {
    try {
        const dataBuffer = fs.readFileSync(dataFile);
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