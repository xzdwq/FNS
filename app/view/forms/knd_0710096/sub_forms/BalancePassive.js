Ext.define('Fns.view.forms.knd_0710096.sub_forms.BalancePassive', {
  extend: 'Ext.form.Panel',
  alias: 'widget.balance-passive',
  title: 'Бухгалтерский баланс. Пассив',
  name: 'Баланс',
  bodyPadding: 5,
  scrollable: true,
  items: [
    // {
    //   xtype: 'image',
    //   src: 'resources/img/0710096_5.03000_03_2.png',
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
                  text: 'На отчетную дату отчетного периода (графа 4)',
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
                  text: 'На 31 декабря предыдущего года (графа 5)',
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
                  text: 'На 31 декабря года, предшествующего предыдущему (графа 6)',
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
                  text: 'Капитал и резервы*',
                  name: 'КапРез'
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
                  text: '1300',
                }
              ]
            },
            {
              flex: .4,
              defaults: {
                xtype: 'textfield',
                hideLabel: true,
                width: '100%'
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
                width: '100%'
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
                width: '100%'
              },
              items: [
                {
                  name: 'СумПрдщ',
                }
              ]
            },
            {
              flex: .4,
              defaults: {
                xtype: 'textfield',
                hideLabel: true,
                width: '100%'
              },
              items: [
                {
                  name: 'СумПрдшв',
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
                  text: 'Целевые средства (заполняется некоммерческими организациями)',
                  name: 'ЦелевСредства'
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
                  text: '1350',
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
                  name: 'СумПрдщ',
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
                  name: 'СумПрдшв',
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
            height: 60,
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
                  text: 'Фонд недвижимого и особо ценного движимого имущества и иные целевые фонды (заполняется некоммерческими организациями)',
                  name: 'ФондИмущИнЦФ'
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
                  text: '1360',
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
                  name: 'СумПрдщ',
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
                  name: 'СумПрдшв',
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
                  text: 'Долгосрочные заемные средства',
                  name: 'ДлгЗаемСредств'
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
                  text: '1410',
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
                  name: 'СумПрдщ',
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
                  name: 'СумПрдшв',
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
                  text: 'Другие долгосрочные обязательства',
                  name: 'ДрДолгосрОбяз'
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
                  text: '1450',
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
                  name: 'СумПрдщ',
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
                  name: 'СумПрдшв',
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
                  text: 'Краткосрочные заемные средства',
                  name: 'КртЗаемСредств'
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
                  text: '1510',
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
                  name: 'СумПрдщ',
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
                  name: 'СумПрдшв',
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
                  text: 'Кредиторская задолженность',
                  name: 'КредитЗадолж'
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
                  text: '1520',
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
                  name: 'СумПрдщ',
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
                  name: 'СумПрдшв',
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
                  text: 'Другие краткосрочные обязательства',
                  name: 'ДрКраткосрОбяз'
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
                  text: '1550',
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
                  name: 'СумПрдщ',
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
                  name: 'СумПрдшв',
                }
              ]
            }
          ]
        },,
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
                  text: 'БАЛАНС',
                  name: 'Баланс'
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
                  text: '1700',
                }
              ]
            },
            {
              flex: .4,
              defaults: {
                xtype: 'textfield',
                hideLabel: true,
                width: '100%'
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
                width: '100%'
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
                width: '100%'
              },
              items: [
                {
                  name: 'СумПрдщ',
                }
              ]
            },
            {
              flex: .4,
              defaults: {
                xtype: 'textfield',
                hideLabel: true,
                width: '100%'
              },
              items: [
                {
                  name: 'СумПрдшв',
                }
              ]
            }
          ]
        }
      ]
    }
  ]
});