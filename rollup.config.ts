import replace from '@rollup/plugin-replace';

export default {
  input: 'src/index.js',
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true
    })
  ]
};