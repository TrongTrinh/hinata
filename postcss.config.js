// module.exports = {
//     plugins: [
//         "postcss-flexbugs-fixes",
//         "tailwindcss",
//         [
//             "postcss-preset-env",
//             {
//                 autoprefixer: { flexbox: "no-2009" },
//                 stage: 3,
//                 features: { "custom-properties": false },
//             },
//         ],
//         [
//             "@fullhuman/postcss-purgecss",
//             {
//                 content: ["./components/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],
//                 css: ["./styles/**/*.{css,scss}"],
//                 defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
//                 safelist: {
//                     standard: ["html", "body", "btn"],
//                     deep: [/^col/, /^navbar/, /^nav/],
//                 },
//             },
//         ],
//     ],
// };

module.exports = {
    plugins: ['postcss-import', 'tailwindcss', 'postcss-preset-env'],
};
