import withMarkdoc from "@markdoc/next.js"

import withSearch from './src/markdoc/search.mjs'

/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode:true,
    pageExtensions:['jsx','js','md']
};
 
export default withSearch( withMarkdoc({schemaPath:'./src/markdoc/'})(nextConfig));
