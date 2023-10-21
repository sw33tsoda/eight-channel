import { Component, ErrorInfo } from 'react';
import { Modal } from '.';

import type { IReactPropsWithChildren } from '@/interfaces';

interface IErrorBoundaryProps extends IReactPropsWithChildren {}
interface IErrorBoundaryState {
    hasError: boolean;
}

export class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
    constructor(props: IErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError(error: Error) {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // TODO: add logger service
        console.log(error, errorInfo);
    }

    renderFallbackUI = () => {
        return <p className="error-boundary-message">Something wrong.</p>;
    };

    render() {
        const { children } = this.props;
        const { hasError } = this.state;

        if (hasError) {
            return <Modal bodyContent={this.renderFallbackUI()} />;
        }

        return children;
    }
}
