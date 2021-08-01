pragma solidity ^0.5.0;

contract CryptoPolls {
    string public name = "CryptoPolls";

    uint256 public totalPolls = 0;
    mapping(uint256 => Poll) public polls;
    mapping(uint256 => uint256[]) public votes;
    mapping(uint256 => string[]) public options;

    struct Poll {
        string title;
        address author;
    }

    event PollCreated(string title, address author);

    constructor() public {
        totalPolls++;
        polls[totalPolls] = Poll("Poll 1", address(0));

        options[totalPolls].push("Opt 1");
        options[totalPolls].push("Opt 2");
        options[totalPolls].push("Opt 3");
        options[totalPolls].push("Opt 4");

        votes[totalPolls].push(0);
        votes[totalPolls].push(0);

        totalPolls++;
        polls[totalPolls] = Poll("Poll 2", address(0));

        options[totalPolls].push("Opt 1");
        options[totalPolls].push("Opt 2");

        votes[totalPolls].push(0);
        votes[totalPolls].push(0);
    }
}
