import { Component } from 'react';
import { FaXmark } from 'react-icons/fa6';

// Components
import { Button, IconButton, Modal } from '.';

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
        'onClickPrimaryButton' | 'onClickSecondaryButton' | 'primaryButtonText' | 'secondaryButtonText'
    > {}

export const ConfirmationModal = ({
    primaryButtonText,
    secondaryButtonText,
    onClickPrimaryButton,
    onClickSecondaryButton,
    onClickClose,
    titleText = '',
    description = '',
}: IConfirmationModalProps) => {
    const renderHeaderContent = ({ titleText, onClickClose }: IRenderHeaderContentParams) => (
        <div className="confirmation-modal-header">
            <div className="confirmation-modal-header-left">
                <h1>{titleText}</h1>
            </div>
            <div className="confirmation-modal-header-right">
                <IconButton component={FaXmark} />
            </div>
        </div>
    );

    const renderBodyContent = ({ description }: IRenderBodyContentParams) => {
        return <div className="confirmation-modal-body">{description}</div>;
    };

    const renderFooterContent = ({
        onClickPrimaryButton,
        onClickSecondaryButton,
        primaryButtonText,
        secondaryButtonText,
    }: IRenderFooterContentParams) => (
        <div className="confirmation-modal-footer">
            <Button variant="primary" onClick={onClickPrimaryButton}>
                {primaryButtonText}
            </Button>
            <Button variant="outlined" onClick={onClickSecondaryButton}>
                {secondaryButtonText}
            </Button>
        </div>
    );

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
            headerContent={renderHeaderContent(renderHeaderContentParams)}
            bodyContent={renderBodyContent(renderBodyContentParams)}
            footerContent={renderFooterContent(renderFooterContentParams)}
        />
    );
};
