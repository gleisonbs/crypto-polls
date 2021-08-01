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
      _allPolls.push(await cryptoPolls.methods.polls(i).call());
    }
    setAllPolls(_allPolls);
  }

  return (
    <div className="Polls">
      {allPolls.map(p => <p key={p.title}>{p.title} - {p.author}</p>)}
    </div>
  );
}

export default Polls;
