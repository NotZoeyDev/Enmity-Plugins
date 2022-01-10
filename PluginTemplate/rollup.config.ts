import { defineConfig } from "rollup";
import esbuild from "rollup-plugin-esbuild";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";

import { basename } from "path";
const pluginName = basename(process.cwd());

export default defineConfig({
    input: "src/index.ts",
    output: [
        { file: `dist/${pluginName}.js`, format: "cjs", strict: false },
    ],
    plugins: [
        nodeResolve(),
        commonjs(),
        esbuild({ minify: true, target: "es2015" }),
    ]
});