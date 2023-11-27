// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity 0.8.17;

interface IContract {
    function attempt() external;
}

contract Winner {
    function attemptWinner(address contractAddress) external {
        IContract(contractAddress).attempt();
    }
}
