import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import packageJSON from "./package.json";
import scss from 'rollup-plugin-scss';

const input = "./src/index.js";

export default [
  // CommonJS
  {
    input,
    output: {
      file: packageJSON.main,
      format: "cjs"
    },
    plugins: [
      babel({
        exclude: "node_modules/**"
      }),
      scss(),
      external(),
      resolve(),
      commonjs()
    ]
  }
];