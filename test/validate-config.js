var eslint = require('eslint')
var test = require('ava')

test('load config in eslint to validate all rule syntax is correct', (t) => {
  var CLIEngine = eslint.CLIEngine

  var cli = new CLIEngine({
    useEslintrc: false,
    configFile: 'eslintrc.json'
  })

  var code = 'var foo = 1\nvar bar = function () {}\nbar(foo)\n'

  t.is(cli.executeOnText(code).errorCount, 0)
})
