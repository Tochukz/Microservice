function minimalPlugin(options) {
  console.log(options);
}

require('seneca')()
.use(minimalPlugin, {foo: 'bar'})