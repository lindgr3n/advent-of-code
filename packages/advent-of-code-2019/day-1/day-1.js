// take its mass, divide by three, round down, and subtract 2.
// fuel = Math.floor(M / 3) - 2

function calculateRequiredFuel({ mass } = {}) {
    if (!mass) {
        return 0;
    }
    return Math.floor(mass / 3) - 2;
}

function calculateModules({ modules } = {}) {
    return modules.reduce((fuel, mass) => {
        fuel += calculateRequiredFuel({ mass });
        return fuel;
    }, 0)
}

function calculateReqursiveModule({ module } = {}) {
    let nextSum = calculateRequiredFuel({ mass: module })
    let sum = nextSum;
    let maxTries = 10000;
    while (nextSum > 0) {
        nextSum = calculateRequiredFuel({ mass: nextSum })
        if (nextSum > 0) {
            sum += nextSum;
        }
        // Sanity check
        if (maxTries < 1) {
            return;
        }
        maxTries--;
    }

    return sum

}

function calculateReqursiveModules({ modules } = {}) {
    const totalFuel = modules.reduce((fuel, module) => {
        fuel += calculateReqursiveModule({ module });
        return fuel;
    }, 0)

    return totalFuel;
}

module.exports = { calculateRequiredFuel, calculateModules, calculateReqursiveModule, calculateReqursiveModules }