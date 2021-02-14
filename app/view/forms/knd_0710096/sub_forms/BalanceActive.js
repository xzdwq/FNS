Ext.define('Fns.view.forms.knd_0710096.sub_forms.BalanceActive', {
  extend: 'Ext.form.Panel',
  alias: 'widget.balance-active',
  title: 'Бухгалтерский баланс. Актив',
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
                  text: 'Материальные внеоборотные активы',
                  name: 'МатВнеАкт'
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
                  text: '1150',
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
                  text: 'Нематериальные, финансовые и другие внеоборотные активы',
                  name: 'НеМатФинАкт'
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
                  text: '1170',
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
                  text: 'Запасы',
                  name: 'Запасы'
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
                  text: '1210',
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
                  text: 'Денежные средства и денежные эквиваленты',
                  name: 'ДенежнСр'
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
                  text: '1250',
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
                  text: 'Финансовые и другие оборотные активы',
                  name: 'ФинВлож'
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
                  text: '1230',
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
                  text: '1600',
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