pragma solidity ^0.5.0;

contract PollCreation {
    mapping(uint256 => string[]) pollOptions;
    mapping(uint256 => uint256[]) pollVotes;

    struct Poll {
        uint256 id;
        uint256 voteCount;
        uint256 creationDate;
        uint256 finishDate;
        address author;
        string title;
    }

    function create() public {}
}
