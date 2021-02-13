Ext.define('Fns.view.forms.knd_0710096.MainController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.knd_0710096',
  init: function() {
    this.control({
      '#stepBar': {
        afterrender: this.onStepBar
      },
      '#knd_0710096': {
        tabchange: this.onTabChange
      }
    })
  },
  onStepBar: function() {
    let next = Ext.ComponentQuery.query('#next')[0];
    let knd_0710096 = Ext.ComponentQuery.query('#knd_0710096')[0];
    let baseLayout = knd_0710096.getLayout();
    let totalCard = baseLayout.activeItemCount;
    next.setDisabled(totalCard <= 1 ? true : false);
  },
  onNav: function(el, i) {
    let knd_0710096 = Ext.ComponentQuery.query('#knd_0710096')[0];
    let baseLayout = knd_0710096.getLayout();
    if(el.itemId == 'next') {
      baseLayout.getNext() ? baseLayout.next(3) : null;
    }
    else if(el.itemId == 'prev') {
      baseLayout.getPrev() ? baseLayout.prev() : null;
    }
    this.hasErrors(el.itemId, knd_0710096.down('form'))
  },
  onTabChange: function() {
    this.onDisabledBtn();
  },
  onDisabledBtn: function() {
    let prev = Ext.ComponentQuery.query('#prev')[0];
    let next = Ext.ComponentQuery.query('#next')[0];
    let knd_0710096 = Ext.ComponentQuery.query('#knd_0710096')[0];
    let totalCard = knd_0710096.items.items.length;
    let activeTab = knd_0710096.getActiveTab();
    let activeTabIndex = knd_0710096.items.indexOf(activeTab);
    prev.setDisabled(activeTabIndex == 0);
    next.setDisabled((activeTabIndex+1) == totalCard);
  },
  hasErrors: function(btn, form) {
    let knd_0710096 = form.up('tabpanel');
    let activeTab = knd_0710096.getActiveTab();
    let activeTabIndex = knd_0710096.items.indexOf(activeTab);
    // console.log(form.getForm().isValid());
    if(btn == 'prev') {
      let next_form = knd_0710096.items.items[activeTabIndex+1];
      try {
        if(next_form.getForm().isValid()) {
          next_form.setIconCls('good fa fa-circle');
        } else {
          next_form.setIconCls('error fa fa-circle');
        }
      } catch(e) {}
    }
    if(btn == 'next') {
      let prev_form = knd_0710096.items.items[activeTabIndex-1];
      try {
        if(prev_form.getForm().isValid()) {
          prev_form.setIconCls('good fa fa-circle');
        } else {
          prev_form.setIconCls('error fa fa-circle');
        }
      } catch(e) {}
    }
  }
});