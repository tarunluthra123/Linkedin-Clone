module.exports = {
    purge: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        minWidth: {
            0: "0",
            "10/100": "10%",
            "20/100": "20%",
            "25vw": "25vw",
            "30vw": "30vw",
            "60/100": "60%",
            "70/100": "70%",
        },

        extend: {
            colors: {
                lightgray: "#f3f2ef",
                grayblue: "#a0b4b7",
                linkedinblue: "#4180cc",
                darkerblue: "#3E7DC9",
            },
            inset: {
                auto: "auto",
            },
            width: {
                "30rem": "37rem",
            },
            spacing: {
                "10%": "10%",
                "20%": "20%",
                "25%": "25%",
                "30%": "30%",
                "40%": "40%",
            },
        },
    },
    variants: {
        extend: {
            width: ["focus-within"],
            scale: ["focus-within", "focus"],
            borderWidth: ["hover", "focus"],
            ringWidth: ["hover", "active"],
        },
    },
    plugins: [],
};
