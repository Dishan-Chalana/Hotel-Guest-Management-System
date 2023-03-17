const db = require('./db.js');
const yargs = require('yargs');
const chalk = require('chalk');

//hest -id , name , address , telno
// --name="Dishan" --address="Galle" --telno="0754455835"

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
    describe: 'list down user details',
    handler() {
        db.listUser();
    }
});


//update user details
yargs.command({
    command: 'update',
    describe: 'update user details',
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
    describe: 'Read user Details',
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
