import Vue from 'vue'

Vue.config.productionTip = false

// require all test files (files that ends with .spec.js)
const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys().forEach(testsContext)

// require all src files except main.js for coverage.
// you can also change this to match only the subset of files that
// you want coverage for.

const srcContext = require.context('../../src/components/', true, /^\.\/(?!(main|yml)?$)/)
srcContext.keys().filter(one => {
  if (/metas\.yml/.test(one)) {
    return false
  }
  return true
}).forEach(srcContext)
