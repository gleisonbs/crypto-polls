import React, { useEffect, useState } from 'react';
import { Segment } from 'semantic-ui-react'

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
    <div style={{ width: "70%", margin: "auto", display: "flex", direction: "row", flexWrap: "wrap" }} className="Polls">
      {allPolls.map(p => <div key={p.title}>
          <Segment style={{ margin: "10px", width: "600px", height: "300px" }}>
            <p>{p.title} - {p.author}</p>
              {p.options.map(o => <p>
              {o}
            </p>)}
          </Segment>
        </div>
      )}
    </div>
  );
}

export default Polls;
