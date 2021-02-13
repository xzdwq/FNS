Ext.define('Fns.view.window.Main', {
  extend: 'Ext.window.Window',
  autoShow: true,
  modal: true,
  maximizable: true,
  resizable: {
    dynamic: true
  },
  height: Ext.getBody().getViewSize().height - 100,
  width: Ext.getBody().getViewSize().width - 100,
  layout: 'fit',
  listeners: {
    afterrender: function(el) {
      let innerPanel = el.down('panel');
      el.setTitle(innerPanel.getTitle());
      innerPanel.setScrollable(true);
    }
  }
});