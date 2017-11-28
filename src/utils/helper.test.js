import { plus, convertToSubnet } from './helper';
import { expect } from 'chai';

describe('plus test', () => {
    it('should return x + y', () => {
        expect(plus(1, 2)).to.equal(3);
    });
})

describe('convertToSubnet test', () => {
    it('should convert mask to subnet', () => {
        expect(convertToSubnet(32)).to.equal('255.255.255.255');
        expect(convertToSubnet(1)).to.equal('128.0.0.0');
    })
})