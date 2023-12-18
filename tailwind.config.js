/** @type {import('tailwindcss').Config} */
export default {
    content: ["./*.hbs", "./**/*.hbs"],
    theme: {
        extend: {
            colors: {
                mainColor: "#538DE4",
                whiteTextColor: "#fff",
                blackTextColor: "#1D283C",
                grayTextColor: "#7B8391",
                bgWhitecolor: "#E5E7E9",
                bgBlackColor: "#031026",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
