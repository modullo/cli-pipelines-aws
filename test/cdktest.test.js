const { expect, matchTemplate, MatchStyle } = require('@aws-cdk/assert');
const cdk = require('@aws-cdk/core');
const Cdktest = require('../lib/cdktest-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new Cdktest.CdktestStack(app, 'MyTestStack');
    // THEN
    expect(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
