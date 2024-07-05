const { v4 } = require('uuid');
const db = require('../../database')

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
    findByEmail(email) {
        return new Promise((resolve, reject) => {
            const contact = contacts.find(contact => contact.email === email)
            resolve(contact)
        })
    }
    delete(id) {
        return new Promise((resolve, reject) => {
            contacts = contacts.filter((contact) => contact.id !== id)
            resolve()
        })
    }
    async create({
        name,
        email,
        phone,
        category_id
    }) {
        // Para evitar SQL Injection
        const [row] = await db.query(`
            INSERT INTO contacts(name, email, phone, category_id)
            VALUES($1, $2, $3, $4)
            RETURNING *
        `, [name, email, phone, category_id]);

        return row
    }
    update(id, {
        name,
        email,
        phone,
        category_id
    }) {
        return new Promise((resolve, reject) => {
            const updatedContact = {
                id,
                name,
                email,
                phone,
                category_id
            }
            contacts = contacts.map((contact) => {
                if (contact.id === id) {
                    return {...updatedContact}
                }
                return contact
            })
            resolve(updatedContact)
        })
    }
}

module.exports = new ContactsRepository()
