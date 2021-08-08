pragma solidity ^0.8.0;

contract CryptoPolls {
    uint256 public totalPolls = 0;
    mapping(uint256 => address) public pollToOwner;
    mapping(uint256 => Poll) public polls;
    mapping(uint256 => string[]) pollOptions;
    mapping(uint256 => uint256[]) pollVotes;

    //TODO: REDUCE UINT SIZE
    struct Poll {
        uint256 id;
        uint256 voteCount;
        uint256 creationDate;
        uint256 finishDate;
        address author;
        string title;
    }

    function createPoll(string memory _title) public {
        totalPolls++;
        pollToOwner[totalPolls] = msg.sender;
        polls[totalPolls] = Poll(
            totalPolls,
            0,
            block.timestamp,
            block.timestamp,
            msg.sender,
            _title
        );
    }
}
