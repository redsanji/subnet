
export const IP = (ip) => {
    return ip;
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

export const convertToWildcard = (mask) => {
    const a = convertToSubnet(mask).split('.').map((ip) => {
        return 255-parseInt(ip);
    })
    return a;
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
    if (mask < 8)
        return 'None';
    else if( 8 <= mask)
        return 'A';
    else if (16 <= mask)
        return 'B';
    else if (24 <= mask)
        return 'C';
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
