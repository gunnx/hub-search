const npsUtils = require('nps-utils');

const scripts = {
  default: {
    default: {
      description: 'Run webpack in watch mode',
      script: 'nps client'
    },
    buildAllProd: {
      description: 'Builds JavaScript and compiles for production',
      script: 'client.buildProd'
    }
  },
  client: {
    default: {
      description: 'Build client app for DEV with watch mode',
      script: 'NODE_ENV=development webpack-serve --config webpack.js'
    },
    buildDev: {
      description: 'Build client app for DEV',
      script: 'NODE_ENV=development webpack --mode=development --config webpack.js'
    },
    buildProd: {
      description: 'Build client app for PROD',
      script: 'NODE_ENV=development webpack --mode=production --config webpack.js'
    }
  },
  lint: {
    default: {
      description: 'LINTING: Lint JavaScript files and stylesheets',
        script: npsUtils.series.nps('lint.sass', 'lint.js')
    },

    sass: {
      description: 'Lint SASS files',
        script: 'stylelint "./src/**/*.scss"'
    },

    js: {
      description: 'Lint all JavaScript files',
        script: 'semistandard --env jest --env browser "./src/**/*.js"'
    },

    fixJs: {
      description: 'Autofix linting issues for JavaScript files',
        script: 'nps "lint.js --fix"'
    }
  },
  test: {
    default: {
      description: 'Run all JS tests',
      script: `jest --config ./jest-config.json --notify`
    },
    watch: {
      description: 'Run Jest in watch mode',
      script: 'nps "test --watch"'
    },
    coverage: {
      description: 'Run coverage for files that have tests',
      script: `nps "test --coverage --silent"`
    }
  },
};

module.exports = { scripts };
