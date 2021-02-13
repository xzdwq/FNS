Ext.define('Fns.Application', {
  extend: 'Ext.app.Application',
  name: 'Fns',
  quickTips: false,
  platformConfig: {
    desktop: {
      quickTips: true
    }
  },
  stores: [
    // TODO: add global / shared stores here
  ],
  launch: function () {
    // TODO - Launch the application
  }
});
