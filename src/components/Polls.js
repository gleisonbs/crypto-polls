import React, { useEffect, useState } from 'react';

const Polls = ({ cryptoPolls }) => {
  const [allPolls, setAllPolls] = useState([]);

  useEffect(() => {
    loadPolls();
  }, [])

  const loadPolls = async () => {
    const _totalPolls = await cryptoPolls.methods.totalPolls().call();
      
    const _allPolls = [];
    for (let i = 1; i <= _totalPolls; i++) {
      const poll = await cryptoPolls.methods.polls(i).call();
      const pollOptions = await cryptoPolls.methods.getPollOptions(i).call();
      console.log({ title: poll.title, author: poll.author, options: pollOptions });
      _allPolls.push({ title: poll.title, author: poll.author, options: pollOptions });
    }
    setAllPolls(_allPolls);
  }

  return (
    <div className="Polls">
      {allPolls.map(p => <div key={p.title}>
        <p>{p.title} - {p.author}</p>
        {p.options.map(o => <p>
          {o}
        </p>)}
      </div>
      )}
    </div>
  );
}

export default Polls;
