function opCodeCalculator(input) {
    const stepCount = 4;
    const OPCODE = {
        ADD: 1,
        MULTIPLY: 2,
        EXIT: 99
    }
    let shouldExit = false;
    const final = input.reduce((sequence, current, index) => {
        if (shouldExit) {
            return sequence;
        }

        // Step four steps
        if (index % stepCount !== 0) {
            return sequence;
        }

        const sequenceCurrent = sequence[index]
        const sequenceOne = sequence[index + 1]
        const sequenceTwo = sequence[index + 2]
        const sequenceTarget = sequence[index + 3]

        switch (sequenceCurrent) {
            case OPCODE.ADD:
                sequence[sequenceTarget] = sequence[sequenceOne] + sequence[sequenceTwo];
                break;
            case OPCODE.MULTIPLY:
                sequence[sequenceTarget] = sequence[sequenceOne] * sequence[sequenceTwo];
                break;
            case OPCODE.EXIT:
                shouldExit = true;
                break;
            default:
                break;
        }
        return sequence;
    }, input)

    return final;
}


module.exports = { opCodeCalculator }