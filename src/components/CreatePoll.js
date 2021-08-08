import React, { useState } from 'react';
import { Button, Form, Segment } from 'semantic-ui-react'

const CreatePoll = ({ cryptoPolls, account }) => {
  const [title, setTitle] = useState('');
  const [option, setOption] = useState('');
  const [options, setOptions] = useState([]);

  const handleCreatePoll = async () => {
    console.log(title);
    const createdPoll = await cryptoPolls.methods.createPoll(title, options.length, options).send({ from: account });
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
        <Button type="button" onClick={handleCreatePoll}>Create</Button>
      </Form>
    </Segment>
    </div>
  );
}

export default CreatePoll;
