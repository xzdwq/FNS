Ext.define('Fns.view.forms.knd_0710096.sub_forms.CapitalMovement', {
  extend: 'Ext.form.Panel',
  alias: 'widget.capital-movement',
  title: 'Отчет об изменениях капитала. Движение капитала',
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
                  text: 'Уставный капитал (графа 1)',
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
                  text: 'Собственные акции, выкупленные у акционеров (графа 2)',
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
                  text: 'Добавочный капитал (графа 3)',
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
                  text: 'Резервный капитал (графа 4)',
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
                  text: 'Нераспределенная прибыль (непокрытый убыток) (графа 5)',
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
                  text: 'Итого (графа 6)',
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
                  text: 'Величина капитала на 31 декабря года, предшествующего предыдущему',
                  cls: 'label-bold',
                  name: 'Кап31ДекПред'
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
                  text: '3100',
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
                  name: 'УстКапитал',
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
                  name: 'СобВыкупАкц',
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
                  name: 'ДобКапитал',
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
                  name: 'РезКапитал',
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
                  name: 'НераспПриб',
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
                  name: 'Итог',
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
                  text: 'Увеличение капитала - всего',
                  name: 'УвеличКапВс'
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
                  text: '3200',
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
                  name: 'УстКапитал',
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
                  name: 'СобВыкупАкц',
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
                  name: 'ДобКапитал',
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
                  name: 'РезКапитал',
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
                  name: 'НераспПриб',
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
                  name: 'Итог',
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
            height: 30,
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
                  'text-align': 'left',
                  'padding-left': '15px'
                }
              },
              items: [
                {
                  text: 'в том числе'
                }
              ]
            },
            {
              flex: .2
            },
            {
              flex: .4
            },
            {
              flex: .4
            },
            {
              flex: .4
            },
            {
              flex: .4
            },
            {
              flex: .4
            },
            {
              flex: .4
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
                  'text-align': 'left',
                  'padding-left': '15px'
                }
              },
              items: [
                {
                  text: 'чистая прибыль',
                  name: 'ЧистПриб'
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
                  text: '3211',
                }
              ]
            },
            {
              flex: .4
            },
            {
              flex: .4
            },
            {
              flex: .4
            },
            {
              flex: .4
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
                  name: 'НераспПриб',
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
                  name: 'Итог',
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
                  'text-align': 'left',
                  'padding-left': '15px'
                }
              },
              items: [
                {
                  text: 'переоценка имущества',
                  name: 'ПереоцИмущ'
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
                  text: '3212',
                }
              ]
            },
            {
              flex: .4
            },
            {
              flex: .4
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
                  name: 'ДобКапитал',
                }
              ]
            },
            {
              flex: .4
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
                  name: 'НераспПриб',
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
                  name: 'Итог',
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
                  'text-align': 'left',
                  'padding-left': '15px'
                }
              },
              items: [
                {
                  text: 'доходы, относящиеся непосредственно на увеличение капитала',
                  name: 'ДохУвелКап'
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
                  text: '3213',
                }
              ]
            },
            {
              flex: .4
            },
            {
              flex: .4
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
                  name: 'ДобКапитал',
                }
              ]
            },
            {
              flex: .4
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
                  name: 'НераспПриб',
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
                  name: 'Итог',
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
                  'text-align': 'left',
                  'padding-left': '15px'
                }
              },
              items: [
                {
                  text: 'дополнительный выпуск акций',
                  name: 'ДопВыпАкций'
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
                  text: '3214',
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
                  name: 'УстКапитал',
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
                  name: 'СобВыкупАкц',
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
                  name: 'ДобКапитал',
                }
              ]
            },
            {
              flex: .4
            },
            {
              flex: .4
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
                  name: 'Итог',
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
                  'text-align': 'left',
                  'padding-left': '15px'
                }
              },
              items: [
                {
                  text: 'увеличение номинальной стоимости акций',
                  name: 'УвеличНомАкц'
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
                  text: '3215',
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
                  name: 'УстКапитал',
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
                  name: 'СобВыкупАкц',
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
                  name: 'ДобКапитал',
                }
              ]
            },
            {
              flex: .4
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
                  name: 'НераспПриб',
                }
              ]
            },
            {
              flex: .4
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
                  'text-align': 'left',
                  'padding-left': '15px'
                }
              },
              items: [
                {
                  text: 'реорганизация юридического лица',
                  name: 'Реорганизация'
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
                  text: '3216',
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
                  name: 'УстКапитал',
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
                  name: 'СобВыкупАкц',
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
                  name: 'ДобКапитал',
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
                  name: 'РезКапитал',
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
                  name: 'НераспПриб',
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
                  name: 'Итог',
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
                  text: 'Уменьшение капитала - всего',
                  name: 'УменКапВс'
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
                  text: '3220',
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
                  name: 'УстКапитал',
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
                  name: 'СобВыкупАкц',
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
                  name: 'ДобКапитал',
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
                  name: 'РезКапитал',
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
                  name: 'НераспПриб',
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
                  name: 'Итог',
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
            height: 30,
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
                  'text-align': 'left',
                  'padding-left': '15px'
                }
              },
              items: [
                {
                  text: 'в том числе'
                }
              ]
            },
            {
              flex: .2
            },
            {
              flex: .4
            },
            {
              flex: .4
            },
            {
              flex: .4
            },
            {
              flex: .4
            },
            {
              flex: .4
            },
            {
              flex: .4
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
                  'text-align': 'left',
                  'padding-left': '15px'
                }
              },
              items: [
                {
                  text: 'убыток',
                  name: 'Убыток'
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
                  text: '3221',
                }
              ]
            },
            {
              flex: .4
            },
            {
              flex: .4
            },
            {
              flex: .4
            },
            {
              flex: .4
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
                  name: 'НераспПриб',
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
                  name: 'Итог',
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
                  'text-align': 'left',
                  'padding-left': '15px'
                }
              },
              items: [
                {
                  text: 'переоценка имущества',
                  name: 'ПереоцИмущ2'
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
                  text: '3222',
                }
              ]
            },
            {
              flex: .4
            },
            {
              flex: .4
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
                  name: 'ДобКапитал',
                }
              ]
            },
            {
              flex: .4
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
                  name: 'НераспПриб',
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
                  name: 'Итог',
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
                  'text-align': 'left',
                  'padding-left': '15px'
                }
              },
              items: [
                {
                  text: 'расходы, относящиеся непосредственно на увеличение капитала',
                  name: 'РасхУменКап'
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
                  text: '3223',
                }
              ]
            },
            {
              flex: .4
            },
            {
              flex: .4
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
                  name: 'ДобКапитал',
                }
              ]
            },
            {
              flex: .4
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
                  name: 'НераспПриб',
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
                  name: 'Итог',
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
                  'text-align': 'left',
                  'padding-left': '15px'
                }
              },
              items: [
                {
                  text: 'уменьшение номинальной стоимости акций',
                  name: 'УменНомАкц'
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
                  text: '3224',
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
                  name: 'УстКапитал',
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
                  name: 'СобВыкупАкц',
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
                  name: 'ДобКапитал',
                }
              ]
            },
            {
              flex: .4
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
                  name: 'НераспПриб',
                }
              ]
            },
            {
              flex: .4
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
                  'text-align': 'left',
                  'padding-left': '15px'
                }
              },
              items: [
                {
                  text: 'уменьшение количества акций',
                  name: 'УменКолАкций'
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
                  text: '3225',
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
                  name: 'УстКапитал',
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
                  name: 'СобВыкупАкц',
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
                  name: 'ДобКапитал',
                }
              ]
            },
            {
              flex: .4
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
                  name: 'НераспПриб',
                }
              ]
            },
            {
              flex: .4
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
                  'text-align': 'left',
                  'padding-left': '15px'
                }
              },
              items: [
                {
                  text: 'реорганизация юридического лица',
                  name: 'Реорганизация2'
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
                  text: '3226',
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
                  name: 'УстКапитал',
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
                  name: 'СобВыкупАкц',
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
                  name: 'ДобКапитал',
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
                  name: 'РезКапитал',
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
                  name: 'НераспПриб',
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
                  name: 'Итог',
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
                  'text-align': 'left',
                  'padding-left': '15px'
                }
              },
              items: [
                {
                  text: 'дивиденды',
                  name: 'Дивиденды'
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
                  text: '3227',
                }
              ]
            },
            {
              flex: .4
            },
            {
              flex: .4
            },
            {
              flex: .4
            },
            {
              flex: .4
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
                  name: 'НераспПриб',
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
                  name: 'Итог',
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
                  text: 'Изменение добавочного капитала',
                  name: 'ИзмДобавКап'
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
                  text: '3230',
                }
              ]
            },
            {
              flex: .4
            },
            {
              flex: .4
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
                  name: 'ДобКапитал',
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
                  name: 'РезКапитал',
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
                  name: 'НераспПриб',
                }
              ]
            },
            {
              flex: .4
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
                  text: 'Изменение резервного капитала',
                  name: 'ИзмРезервКап'
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
                  text: '3240',
                }
              ]
            },
            {
              flex: .4
            },
            {
              flex: .4
            },
            {
              flex: .4
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
                  name: 'РезКапитал',
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
                  name: 'НераспПриб',
                }
              ]
            },
            {
              flex: .4
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
                  text: 'Величина капитала на 31 декабря предыдущего года',
                  cls: 'label-bold',
                  name: 'Кап31Дек'
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
                  text: '3200',
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
                  name: 'УстКапитал',
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
                  name: 'СобВыкупАкц',
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
                  name: 'ДобКапитал',
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
                  name: 'РезКапитал',
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
                  name: 'НераспПриб',
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
                  name: 'Итог',
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
                  text: 'Увеличение капитала - всего',
                  name: 'УвеличКапВс3'
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
                  text: '3310',
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
                  name: 'УстКапитал',
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
                  name: 'СобВыкупАкц',
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
                  name: 'ДобКапитал',
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
                  name: 'РезКапитал',
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
                  name: 'НераспПриб',
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
                  name: 'Итог',
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
            height: 30,
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
                  'text-align': 'left',
                  'padding-left': '15px'
                }
              },
              items: [
                {
                  text: 'в том числе'
                }
              ]
            },
            {
              flex: .2
            },
            {
              flex: .4
            },
            {
              flex: .4
            },
            {
              flex: .4
            },
            {
              flex: .4
            },
            {
              flex: .4
            },
            {
              flex: .4
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
                  'text-align': 'left',
                  'padding-left': '15px'
                }
              },
              items: [
                {
                  text: 'чистая прибыль',
                  name: 'ЧистПриб3'
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
                  text: '3311',
                }
              ]
            },
            {
              flex: .4
            },
            {
              flex: .4
            },
            {
              flex: .4
            },
            {
              flex: .4
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
                  name: 'НераспПриб',
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
                  name: 'Итог',
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
                  'text-align': 'left',
                  'padding-left': '15px'
                }
              },
              items: [
                {
                  text: 'переоценка имущества',
                  name: 'ПереоцИмущ3'
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
                  text: '3312',
                }
              ]
            },
            {
              flex: .4
            },
            {
              flex: .4
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
                  name: 'ДобКапитал',
                }
              ]
            },
            {
              flex: .4
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
                  name: 'НераспПриб',
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
                  name: 'Итог',
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
                  'text-align': 'left',
                  'padding-left': '15px'
                }
              },
              items: [
                {
                  text: 'доходы, относящиеся непосредственно на увеличение капитала',
                  name: 'ДохУвелКап3'
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
                  text: '3313',
                }
              ]
            },
            {
              flex: .4
            },
            {
              flex: .4
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
                  name: 'ДобКапитал',
                }
              ]
            },
            {
              flex: .4
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
                  name: 'НераспПриб',
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
                  name: 'Итог',
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
                  'text-align': 'left',
                  'padding-left': '15px'
                }
              },
              items: [
                {
                  text: 'дополнительный выпуск акций',
                  name: 'ДопВыпАкций3'
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
                  text: '3314',
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
                  name: 'УстКапитал',
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
                  name: 'СобВыкупАкц',
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
                  name: 'ДобКапитал',
                }
              ]
            },
            {
              flex: .4
            },
            {
              flex: .4
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
                  name: 'Итог',
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
                  'text-align': 'left',
                  'padding-left': '15px'
                }
              },
              items: [
                {
                  text: 'увеличение номинальной стоимости акций',
                  name: 'УвеличНомАкц3'
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
                  text: '3315',
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
                  name: 'УстКапитал',
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
                  name: 'СобВыкупАкц',
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
                  name: 'ДобКапитал',
                }
              ]
            },
            {
              flex: .4
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
                  name: 'НераспПриб',
                }
              ]
            },
            {
              flex: .4
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
                  'text-align': 'left',
                  'padding-left': '15px'
                }
              },
              items: [
                {
                  text: 'реорганизация юридического лица',
                  name: 'Реорганизация3'
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
                  text: '3316',
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
                  name: 'УстКапитал',
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
                  name: 'СобВыкупАкц',
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
                  name: 'ДобКапитал',
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
                  name: 'РезКапитал',
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
                  name: 'НераспПриб',
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
                  name: 'Итог',
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
                  text: 'Уменьшение капитала - всего',
                  name: 'УменКапВс3'
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
                  text: '3320',
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
                  name: 'УстКапитал',
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
                  name: 'СобВыкупАкц',
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
                  name: 'ДобКапитал',
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
                  name: 'РезКапитал',
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
                  name: 'НераспПриб',
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
                  name: 'Итог',
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
            height: 30,
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
                  'text-align': 'left',
                  'padding-left': '15px'
                }
              },
              items: [
                {
                  text: 'в том числе'
                }
              ]
            },
            {
              flex: .2
            },
            {
              flex: .4
            },
            {
              flex: .4
            },
            {
              flex: .4
            },
            {
              flex: .4
            },
            {
              flex: .4
            },
            {
              flex: .4
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
                  'text-align': 'left',
                  'padding-left': '15px'
                }
              },
              items: [
                {
                  text: 'убыток',
                  name: 'Убыток3'
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
                  text: '3321',
                }
              ]
            },
            {
              flex: .4
            },
            {
              flex: .4
            },
            {
              flex: .4
            },
            {
              flex: .4
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
                  name: 'НераспПриб',
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
                  name: 'Итог',
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
                  'text-align': 'left',
                  'padding-left': '15px'
                }
              },
              items: [
                {
                  text: 'переоценка имущества',
                  name: 'ПереоцИмущ4'
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
                  text: '3322',
                }
              ]
            },
            {
              flex: .4
            },
            {
              flex: .4
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
                  name: 'ДобКапитал',
                }
              ]
            },
            {
              flex: .4
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
                  name: 'НераспПриб',
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
                  name: 'Итог',
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
                  'text-align': 'left',
                  'padding-left': '15px'
                }
              },
              items: [
                {
                  text: 'расходы, относящиеся непосредственно на увеличение капитала',
                  name: 'РасхУменКап3'
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
                  text: '3323',
                }
              ]
            },
            {
              flex: .4
            },
            {
              flex: .4
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
                  name: 'ДобКапитал',
                }
              ]
            },
            {
              flex: .4
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
                  name: 'НераспПриб',
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
                  name: 'Итог',
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
                  'text-align': 'left',
                  'padding-left': '15px'
                }
              },
              items: [
                {
                  text: 'уменьшение номинальной стоимости акций',
                  name: 'УменНомАкц3'
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
                  text: '3324',
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
                  name: 'УстКапитал',
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
                  name: 'СобВыкупАкц',
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
                  name: 'ДобКапитал',
                }
              ]
            },
            {
              flex: .4
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
                  name: 'НераспПриб',
                }
              ]
            },
            {
              flex: .4
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
                  'text-align': 'left',
                  'padding-left': '15px'
                }
              },
              items: [
                {
                  text: 'уменьшение количества акций',
                  name: 'УменКолАкций3'
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
                  text: '3325',
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
                  name: 'УстКапитал',
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
                  name: 'СобВыкупАкц',
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
                  name: 'ДобКапитал',
                }
              ]
            },
            {
              flex: .4
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
                  name: 'НераспПриб',
                }
              ]
            },
            {
              flex: .4
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
                  'text-align': 'left',
                  'padding-left': '15px'
                }
              },
              items: [
                {
                  text: 'реорганизация юридического лица',
                  name: 'Реорганизация4'
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
                  text: '3326',
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
                  name: 'УстКапитал',
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
                  name: 'СобВыкупАкц',
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
                  name: 'ДобКапитал',
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
                  name: 'РезКапитал',
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
                  name: 'НераспПриб',
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
                  name: 'Итог',
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
                  'text-align': 'left',
                  'padding-left': '15px'
                }
              },
              items: [
                {
                  text: 'дивиденды',
                  name: 'Дивиденды3'
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
                  text: '3327',
                }
              ]
            },
            {
              flex: .4
            },
            {
              flex: .4
            },
            {
              flex: .4
            },
            {
              flex: .4
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
                  name: 'НераспПриб',
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
                  name: 'Итог',
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
                  text: 'Изменение добавочного капитала',
                  name: 'ИзмДобавКап3'
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
                  text: '3330',
                }
              ]
            },
            {
              flex: .4
            },
            {
              flex: .4
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
                  name: 'ДобКапитал',
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
                  name: 'РезКапитал',
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
                  name: 'НераспПриб',
                }
              ]
            },
            {
              flex: .4
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
                  text: 'Изменение резервного капитала',
                  name: 'ИзмРезервКап3'
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
                  text: '3340',
                }
              ]
            },
            {
              flex: .4
            },
            {
              flex: .4
            },
            {
              flex: .4
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
                  name: 'РезКапитал',
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
                  name: 'НераспПриб',
                }
              ]
            },
            {
              flex: .4
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
                  text: 'Величина капитала на 31 декабря отчетного года',
                  cls: 'label-bold',
                  name: 'Кап31дек2'
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
                  text: '3300',
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
                  name: 'УстКапитал',
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
                  name: 'СобВыкупАкц',
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
                  name: 'ДобКапитал',
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
                  name: 'РезКапитал',
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
                  name: 'НераспПриб',
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
                  name: 'Итог',
                }
              ]
            }
          ]
        }
      ]
    }
  ]
});