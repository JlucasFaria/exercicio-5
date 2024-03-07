function inverterString(str) {
    let inverted = '';
    for (let i = str.length - 1; i >= 0; i--) {
        inverted += str[i];
    }
    return inverted;
}

const StringNormal = 'Como vai?';
const StringNormal2 = 'Bem e você?'
console.log('String invertida:', inverterString(StringNormal));
console.log('String invertida:', inverterString(StringNormal2))

