function isSafeReport(report) {
    let increasing = true;
    let decreasing = true;

    for (let i = 1; i < report.length; i++) {
        const diff = report[i] - report[i - 1];
        if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
            return false;
        }
        if (diff < 0) {
            increasing = false;
        }
        if (diff > 0) {
            decreasing = false;
        }
    }

    return increasing || decreasing;
}

function isSafeWithDampener(report) {
    if (isSafeReport(report)) {
        return true;
    }

    for (let i = 0; i < report.length; i++) {
        const newReport = report.slice(0, i).concat(report.slice(i + 1));
        if (isSafeReport(newReport)) {
            return true;
        }
    }

    return false;
}

function countSafeReports(reports) {
    let safeCount = 0;
    reports.forEach(report => {
        const levels = report.trim().split(/\s+/).map(Number);
        if (isSafeWithDampener(levels)) {
            safeCount++;
        }
    });
    return safeCount;
}

module.exports = { countSafeReports, isSafeReport, isSafeWithDampener };