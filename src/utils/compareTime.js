function compareTime(time1, time2) {
    const t1 = new Date(time1);
    const t2 = new Date(time2);

    if (t1.getTime() > t2.getTime) return false;
    return true;
}

module.exports = {
    compareTime
}