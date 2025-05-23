/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    presets: [require("nativewind/preset")],
    theme: {
        extend: {
            fontFamily: {
                200: ["Tajawal-ExtraLight"],
                300: ["Tajawal-Light"],
                400: ["Tajawal-Regular"],
                500: ["Tajawal-Medium"],
                600: ["Tajawal-Bold"],
                800: ["Tajawal-ExtraBold"],
                900: ["Tajawal-Black"],
            },
            fontSize: {
                xs: ["var(--fs-xs)"],
                sm: ["var(--fs-sm)"],
                base: ["var(--fs-base)"],
                lg: ["var(--fs-lg)"],
                xl: ["var(--fs-xl)"],
                "2xl": ["var(--fs-2xl)"],
            },
            colors: {
                primary: {
                    100: "#2E7D320A",
                    200: "#2E7D321A",
                    300: "#2E7D32",
                    400: "#1B5E20",
                    500: "#145214",
                },
                accent: {
                    100: "#FBFBFD",
                },
                black: {
                    DEFAULT: "#000000",
                    100: "#8C8E98",
                    200: "#666876",
                    300: "#191D31",
                },
                danger: "#F75555",
            },
            // spacing: {
            //   xs: "var(--space-xs)",
            //   sm: "var(--space-sm)",
            //   base: "var(--space-base)",
            //   lg: "var(--space-lg)",
            //   xl: "var(--space-xl)",
            // },
        },
    },
    plugins: [],
    // Add RTL support
    corePlugins: {
        textAlign: true,
    },
    variants: {
        extend: {
            textAlign: ["rtl"],
            margin: ["rtl"],
            padding: ["rtl"],
        },
    },
};
