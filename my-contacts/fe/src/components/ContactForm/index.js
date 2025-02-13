import PropTypes from "prop-types";

import FormGroup from "../FormGroup";
import { Input } from '../Input';
import { Button } from '../Button';
import { Select } from '../Select';
import { Form, ButtonContainer } from "./styles";

export default function ContactForm({ buttonLabel }) {
    return (
        <Form>
            <FormGroup>
                <Input placeholder="Nome" />
            </FormGroup>

            <FormGroup error="Formato do e-mail é inválido">
                <Input placeholder="E-mail" error />
            </FormGroup>

            <FormGroup>
                <Input placeholder="Telefone" />
            </FormGroup>

            <FormGroup>
                <Select>
                    <option value="instagram">Instagram</option>
                </Select>
            </FormGroup>

            <ButtonContainer>
                <Button type="submit">{buttonLabel}</Button>
            </ButtonContainer>
        </Form>
    )
}

ContactForm.prototype = {
    buttonLabel: PropTypes.string.isRequired
}
