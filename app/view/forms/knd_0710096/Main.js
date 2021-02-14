Ext.define('Fns.view.forms.knd_0710096.Main', {
  extend: 'Ext.panel.Panel',
  alias: 'widget.knd_0710096',
  title: 'Упрощенная бухгалтерская (финансовая) отчетность версии 5.03',
  header: false,
  requires: [
    'Fns.view.forms.knd_0710096.MainController',
    'Fns.view.forms.knd_0710096.sub_forms.ReportDetails',
    'Fns.view.forms.knd_0710096.sub_forms.BalanceActive',
    'Fns.view.forms.knd_0710096.sub_forms.BalancePassive',
    'Fns.view.forms.knd_0710096.sub_forms.IncomeStatement',
    'Fns.view.forms.knd_0710096.sub_forms.UseReport',
    'Fns.view.forms.knd_0710096.sub_forms.CapitalMovement',
    'Fns.view.forms.knd_0710096.sub_forms.CapitalAdjustment'
  ],
  controller: 'knd_0710096',
  border: false,
  layout: 'hbox',
  items: [
    {
      xtype: 'tabpanel',
      itemId: 'knd_0710096',
      tabPosition: 'left',
      cls: 'knd_0710096',
      border: false,
      tabRotation: 0,
      tabBar: {
        flex: 1,
        maxTabWidth: 250
      },
      layout: 'card',
      flex: 1,
      height: '100%',
      defaults: {
        cls: 'knd_0710096_card',
        border: false,
        iconCls: 'neutral fa fa-circle-o',
        tabConfig: {
          // flex: 1,
          listeners: {
            afterrender: function(el) {
              let ln = el.title.length;
              if(ln > 50) {
                el.setFlex(1);
              } else {
                el.setFlex(.6);
              }
            }
          }
        }
      },
      items: [
        { xtype: 'report-details' },
        { xtype: 'balance-active' },
        { xtype: 'balance-passive' },
        { xtype: 'income-statement' },
        { xtype: 'use-report' },
        { xtype: 'capital-movement' },
        { xtype: 'capital-adjustment' },
        {
          xtype: 'panel',
          title: 'Отчет об изменениях капитала. Чистые активы',
          html: 8
        },
        {
          xtype: 'panel',
          title: 'Отчет о движении денежных средств',
          html: 9
        }
      ],
      dockedItems: {
        dock: 'bottom',
        xtype: 'toolbar',
        itemId: 'stepBar',
        items: [
          {
            xtype: 'tbtext',
            style: {
              'font-weight': 600,
              color: '#8c8f93'
            },
            text: 'Прогресс заполнения: ',
            width: 235
          },
          {
            xtype: 'progressbar',
            itemId: 'progress',
            flex: 1,
            value: 0
          },
          '->',
          {
            text: 'Назад',
            itemId: 'prev',
            width: 100,
            handler: 'onNav',
            disabled: true
          },
          {
            text: 'Далее',
            itemId: 'next',
            width: 100,
            handler: 'onNav'
          }
        ]
      }
    }
  ]
});