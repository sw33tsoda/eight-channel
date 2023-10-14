import { Component, ReactNode } from 'react';
import { createPortal } from 'react-dom';

// Components
import { Paper } from '.';

export interface ModalProps {
    readonly headerContent: JSX.Element | ReactNode;
    readonly bodyContent: JSX.Element | ReactNode;
    readonly footerContent: JSX.Element | ReactNode;
}

export default class Modal extends Component<ModalProps> {
    render() {
        const {
            headerContent,
            bodyContent,
            footerContent
        } = this.props;

        return (
            createPortal(
                <div className='backdrop backdrop-blur-sm'>
                    <Paper additionalClasses={['modal']}>
                        {headerContent}
                        {bodyContent}
                        {footerContent}
                    </Paper>
                </div>,
                document.body
            )
        );
    }
}