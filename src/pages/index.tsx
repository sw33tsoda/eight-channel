import { Button } from '@/components';
import { Input } from '@/components';
import { ConfirmationModal } from '@/components/ConfirmationModal';
import { useEffect, useState } from 'react';

export default function Home() {
    const [displayModal, setDisplayModal] = useState<boolean>(false);

    useEffect(() => {
        setDisplayModal(true);
    }, []);

    return (
        <div>
            <h1>Button</h1>
            <br />
            <Button variant="primary" disabled>
                Submit
            </Button>
            <Button variant="primary">Submit</Button>
            <br />
            <br />
            <Button variant="secondary" disabled>
                Advanced
            </Button>
            <Button variant="secondary">Advanced</Button>

            <br />
            <br />
            <Button variant="outlined" disabled>
                Cancel
            </Button>
            <Button variant="outlined">Cancel</Button>

            <br />
            <br />

            <h1>Inputs</h1>
            <br />
            <Input
                variant="primary"
                placeholder="how are you?
      "
            />
            <br />
            <br />
            <Input
                variant="primary"
                placeholder="how are you?
      "
                hasError
            />
            <br />
            <br />
            <Input
                variant="primary"
                placeholder="how are you?
      "
                hasWarning
            />
            <br />
            <br />

            <h1>Modal</h1>
            <br />
            <h2>Confirmation Modal</h2>

            {displayModal && (
                <ConfirmationModal
                    titleText="Do you want to accept?"
                    description="Nulla eget tortor est. Duis elit eros, condimentum ac dui a, imperdiet consequat orci. Vivamus sit amet ligula quis mi dictum eleifend. Cras quis tincidunt justo."
                    primaryButtonText="Accept"
                    secondaryButtonText="Cancel"
                />
            )}
            <br />
            <br />
        </div>
    );
}
