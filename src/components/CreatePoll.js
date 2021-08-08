import React, { useState } from 'react';

const CreatePoll = ({ cryptoPolls, account }) => {
  const [title, setTitle] = useState('');

  const handleCreatePoll = async () => {
    console.log(title);
    const createdPoll = await cryptoPolls.methods.createPoll(title).send({ from: account });
    console.log(createdPoll);
    const _totalPolls = await cryptoPolls.methods.totalPolls().call();
    console.log(_totalPolls);
  }

  return (
    <div className="Polls">
      <form>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <button type="button" onClick={handleCreatePoll}>Criar</button>
      </form>
    </div>
  );
}

export default CreatePoll;
