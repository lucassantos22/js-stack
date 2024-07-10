const db = require('../../database');

class CategoriesRepository {
    async findAll(orderBy = 'ASC') {
        const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';
        const rows = await db.query(`
            SELECT * FROM categories ORDER BY name ${direction}
        `)
        return rows
    }

    async create({ name }) {
        const [row] = await db.query(`
            INSERT INTO categories(name)
            VALUES($1)
            RETURNING *
        `, [name])
        return row;
    }

    async delete(id) {
        await db.query(`
            DELETE FROM categories WHERE id = $1
        `, [id])
    }
}

module.exports = new CategoriesRepository
