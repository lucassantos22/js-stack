const { v4 } = require('uuid');

let contacts = [
    {
        id: v4(),
        name: 'Lucas Santos',
        email: 'lucasdafsantos@gmail.com',
        phone: '12345678',
        category_id: v4()
    },
    {
        id: v4(),
        name: 'Ana',
        email: 'ana@gmail.com',
        phone: '12345678',
        category_id: v4()
    }
]

class ContactsRepository {
    findAll() {
        return new Promise((resolve, reject) => {
            resolve(contacts)
        });
    }
    findById(id) {
        return new Promise((resolve, reject) => {
            const contact = contacts.find(contact => contact.id === id)
            resolve(contact)
        });
    }
    delete(id) {
        return new Promise((resolve, reject) => {
            contacts = contacts.filter((contact) => contact.id !== id)
            resolve()
        })
    }
}

module.exports = new ContactsRepository()