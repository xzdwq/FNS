Ext.define('Fns.view.forms.knd_0710096.sub_forms.UseReport', {
  extend: 'Ext.form.Panel',
  alias: 'widget.use-report',
  title: 'Отчет о целевом использовании средств',
  name: 'ЦелИсп',
  bodyPadding: 5,
  scrollable: true,
  items: [
    // {
    //   xtype: 'image',
    //   src: 'resources/img/0710096_5.03000_03_4.png',
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
                  text: 'За отчетный год (графа 3)',
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
                  text: 'За предыдущий год (графа 4)',
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
                  text: 'Остаток средств на начало отчетного года',
                  cls: 'label-bold',
                  name: 'ОстатНачОтч'
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
                  text: '6100',
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
                  text: 'Поступило средств',
                  cls: 'label-bold',
                  name: 'ВсегоПоступило'
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
                  text: '6200',
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
                  text: 'Взносы и иные целевые поступления',
                  name: 'ВзносЦелПоступ'
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
                  text: '6220',
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
                  text: 'Прибыль от приносящей доход деятельности организации',
                  name: 'ПрибПредДеят'
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
                  text: '6240',
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
                  text: 'Прочие поступления',
                  name: 'Прочие'
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
                  text: '6250',
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
                  text: 'Использовано средств',
                  cls: 'label-bold',
                  name: 'ВсегоИспользовано'
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
                  text: '6300',
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
                  text: 'На целевые мероприятия',
                  name: 'ЦелМер'
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
                  text: '6310',
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
                  text: 'На содержание организации',
                  name: 'СодеожОрг'
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
                  text: '6320',
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
                  text: 'На приобретение основных средств и иного имущества',
                  name: 'ПриобОСИн'
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
                  text: '6330',
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
                  text: 'Прочие',
                  name: 'Прочие2'
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
                  text: '6350',
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
                  text: 'Остаток средств на конец отчетного года',
                  cls: 'label-bold',
                  name: 'ОстатКонОтч'
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
                  text: '6400',
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