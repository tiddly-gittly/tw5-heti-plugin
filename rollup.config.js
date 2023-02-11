import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import {terser} from 'rollup-plugin-terser';

export default {
  input: 'src-heti/js/heti-addon.js',
  output: [
    {
      file: 'src/heti/heti-addon.min.js',
      format: 'umd',
      name: 'Heti',
      plugins: [
        terser({
          compress: {
            pure_funcs: ["console.info"] // 移除调试信息
          },
          output: {
            comments: false
          }
        })
      ]
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
  ]
};
