// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SmartParking {
    
    struct ParkingTicket {
        uint duration;      // in minutes
        address owner;
        string plateNumber;
        uint zone;
        bool isActive;
        uint startTime;
    }
    
    mapping (address => ParkingTicket) private parkingTickets;
    
    function buyTicket(uint _zone, uint _duration, string memory _plateNumber) public payable {
        require(msg.value > 0, "You must pay to buy a parking ticket.");
        
        ParkingTicket memory newTicket = ParkingTicket({
            duration: _duration,
            owner: msg.sender,
            plateNumber: _plateNumber,
            zone: _zone,
            isActive: true,
            startTime:block.timestamp
        });
        
        parkingTickets[msg.sender]=newTicket;
    }
    
    function cancelTicket() public {
        // require(parkingTickets[_zone][msg.sender].owner == msg.sender, "You can only cancel your own parking ticket.");
        require(parkingTickets[msg.sender].isActive, "This ticket has already been cancelled or has expired ");
        payable(msg.sender).transfer(0.5 ether);    // refund half of the ticket price
        parkingTickets[msg.sender].isActive = false;
    }
    
    function transferTicket(address _newOwner) public {
        require(parkingTickets[msg.sender].isActive, "This ticket has been cancelled or has expired");
        
        ParkingTicket storage temp=parkingTickets[msg.sender];
        parkingTickets[_newOwner]=temp;
        parkingTickets[msg.sender].isActive=false;
    }
    
    function extendTicket(uint _duration) public payable {
        
        require(parkingTickets[msg.sender].isActive, "This ticket has been cancelled or has expired");
        require(msg.value > 0, "You must pay to extend your parking+ ticket.");
        
        parkingTickets[msg.sender].duration += _duration;
    }
    function viewTicket() public view returns(Ticket memory) {
        ParkingTicket memory ticket=ParkingTicket({});
        ticket=temp;
       return parkingTickets[msg.sender]
    }
    //  function checkValidity() public {
    //     // check the validity of all parking tickets
    //     parkingTickets[msg.sender].duration= parkingTickets[msg.sender].startTime>
    //     }
    }