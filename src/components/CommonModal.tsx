import { Component, ReactNode } from 'react';

// Components
import Modal from './Modal';

export interface CommonModalProps {
    headerTitle?: string;
    headerRightContent?: JSX.Element | ReactNode;
    bodyContent?: JSX.Element | ReactNode;
    footerLeftContent?: JSX.Element | ReactNode;
    footerRightContent?: JSX.Element | ReactNode;
}

export default class CommonModal extends Component<CommonModalProps> {
    renderHeader = () => {
        const {
            headerTitle = 'Header Title',
            headerRightContent
        } = this.props;

        return (
            <div className='modal-common-header'>
                <h1 className='modal-common-header-title'>
                    {headerTitle}
                </h1>
                {headerRightContent}
            </div>
        );
    };

    renderContent = () => {
        const { bodyContent } = this.props;

        return (
            <div className='modal-common-body-content'>
                {bodyContent}
            </div>
        );
    };

    renderFooter = () => {
        const {
            footerLeftContent,
            footerRightContent
        } = this.props;

        return (
            <div className="modal-common-footer">
                {footerLeftContent}
                {footerRightContent}
            </div>
        );
    };

    render() {
        return (
            <Modal
                headerContent={this.renderHeader()}
                bodyContent={this.renderContent()}
                footerContent={this.renderFooter()}
            />
        );
    }
}