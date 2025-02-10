import PropTypes from "prop-types";
import { createPortal } from 'react-dom';

import { Container, Footer, Overlay } from "./styles";
import { Button } from '../Button';

export default function Modal({ danger }) {
    return createPortal(
        <Overlay>
            <Container danger={danger}>
                <h1>Título do modal</h1>
                <p>Corpo do modal</p>
                <Footer>
                    <button type="button" className="cancel-button">
                        Cancelar
                    </button>
                    <Button
                        type="button"
                        danger={danger}
                    >
                        Deletar
                    </Button>
                </Footer>
            </Container>
        </Overlay>,
        document.getElementById('modal-root')
     );
}

Modal.prototype = {
    danger: PropTypes.boolean
}

Modal.defaultProps = {
    danger: false
}
