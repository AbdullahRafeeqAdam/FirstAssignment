let name = "Abdullah";

let lower = name.toLowerCase();

let upper = name.toUpperCase();

let title = toTitleCase(name);

function toTitleCase(str) {
    return str.replace(/\b\w/g, function (char) {
        return char.toUpperCase();
    });
}

console.log("Lowercase:", lower);
console.log("Uppercase:", upper);
console.log("Titlecase:", title);
