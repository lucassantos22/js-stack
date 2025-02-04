import { Input } from "../../components/Input"
import { Select } from "../../components/Select"

import PageHeader from "../../components/PageHeader"
import { Button } from "../../components/Button"

export default function NewContact() {
    return (
        <>
            <PageHeader title="Novo contato" />
            <Input
                type="text"
                placeholder="Nome"
            />
            <Select>
                <option value="instagram">Instagram</option>
            </Select>
            <Button
                type="button"
            >
                Salvar alterações
            </Button>
        </>
    )
}
