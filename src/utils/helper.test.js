import { convertToSubnet, 
        ipaddress,
        Short,
        BinaryID, 
        IntegerID, 
        HexID, 
        CIDR, 
        IPtype, 
        IPClass,
        convertToWildcard,
        BinarySubnet,
        IP,
        Broadcast,
        NetworkAddress,
         } from './helper';
import { expect } from 'chai';

describe('convertToSubnet test', () => {
    it('should convert mask to subnet', () => {
        expect(convertToSubnet(32)).to.equal('255.255.255.255');
        expect(convertToSubnet(1)).to.equal('128.0.0.0');
    })
})

describe('convert ipdecimal to ipbinary', () => {
    it ('should be', () => {
        expect(ipaddress('255.255.255.255')).to.equal('11111111.11111111.11111111.11111111');
        expect(ipaddress('255.255.0.0')).to.equal('11111111.11111111.00000000.00000000');
        expect(ipaddress('255.255.0.1')).to.equal('11111111.11111111.00000000.00000001');
        expect(ipaddress('255.255.0.128')).to.equal('11111111.11111111.00000000.10000000');
    })
})

describe('IP class', () => {
    it('should be',() => {
        expect(IPClass(1)).to.equal('None');
        expect(IPClass(8)).to.equal('A');
        expect(IPClass(16)).to.equal('B');        
        expect(IPClass(24)).to.equal('C');
        expect(IPClass(32)).to.equal('C');
    })
})


describe('Windcard', () => {
    it('should be',() => {
        expect(convertToWildcard(1)).to.equal('127.255.255.255');
        expect(convertToWildcard(9)).to.equal('0.127.255.255');
        expect(convertToWildcard(24)).to.equal('0.0.0.255');
        expect(convertToWildcard(30)).to.equal('0.0.0.3');

    })
})


convertToWildcard()
NetworkAddress('192.168.1.1' , 16)

// console.log(Short('192.168.0.1', '16'));
// console.log(HexID('192.168.0.1'));
// console.log(CIDR(24));
// console.log(IPtype('192.168.1.1'));
// console.log(IPClass('8'));
// console.log(convertToSubnet(1));
// console.log(convertToWildcard(1));
console.log(BinarySubnet(25));
