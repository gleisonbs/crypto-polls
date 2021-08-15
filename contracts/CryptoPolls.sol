pragma solidity ^0.8.0;

contract CryptoPolls {
    uint256 public totalPolls = 0;
    mapping(uint256 => address) public pollToAuthor;
    mapping(address => uint256[]) public voterToPolls;
    mapping(uint256 => Poll) public polls;
    mapping(uint256 => string[]) public pollOptions;
    mapping(uint256 => uint256[]) public pollVotes;

    //TODO: REDUCE UINT SIZE
    struct Poll {
        uint256 id;
        uint256 creationDate;
        uint256 closeDate;
        uint8 totalOptions;
        address author;
        string title;
    }

    event PollCreated(
        uint256 id,
        uint256 creationDate,
        uint256 closeDate,
        address author,
        string title
    );

    function getPollOptions(uint256 _pollId)
        public
        view
        returns (string[] memory)
    {
        return pollOptions[_pollId];
    }

    function getPollVotes(uint256 _pollId)
        public
        view
        returns (uint256[] memory)
    {
        return pollVotes[_pollId];
    }

    function createPoll(
        string memory _title,
        uint8 totalOptions,
        string[] memory _options,
        uint256 closeDate
    ) public {
        totalPolls++;
        pollToAuthor[totalPolls] = msg.sender;
        polls[totalPolls] = Poll(
            totalPolls,
            block.timestamp,
            closeDate,
            totalOptions,
            msg.sender,
            _title
        );

        pollOptions[totalPolls] = _options;
        pollVotes[totalPolls] = new uint256[](totalOptions);

        emit PollCreated(
            totalPolls,
            block.timestamp,
            closeDate,
            msg.sender,
            _title
        );
    }

    function vote(uint256 _pollId, uint256 _optionId) public {
        require(
            block.timestamp < polls[_pollId].closeDate,
            "Can't vote on a closed poll."
        );
        pollVotes[_pollId][_optionId]++;
    }
}
