class ContractController {
    index(req, res) {
        // Listar todos os registros
        res.json({
            ok: true
        })
    }

    show() {
        // Obter um registro
    }

    store() {
        // Criar novo registro
    }

    update() {
        // Atualizar um registro
    }

    delete() {
        // Deletar um registro
    }
}

// Singleton - Uma instância do objeto, só tem como importar ele
module.exports = new ContractController();
