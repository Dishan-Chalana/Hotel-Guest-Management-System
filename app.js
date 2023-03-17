const db = require('./db.js');
const yargs = require('yargs');
const chalk = require('chalk');


 console.log(chalk.bgBlue.bold('------  Welcome to Hotel Guest Management System  ------'));
 console.log(chalk.blue.bold.underline('\nuser functions:'), chalk.yellow('\nadd \nread \nlist \nupdate \nremove \nhelp \n'));
 

    
//add user Details
yargs.command({
    command: 'add',
    describe: 'Add a new user',
    builder: {
        name: {
            describe: 'User name',
            demandOption: true,
            type: 'string',
        },
        address: {
            describe: 'Address',
            type: 'string',
        },
        telno: {
            describe: 'Telephone number',
            type: 'number',
        },
        visitDate: {
            describe: 'Visited date',
            type: 'string',
        }
    },
    handler(argv) {
        db.addUser(argv.name, argv.address, argv.telno, argv.visitDate);
    }
});


//read user details
yargs.command({
    command: 'read',
    describe: 'Read user Details',
    builder: {
        id: {
            describe: 'User ID',
            demandOption: true,
            type: 'string',
        },

    },
    handler(argv) {
        db.readUser(argv.id);
    }
});

//list user details
yargs.command({
    command: 'list',
    describe: 'List down all user details',
    handler() {
        db.listUser();
    }
});


//update user details
yargs.command({
    command: 'update',
    describe: 'Update user details',
    builder: {
        id: {
            describe: 'User name',
            type: 'number',
        },
        name: {
            describe: 'User name',
            type: 'string',
        },
        address: {
            describe: 'Address',
            type: 'string',
        },
        telno: {
            describe: 'Telephone number',
            type: 'number',
        },
        visitDate: {
            describe: 'Visited date',
            type: 'string',
        }
    },

    handler(argv) {
        db.updateUser(argv.id, argv.name, argv.address, argv.telno, argv.visitDate);
    }
});

//remove user details
yargs.command({
    command: 'remove',
    describe: 'Remove user details',
    builder: {
        id: {
            describe: 'User ID',
            demandOption: true,
            type: 'string',
        },

    },
    handler(argv) {
        db.removeUser(argv.id);
    }
});


yargs.parse();
