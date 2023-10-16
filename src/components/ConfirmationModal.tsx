import { Component } from 'react';
import { FaXmark } from 'react-icons/fa6';

// Components
import { Button, Modal } from '.';

export interface IConfirmationModalProps {
    readonly primaryButtonText: string;
    readonly secondaryButtonText: string;
    readonly onClickPrimaryButton: () => void;
    readonly onClickSecondaryButton: () => void;
    readonly onClickClose: () => void;
    readonly titleText?: string;
    readonly description?: string;
}

export interface IRenderHeaderContentParams extends Pick<IConfirmationModalProps, 'titleText' | 'onClickClose'> {}
export interface IRenderBodyContentParams extends Pick<IConfirmationModalProps, 'description'> {}
export interface IRenderFooterContentParams
    extends Pick<
        IConfirmationModalProps,
        'onClickPrimaryButton' |
        'onClickSecondaryButton' |
        'primaryButtonText' |
        'secondaryButtonText'
    > {}

export class ConfirmationModal extends Component<IConfirmationModalProps> {
    renderHeaderContent = ({
        titleText,
        onClickClose
    }: IRenderHeaderContentParams) => {
        return (
            <div className='confirmation-modal-header'>
                <div className="confirmation-modal-header-left">
                    <h1>{titleText}</h1>
                </div>
                <div className="confirmation-modal-header-right">
                    <FaXmark onClick={onClickClose} />
                </div>
            </div>
        );
    };

    renderBodyContent = ({
        description
    }: IRenderBodyContentParams) => {
        return (
            <div className="confirmation-modal-body">
                {description}
            </div>
        );
    };

    renderFooterContent = ({
        onClickPrimaryButton,
        onClickSecondaryButton,
        primaryButtonText,
        secondaryButtonText
    }: IRenderFooterContentParams) => {
        return (
            <div className="confirmation-modal-footer">
                <Button variant='primary' onClick={onClickPrimaryButton}>
                    {primaryButtonText}
                </Button>
                <Button variant='outlined' onClick={onClickSecondaryButton}>
                    {secondaryButtonText}
                </Button>
            </div>
        );
    };

    render() {
        const {
            primaryButtonText,
            secondaryButtonText,
            onClickPrimaryButton,
            onClickSecondaryButton,
            onClickClose,
            titleText = '',
            description = '',
        } = this.props;

        const renderHeaderContentParams: IRenderHeaderContentParams = {
            titleText,
            onClickClose,
        };

        const renderBodyContentParams: IRenderBodyContentParams = {
            description,
        };

        const renderFooterContentParams: IRenderFooterContentParams = {
            onClickPrimaryButton,
            onClickSecondaryButton,
            primaryButtonText,
            secondaryButtonText,
        };

        return (
            <Modal
                additionalClasses={['confirmation-modal']}
                headerContent={this.renderHeaderContent(renderHeaderContentParams)}
                bodyContent={this.renderBodyContent(renderBodyContentParams)}
                footerContent={this.renderFooterContent(renderFooterContentParams)}
            />
        );
    }
}
