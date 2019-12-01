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


module.exports = { calculateRequiredFuel, calculateModules }