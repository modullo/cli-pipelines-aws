const { expect, matchTemplate, MatchStyle } = require('@aws-cdk/assert');
const cdk = require('@aws-cdk/core');
const ModulloCliPipelines = require('../lib/modullo-cli-pipelines-stack');

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new ModulloCliPipelines.ModulloCliPipelinesStack(app, 'MyTestStack');
    // THEN
    expect(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
