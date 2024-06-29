const ContactsRepository = require('../repositories/ContactsRepository')

class ContractController {
    async index(req, res) {
        // Listar todos os registros
        const contacts = await ContactsRepository.findAll();
        res.json({contacts})
    }

    async show(req, res) {
        // Obter um registro
        const { id } = req.params
        const contact = await ContactsRepository.findById(id);
        if (!contact) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({ contact })
    }

    store() {
        // Criar novo registro
    }

    update() {
        // Atualizar um registro
    }

    async delete(req, res) {
        // Deletar um registro
        const { id } = req.params
        const contact = await ContactsRepository.findById(id);
        if (!contact) {
            return res.status(404).json({ error: 'User not found' });
        }
        await ContactsRepository.delete(id)
        // 204 -> Igual ao 200 mas sem corpo de resposta
        res.sendStatus(204)
    }
}

// Singleton - Uma instância do objeto, só tem como importar ele
module.exports = new ContractController();
