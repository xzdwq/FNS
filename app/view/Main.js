Ext.define('Fns.view.Main', {
  extend: 'Ext.panel.Panel',
  title: 'Fns.view.Main',
  requires: [
    'Fns.view.window.Main',
    'Fns.view.forms.knd_0710096.Main'
  ],
  tbar: [
    {
      text: 'Упрощенная бухгалтерская (финансовая) отчетность версии 5.03',
      handler: function() {
        Ext.create('Fns.view.window.Main', {
          items: { xtype: 'knd_0710096' }
        });
      }
    }
  ]
});