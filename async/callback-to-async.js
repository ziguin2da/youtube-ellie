'use strict';

class UserStorage {
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    async loginUser(id, password) {
        await this.delay(2000);
        if (
            (id === 'ellie' && password === 'dream') ||
            (id === 'coder' && password === 'academy')
        ) {
            return id;
        } else {
            throw new Error('not found');
        }
    }
    
    async getRoles(user) {
        await this.delay(2000);
        if (user === 'ellie') {
            return {name: 'ellie', role: 'admin'};
        } else {
            throw new Error('no access');
        }
    }
}




const id = prompt('enter your id');
const password = prompt('enter your password');

async function login(id, password) {
    const userStorage = new UserStorage();
    const user = await userStorage.loginUser(id, password);
    const userWithRole = await userStorage.getRoles(user);

    return `Hello ${userWithRole.name}, you have a ${userWithRole.role}`;
}

login(id, password).then(alert).catch(console.log);