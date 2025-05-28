// task 1
function test1(str) {
    if (str.includes("?") || str.includes("!")) {
        console.log("String contains '?' or '!'");
    }
    else {
        console.log("String does not contain '?' or '!");
    }
}

test1("How are you?");
test1("Fine.");

function test2(str) {
    let count = 0;

    for (const s of str) {
        if (s === '.') count++;
    }

    console.log(`String contains ${count} '.' characters`);
}

test2("Hello. How are you? Fine. I am good.");