/**
 * @type {import('svgo').Config}
 */
export default {
  floatPrecision: 3,
  js2svg: {
    pretty: false,
  },
  multipass: true,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
        },
      },
    },
  ],
};
