const users = require('../mocks/users');

module.exports = {
    listUsers: (req, res) => {
        const { order } = req.query
        const sortedUsers = users.sort((a, b) => {
            if (order === 'desc') {
                return a.id < b.id ? 1 : -1
            }
            return a.id > b.id ? 1 : -1
        })
        res.send(200, sortedUsers)
    },
    getUserById: (req, res) => {
        const { id } = req.params
        const user = users.find((user) => user.id === Number(id))
        if (!user) {
            res.send(400, { error: 'User not found' })
            return;
        }
        res.send(200, user)
    }
}