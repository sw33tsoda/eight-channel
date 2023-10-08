import { Button } from '@/components';
import { Input } from '@/components';

export default function Home() {

  return (
    <div>

      <h1>Button</h1>
      <br />
      <Button variant='primary' disabled>Submit</Button>
      <Button variant='primary' >Submit</Button>
      <br />
      <br />
      <Button variant='secondary' disabled>Advanced</Button>
      <Button variant='secondary' >Advanced</Button>

      <br />
      <br />
      <Button variant='outlined' disabled>Cancel</Button>
      <Button variant='outlined' >Cancel</Button>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Inputs</h1>
      <br />
      <Input variant='primary' placeholder='how are you?
      '/>
      <br />
      <br />
    </div>
  );
}
