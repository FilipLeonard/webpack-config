const plugins = [];

if (process.env.NODE_ENV !== 'production') {
  plugins.push('react-refresh/babel');
}

module.exports = {
  presets: [
    '@babel/preset-env',
    // since React 17.+, opt-in option for being able to write and return JSX without explicitly importing React
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  plugins,
};
