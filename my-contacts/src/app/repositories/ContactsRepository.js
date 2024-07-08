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
    async findAll(orderBy = 'ASC') {
        const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
        const rows = await db.query(`
            SELECT * FROM contacts ORDER BY name ${direction}
        `)
        return rows
    }
    async findById(id) {
        const [row] = await db.query(`
            SELECT * FROM contacts WHERE id = $1
        `, [id])
        return row
    }
    async findByEmail(email) {
        const [row] = await db.query(`
            SELECT * FROM contacts WHERE email = $1
        `, [email])
        return row
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
