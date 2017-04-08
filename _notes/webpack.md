## Add webpack to /package.json
 "scripts": {
    "build":"run webpack"
  },

## Show error details
$ webpack --display-error-details


## config for various environments
    - need dependency "webpack-merge"
    /webpack.config.js
        /config
            webpack.dev.js
            webpack.test.js
            webpack.prod.js
