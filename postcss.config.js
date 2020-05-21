// module.exports = {
//   plugins: [
//     "tailwindcss",
// process.env.NODE_ENV === `production` ? `autoprefixer` : undefined,
//   process.env.NODE_ENV === `production` ? `cssnano` : undefined,
//   process.env.NODE_ENV === `production`
//     ? [
//         `@fullhuman/postcss-purgecss`,
//         {
//           content: [`./src/**/*.{js,jsx,ts,tsx}`],
//           defaultExtractor: content =>
//             content.match(/[\w-/:]+(?<!:)/g) || [],
//         },
//       ]
//     : undefined,
//   ],
// }

module.exports = () => ({
  plugins: [
    require("tailwindcss"),
    process.env.NODE_ENV === `production` ? require(`autoprefixer`) : undefined,
    process.env.NODE_ENV === `production` ? require(`cssnano`) : undefined,
  ],
})
