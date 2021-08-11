import React, { useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CreatePoll = ({ cryptoPolls, account }) => {
  const [title, setTitle] = useState('');
  const [closeDate, setCloseDate] = useState(null);
  const [option, setOption] = useState('');
  const [options, setOptions] = useState([]);

  const handleCreatePoll = async () => {
    const closeDateInSeconds = Math.floor(closeDate.getTime() / 1000);
    const createdPoll = await cryptoPolls.methods
      .createPoll(title, options.length, options, closeDateInSeconds)
      .send({ from: account });
    console.log(createdPoll);
    const _totalPolls = await cryptoPolls.methods.totalPolls().call();
    console.log(_totalPolls);
  }

  const handleAddOption = async () => {
    setOptions(prevState => [...prevState, option]);
    setOption('');
  }

  return (
    <div className="Polls">
    <Segment compact style={{ margin: "auto" }}>

      <Form style={{ width: "500px" }} >
        <Form.Field>
          <Form.Input 
            label="Poll Question:" 
            placeholder="Question" 
            type="text" value={title} 
            onChange={(e) => setTitle(e.target.value)} />
        </Form.Field>
        <ul>
          {options.map(o => <li>{o}</li>)}
        </ul>
        <Form.Field>
          <Form.Input label="Add an Option:" type="text" value={option} onChange={(e) => setOption(e.target.value)} />
          <Button type="button" onClick={handleAddOption}>+</Button>
        </Form.Field>
        <Form.Field>
          <label>Close Date:</label>
          <DatePicker
            selected={closeDate}
            onChange={setCloseDate}
            timeInputLabel="Time:"
            timeFormat="HH:mm"
            dateFormat="MM/dd/yyyy, HH:mm"
            showTimeInput
          />
        <Button type="button" onClick={handleCreatePoll}>Create</Button>
        </Form.Field>
      </Form>
    </Segment>
    </div>
  );
}

export default CreatePoll;
