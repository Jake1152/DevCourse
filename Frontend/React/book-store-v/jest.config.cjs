// module.exports = {
//   preset: "ts-jest",
//   testEnvironment: "node",
//   transform: {
//     "^.+\\.tsx?$": "ts-jest",
//   },
//   moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
// };

module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
};
