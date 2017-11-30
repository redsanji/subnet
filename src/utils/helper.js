
export const IP = (ip) => {
    return ip;
}

export const NetworkAddress = (ip, mask) => {
    ip = ipaddress(ip).split('.').join('');
    let output = ip.substr(0, mask)+'0'.repeat(32-mask);
    output = output.match(/.{8}/g);
    const netaddr = output.map((elem) => {
        return parseInt((+elem),2)
    })
    return netaddr.join('.');
}

export const Broadcast = (ip, mask) => {
    let netaddr = ipaddress(getNetworkAddress(ip, mask)).split('.').join('');
    let bc = netaddr.substr(0, mask)+'1'.repeat(32-mask);
    bc = bc.match(/.{8}/g);
    const output = bc.map((elem) => {
        return parseInt((+elem),2)
    })
    return output.join('.');
}

export const convertToSubnet = (mask) => {
    const subnet = [0, 0, 0, 0].map(() => {
        const sub = '00000000'.split('').map(() => {
            mask -=1;
            return mask >=0 ? '1' : '0';
        })
        return parseInt(sub.join(''), 2);
    });
    return subnet.join('.');
} // 1 -> 128.0.0.0


export const totalHost = (ip, mask) => {
    let bc = ipaddress(Broadcast(ip, mask)).split('.');
    bc = bc.join('');
    let nd = ipaddress(NetworkAddress(ip, mask)).split('.');
    nd = nd.join('');
    return parseInt(bc, 2)-parseInt(nd, 2)+1;
}

export const numHost = (ip, mask) => {
    return totalHost(ip, mask)-2;
}

export const range = (ip, mask) => {
    let min = NetworkAddress(ip, mask).split('.');
    min[3] = (parseInt(min[3],10)+1).toString();
    let max = Broadcast(ip, mask).split('.');
    max[3] = (parseInt(max[3],10)-1).toString();
    return min.join('.')+' - '+max.join('.');
}

export const convertToWildcard = (mask) => {
    const a = convertToSubnet(mask).split('.').map((ip) => {
        return 255-parseInt(ip);
    })
    return a.join('.');
}

export const BinarySubnet = (mask) => {
    const a = convertToSubnet(mask);
    const b = ipaddress(a);
    return b;
}

export const ipaddress = (ip) => {
    const iparray = ip.split('.').map((point) => {
        const ipp = (+point).toString(2);
        return '0'.repeat(8-ipp.length) + ipp;
    });
    return iparray.join('.');
} // 255.255.0.128 -> 11111111.11111111.00000000.10000000


export const IPClass = (mask) => {
    if (24 <= mask)
    return 'C';
    else if (16 <= mask)
    return 'B';
    else if( 8 <= mask)
    return 'A';
    else if (mask < 8)
    return 'None';
}

export const IPtype = (ip) => {
    ip = BinaryID(ip);
    if (1010000000000000000000000000 <= ip <= 1010111111111111111111111111) {
        return 'Private';
    } else if (10101100000100000000000000000000 <= ip <= 10101100000111111111111111111111) {
        return 'Private';
    } else if (11000000101010000000000000000000 <= ip <= 110000001010100001111111111111111) {
        return 'Private';
    } else {
        return 'Public';
    }
}

export const CIDR = (mask) => {
    return '/' + mask ;
}

export const Short = (ip,mask) => {
    return ip + '/' + mask ;
}

export const BinaryID = (ip) => {
    return ipaddress(ip).split('.').join('');
}

export const IntegerID = (ip) => {
    return parseInt(BinaryID(ip), 2);
}

export const HexID = (ip) => {
    return (IntegerID(ip)).toString(16);
}
