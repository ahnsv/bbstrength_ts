import typescript from 'rollup-plugin-typescript2';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';

const DEV = 'development';
const PROD = 'production';
const nodeEnv = process.env.NODE_ENV;

export default {
    input: 'src/index.tsx',
    output: {
        file: 'public/bundle.js',
        format: 'iife',
    },
    plugins: [
        typescript(),
        replace({
            'process.env.NODE_ENV': JSON.stringify(nodeEnv),
        }),
        commonjs({
            include: 'node_modules/**',
            namedExports: {
                'node_modules/react-dom/index.js': ['render'],
                'node_modules/react/index.js': ['Component', 'PropTypes', 'createElement'],
            },
        }),
        postcss({
            extensions: ['.css', '.scss'],
        }),
        serve({
            open: true,
            port: 3000,
            contentBase: 'public',
            historyApiFallback: true,
        }),
        nodeResolve(),
        livereload({
            watch: 'public',
        }),
    ],
};
