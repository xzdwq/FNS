Ext.define('Fns.view.forms.knd_0710096.MainController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.knd_0710096',
  init: function() {
    this.control({
      '#stepBar': {
        afterrender: this.onStepBar
      },
      '#knd_0710096': {
        beforerender: this.onBeforeRenderTab,
        tabchange: this.onTabChange,
        beforetabchange: this.onBeforeTabChange
      }
    })
  },
  onBeforeRenderTab: function(el) {
    let totalCard = el.items.items.length;
    el.totalCard = totalCard;
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
  },
  onBeforeTabChange: function(knd_0710096, newTab, oldTab) {
    let coef = 100 / knd_0710096.totalCard;
    oldTab.progress = 0;
    let activeTab = knd_0710096.getActiveTab();
    let activeTabIndex = knd_0710096.items.indexOf(activeTab);
    let form = knd_0710096.items.items[activeTabIndex];
    try {
      if(form.getForm().isValid()) {
        oldTab.setIconCls('good fa fa-circle');
        oldTab.progress = coef;
      } else {
        oldTab.setIconCls('error fa fa-circle');
        oldTab.progress = 0;
      }
    } catch(e) {}
    this.onSetProgress(knd_0710096);
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
  onSetProgress: function(knd_0710096) {
    let progressBar = Ext.ComponentQuery.query('#progress')[0];
    let progress = 0;
    let card = knd_0710096.items.items;
    for(let i = 0; i < card.length; i++) {
      card[i].progress ? progress += card[i].progress : progress += 0;
    }
    progressBar.setValue(progress / 100);
  },
  hasErrors: function(form) {
  }
});