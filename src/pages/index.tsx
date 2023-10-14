import { Button } from '@/components';
import { Input } from '@/components';
import CommonModal from '@/components/CommonModal';
import Modal from '@/components/Modal';
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
      {displayModal && (
        <CommonModal
          headerTitle="Do you want to cancel this request?"
          headerRightContent={<Button variant="secondary">Cancel</Button>}
          bodyContent={<p>body</p>}
          footerLeftContent={
            <p>This action will not be reverted once its done</p>
          }
          footerRightContent={
            <>
              <Button variant="primary">Accept</Button>
              <Button variant="outlined">Cancel</Button>
            </>
          }
        />
      )}
      <br />
      <br />
    </div>
  );
}
