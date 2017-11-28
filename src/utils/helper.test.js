import { convertToSubnet, ipaddress, Short, BinaryID, IntegerID, HexID } from './helper';
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

console.log(Short('192.168.0.1', '16'));
console.log(HexID('192.168.0.1'));