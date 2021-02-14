Ext.define('Fns.view.forms.knd_0710096.sub_forms.IncomeStatement', {
  extend: 'Ext.form.Panel',
  alias: 'widget.income-statement',
  title: 'Отчет о финансовых результатах',
  name: 'Баланс',
  bodyPadding: 5,
  scrollable: true,
  items: [
    // {
    //   xtype: 'image',
    //   src: 'resources/img/0710096_5.03000_03_3.png',
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
            height: 100,
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
                  'text-align': 'center'
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
                  'text-align': 'center'
                }
              },
              items: [
                {
                  text: 'За отчетный год (графа 4)',
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
                  text: 'За предыдущий год (графа 5)',
                }
              ]
            }
          ]
        },
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
            height: 40,
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
                  text: 'Выручка',
                  name: 'Выруч'
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
                  text: '2110',
                }
              ]
            },
            {
              flex: .4,
              defaults: {
                xtype: 'textfield',
                hideLabel: true,
                width: '100%',
                allowBlank: false,
                allowOnlyWhitespace: false,
                blankText: 'Обязательно для заполнения',
                msgTarget: 'side'
              },
              items: [
                {
                  name: 'Пояснения',
                }
              ]
            },
            {
              flex: .4,
              defaults: {
                xtype: 'textfield',
                hideLabel: true,
                width: '100%',
                allowBlank: false,
                allowOnlyWhitespace: false,
                blankText: 'Обязательно для заполнения',
                msgTarget: 'side'
              },
              items: [
                {
                  name: 'СумОтч',
                }
              ]
            },
            {
              flex: .4,
              defaults: {
                xtype: 'textfield',
                hideLabel: true,
                width: '100%',
                allowBlank: false,
                allowOnlyWhitespace: false,
                blankText: 'Обязательно для заполнения',
                msgTarget: 'side'
              },
              items: [
                {
                  name: 'СумПред',
                }
              ]
            }
          ]
        },
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
            height: 40,
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
                  text: 'Расходы по обычной деятельности',
                  name: 'РасхОбДеят'
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
                  text: '2120',
                }
              ]
            },
            {
              flex: .4,
              defaults: {
                xtype: 'textfield',
                hideLabel: true,
                width: '100%',
                allowBlank: false,
                allowOnlyWhitespace: false,
                blankText: 'Обязательно для заполнения',
                msgTarget: 'side'
              },
              items: [
                {
                  name: 'Пояснения',
                }
              ]
            },
            {
              flex: .4,
              defaults: {
                xtype: 'textfield',
                hideLabel: true,
                width: '100%',
                allowBlank: false,
                allowOnlyWhitespace: false,
                blankText: 'Обязательно для заполнения',
                msgTarget: 'side'
              },
              items: [
                {
                  name: 'СумОтч',
                }
              ]
            },
            {
              flex: .4,
              defaults: {
                xtype: 'textfield',
                hideLabel: true,
                width: '100%',
                allowBlank: false,
                allowOnlyWhitespace: false,
                blankText: 'Обязательно для заполнения',
                msgTarget: 'side'
              },
              items: [
                {
                  name: 'СумПред',
                }
              ]
            }
          ]
        },
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
            height: 40,
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
                  text: 'Проценты к уплате',
                  name: 'ПроцУпл'
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
                  text: '2330',
                }
              ]
            },
            {
              flex: .4,
              defaults: {
                xtype: 'textfield',
                hideLabel: true,
                width: '100%',
                allowBlank: false,
                allowOnlyWhitespace: false,
                blankText: 'Обязательно для заполнения',
                msgTarget: 'side'
              },
              items: [
                {
                  name: 'Пояснения',
                }
              ]
            },
            {
              flex: .4,
              defaults: {
                xtype: 'textfield',
                hideLabel: true,
                width: '100%',
                allowBlank: false,
                allowOnlyWhitespace: false,
                blankText: 'Обязательно для заполнения',
                msgTarget: 'side'
              },
              items: [
                {
                  name: 'СумОтч',
                }
              ]
            },
            {
              flex: .4,
              defaults: {
                xtype: 'textfield',
                hideLabel: true,
                width: '100%',
                allowBlank: false,
                allowOnlyWhitespace: false,
                blankText: 'Обязательно для заполнения',
                msgTarget: 'side'
              },
              items: [
                {
                  name: 'СумПред',
                }
              ]
            }
          ]
        },
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
            height: 40,
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
                  text: 'Прочие доходы',
                  name: 'ПрочДоход'
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
                  text: '2340',
                }
              ]
            },
            {
              flex: .4,
              defaults: {
                xtype: 'textfield',
                hideLabel: true,
                width: '100%',
                allowBlank: false,
                allowOnlyWhitespace: false,
                blankText: 'Обязательно для заполнения',
                msgTarget: 'side'
              },
              items: [
                {
                  name: 'Пояснения',
                }
              ]
            },
            {
              flex: .4,
              defaults: {
                xtype: 'textfield',
                hideLabel: true,
                width: '100%',
                allowBlank: false,
                allowOnlyWhitespace: false,
                blankText: 'Обязательно для заполнения',
                msgTarget: 'side'
              },
              items: [
                {
                  name: 'СумОтч',
                }
              ]
            },
            {
              flex: .4,
              defaults: {
                xtype: 'textfield',
                hideLabel: true,
                width: '100%',
                allowBlank: false,
                allowOnlyWhitespace: false,
                blankText: 'Обязательно для заполнения',
                msgTarget: 'side'
              },
              items: [
                {
                  name: 'СумПред',
                }
              ]
            }
          ]
        },
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
            height: 40,
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
                  text: 'Прочие расходы',
                  name: 'ПрочРасход'
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
                  text: '2350',
                }
              ]
            },
            {
              flex: .4,
              defaults: {
                xtype: 'textfield',
                hideLabel: true,
                width: '100%',
                allowBlank: false,
                allowOnlyWhitespace: false,
                blankText: 'Обязательно для заполнения',
                msgTarget: 'side'
              },
              items: [
                {
                  name: 'Пояснения',
                }
              ]
            },
            {
              flex: .4,
              defaults: {
                xtype: 'textfield',
                hideLabel: true,
                width: '100%',
                allowBlank: false,
                allowOnlyWhitespace: false,
                blankText: 'Обязательно для заполнения',
                msgTarget: 'side'
              },
              items: [
                {
                  name: 'СумОтч',
                }
              ]
            },
            {
              flex: .4,
              defaults: {
                xtype: 'textfield',
                hideLabel: true,
                width: '100%',
                allowBlank: false,
                allowOnlyWhitespace: false,
                blankText: 'Обязательно для заполнения',
                msgTarget: 'side'
              },
              items: [
                {
                  name: 'СумПред',
                }
              ]
            }
          ]
        },
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
            height: 40,
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
                  text: 'Налоги на прибыль (доходы)',
                  name: 'НалПрибДох'
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
                  text: '2410',
                }
              ]
            },
            {
              flex: .4,
              defaults: {
                xtype: 'textfield',
                hideLabel: true,
                width: '100%',
                allowBlank: false,
                allowOnlyWhitespace: false,
                blankText: 'Обязательно для заполнения',
                msgTarget: 'side'
              },
              items: [
                {
                  name: 'Пояснения',
                }
              ]
            },
            {
              flex: .4,
              defaults: {
                xtype: 'textfield',
                hideLabel: true,
                width: '100%',
                allowBlank: false,
                allowOnlyWhitespace: false,
                blankText: 'Обязательно для заполнения',
                msgTarget: 'side'
              },
              items: [
                {
                  name: 'СумОтч',
                }
              ]
            },
            {
              flex: .4,
              defaults: {
                xtype: 'textfield',
                hideLabel: true,
                width: '100%',
                allowBlank: false,
                allowOnlyWhitespace: false,
                blankText: 'Обязательно для заполнения',
                msgTarget: 'side'
              },
              items: [
                {
                  name: 'СумПред',
                }
              ]
            }
          ]
        },
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
            height: 40,
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
                  text: 'Чистая прибыль (убыток)',
                  cls: 'label-bold',
                  name: 'ЧистПрибУб'
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
                  text: '2400',
                }
              ]
            },
            {
              flex: .4,
              defaults: {
                xtype: 'textfield',
                hideLabel: true,
                width: '100%',
                allowBlank: false,
                allowOnlyWhitespace: false,
                blankText: 'Обязательно для заполнения',
                msgTarget: 'side'
              },
              items: [
                {
                  name: 'Пояснения',
                }
              ]
            },
            {
              flex: .4,
              defaults: {
                xtype: 'textfield',
                hideLabel: true,
                width: '100%',
                allowBlank: false,
                allowOnlyWhitespace: false,
                blankText: 'Обязательно для заполнения',
                msgTarget: 'side'
              },
              items: [
                {
                  name: 'СумОтч',
                }
              ]
            },
            {
              flex: .4,
              defaults: {
                xtype: 'textfield',
                hideLabel: true,
                width: '100%',
                allowBlank: false,
                allowOnlyWhitespace: false,
                blankText: 'Обязательно для заполнения',
                msgTarget: 'side'
              },
              items: [
                {
                  name: 'СумПред',
                }
              ]
            }
          ]
        },
      ]
    }
  ]
});