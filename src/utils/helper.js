
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

export const ipaddress = (ip) => {
    const iparray = ip.split('.').map((point) => {
        const ipp = (+point).toString(2);
        return '0'.repeat(8-ipp.length) + ipp;
    });
    return iparray.join('.');
} // 255.255.0.128 -> 11111111.11111111.00000000.10000000

// export const NetworkAdress = (ip,mask) => {
//     const address 
// }

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
