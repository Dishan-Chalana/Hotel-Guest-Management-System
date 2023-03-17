const fs = require('fs');
const chalk = require('chalk');

const dataFile = 'userData.json';


//add user Details
const addUser = (name, address, telno, visitDate) => {
    const userData = loadUserData();
    
    //auto assign id for each user
    const length = userData.length;
    let id = 1;
    
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

    console.log(chalk.bgGreen.bold('   New user added sucsessfully....!    '))

};

//read user Details
const readUser = (id) => {
    
    const users = loadUserData();
    const user = users.find((user) => {
        return user.id == id;
    });

    if (user) {
        console.log(chalk.bgGreen.bold('  User details of userID:', id,'   '));
        console.log(user);
        
    } else {
        console.log(chalk.bgRed.bold('  User details not found...!  '));
    };


    
};

//list user details
const listUser = () => {
    console.log(chalk.bgGreen.bold('     List of all users..!     '))

    const user = loadUserData();
    user.forEach((user)=>{
        console.log(user);
    });
    

};

//update user details
const updateUser = (id,name, address, telno, visitDate) => {
    

    const userData = loadUserData();
    const userIndex = userData.findIndex((user)=>user.id===id);
    //console.log(userIndex);

    if(userIndex != -1){
        const user = userData[userIndex];
        
        user.name = name ? name : user.name;
        user.address = address ? address : user.address;
        user.telno = telno ? telno : user.telno;
        user.visitDate = visitDate ? visitDate : user.visitDate;

        console.log(chalk.bgGreen.bold('   Succsesfully Updated user:', id,'   '))
        saveUser(userData);
    }
    else {
        console.log(chalk.bgRed('   Update Faild: User details not found...!   '));
    }

    


};

//remove user 
const removeUser = (id) => {

    const users = loadUserData();
    const newUsers = users.filter((user) => {
        return user.id != id;
    });

    if(users.length > newUsers.length){
        saveUser(newUsers);
        console.log(chalk.bgGreen.bold(' User details removed successfully...!   '));
    } else {
        console.log(chalk.bgRed('  Failed to delete: User details not found...!  '));
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