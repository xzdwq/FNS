Ext.define('Fns.view.forms.knd_0710096.sub_forms.CapitalAdjustment', {
  extend: 'Ext.form.Panel',
  alias: 'widget.capital-adjustment',
  title: 'Отчет об изменениях капитала. Корректировка в связи с изменением учетной политики и исправлением ошибок',
  name: 'ДвиженКап',
  bodyPadding: 5,
  scrollable: true,
  items: [
    // {
    //   xtype: 'image',
    //   src: 'resources/img/0710096_5.03000_03_5.png',
    //   width: 120
    // },
    {
      xtype: 'panel',
      layout: 'vbox',
      items: [
        {
          xtype: 'panel',
          layout: 'hbox',
          width: '100%',
          defaults: {
            xtype: 'panel',
            layout: {
              type: 'vbox',
              pack: 'center'
            },
            height: 105,
            padding: '0 2 0 2',
            style: {
              border: '1px solid #ccc'
            }
          },
          items: [
            {
              flex: 1,
              defaults: {
                xtype: 'label',
                hideLabel: true,
                width: '100%',
                style:{
                  'text-align': 'left'
                }
              },
              items: [
                {
                  text: 'Наименование',
                }
              ]
            },
            {
              flex: .2,
              defaults: {
                xtype: 'label',
                hideLabel: true,
                width: '100%',
                style:{
                  'text-align': 'center'
                }
              },
              items: [
                {
                  text: 'Код строки',
                }
              ]
            },
            {
              flex: .4,
              defaults: {
                xtype: 'label',
                hideLabel: true,
                width: '100%',
                style:{
                  'text-align': 'center',
                  'font-size': '12px'
                }
              },
              items: [
                {
                  text: 'Номер соответствующего пояснения (графа 1)',
                }
              ]
            },
            {
              flex: .4,
              defaults: {
                xtype: 'label',
                hideLabel: true,
                width: '100%',
                style:{
                  'text-align': 'center',
                  'font-size': '12px'
                }
              },
              items: [
                {
                  text: 'На 31 декабря года, предшествующего предыдущему (графа 3)',
                }
              ]
            },
            {
              flex: .4,
              defaults: {
                xtype: 'label',
                hideLabel: true,
                width: '100%',
                style:{
                  'text-align': 'center'
                }
              },
              items: [
                {
                  text: 'Изменения капитала за предыдущий год за счет чистой прибыли (убытка) (графа 4)',
                }
              ]
            },
            {
              flex: .4,
              defaults: {
                xtype: 'label',
                hideLabel: true,
                width: '100%',
                style:{
                  'text-align': 'center'
                }
              },
              items: [
                {
                  text: 'Изменения капитала за предыдущий год за счет иных факторов (графа 5)',
                }
              ]
            },
            {
              flex: .4,
              defaults: {
                xtype: 'label',
                hideLabel: true,
                width: '100%',
                style:{
                  'text-align': 'center'
                }
              },
              items: [
                {
                  text: 'На 31 декабря предыдущего года (графа 6)',
                }
              ]
            }
          ]
        },
      ]
    }
  ]
});