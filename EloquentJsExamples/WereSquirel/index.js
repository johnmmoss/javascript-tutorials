require('./journal.js')

console.log("Running Squirrel Program!")

function phi(table) {
    return (table[3] * table[0] - table[2] * table[1]) /
        Math.sqrt((table[2] + table[3]) *
            (table[0] + table[1]) *
            (table[1] + table[3]) *
            (table[0] + table[2]));
}

function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for (let i = 0; i < journal.length; i++) {
        let entry = journal[i], index = 0;
        if (entry.events.includes(event)) index += 1;
        if (entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}

function journalEvents(journal) {
    let events = [];
    for (let entry of journal) {
        for (let event of entry.events) {
            if (!events.includes(event)) {
                events.push(event);
            }
        }
    }
    return events;
}

console.log("Phi for all events...");
for (let event of journalEvents(JOURNAL)) {
    console.log(`${event}: ${phi(tableFor(event, JOURNAL))} `);
}

console.log("Phi for close max and close min...");
for (let event of journalEvents(JOURNAL)) {
    let result = phi(tableFor(event, JOURNAL));
    if (result > 0.1 || result < -0.1) {

        console.log(`${event}: ${result} `);
    }
}

console.log("My final answer");
for (let entry of JOURNAL) {
    // We update the array to see when its
    if (entry.events.includes("peanuts") &&
        !entry.events.includes("brushed teeth")) {
        entry.events.push("peanut teeth");
    }
}

console.log(phi(tableFor("peanut teeth", JOURNAL)));