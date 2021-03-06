const path = require("path");
const handlebars = require("express-handlebars");

const hbs = handlebars.create({
    defaultLayout: "main",
    layoutsDir: path.join("views/layouts"),
    partialsDir: path.join("views/partials"),
    helpers: {
        isOne: (runtime) => {
            if (runtime == 1) {
                return true;
            } else {
                return false;
            }
        },
        TakeHalf: (runtime) => {
            var part = runtime.toString().substring(0, 100);
            return `${part}...`;
        },
    },
});

module.exports = hbs;
