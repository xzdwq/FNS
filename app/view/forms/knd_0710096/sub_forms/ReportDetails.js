Ext.define('Fns.view.forms.knd_0710096.sub_forms.ReportDetails', {
  extend: 'Ext.form.Panel',
  alias: 'widget.report-details',
  title: 'Реквизиты отчёта',
  bodyPadding: 5,
  scrollable: true,
  items: [
    {
      xtype: 'panel',
      layout: {
        type: 'table',
        tdAttrs: {
          valign: 'top'
        }
      },
      items: [
        {
          xtype: 'image',
          src: 'resources/img/0710096_5.03000_03.png',
          width: 120
        },
        {
          xtype: 'panel',
          width: '100%',
          padding: '0 0 15 20',
          defaults: {
            xtype: 'textfield',
            allowBlank: false,
            allowOnlyWhitespace: false,
            blankText: 'Обязательно для заполнения',
            msgTarget: 'side',
            labelWidth: 50,
            width: '100%'
          },
          items: [
            {
              fieldLabel: 'ИНН',
              name: 'inn',
              emptyText: '9999999999'
            },
            {
              fieldLabel: 'КПП',
              name: 'kpp',
              emptyText: '999999999'
            }
          ]
        },
        {
          xtype: 'panel',
          width: '100%',
          padding: '0 5 0 10',
          defaults: {
            xtype: 'textfield',
            allowBlank: false,
            allowOnlyWhitespace: false,
            blankText: 'Обязательно для заполнения',
            msgTarget: 'side',
            labelWidth: 150,
            width: '100%'
          },
          items: [
            {
              name: 'tax-authority-code',
              fieldLabel: 'Код налогового органа'
            },
            {
              name: 'OKEI-code',
              fieldLabel: 'Код по ОКЕИ'
            }
          ]
        }
      ]
    },
    {
      xtype: 'panel',
      padding: '0 5 0 0',
      layout: {
        type: 'table',
        tdAttrs: {
          valign: 'top'
        }
      },
      defaults: {
        xtype: 'textfield',
        allowBlank: false,
        allowOnlyWhitespace: false,
        blankText: 'Обязательно для заполнения',
        msgTarget: 'side',
        width: '95%'
      },
      items: [
        {
          xtype: 'container',
          padding: '5 0 0 0',
          width: '140px',
          style: {
            color: '#747474',
            'font-size': '11px',
            'font-weight': 'bold'
          },
          html: 'Форма по КНД 0710096'
        },
        {
          name: 'reporting-period',
          labelWidth: 120,
          fieldLabel: 'Отчётный период'
        },
        {
          name: 'reporting-year',
          labelWidth: 100,
          fieldLabel: 'Отёчтный год'
        },
        {
          name: 'adjustment-naumber',
          labelWidth: 150,
          width: '100%',
          fieldLabel: 'Номер корректировки'
        }
      ]
    },
    {
      xtype: 'panel',
      width: '100%',
      padding: '20 5 0 5',
      defaults: {
        xtype: 'textfield',
        allowBlank: false,
        allowOnlyWhitespace: false,
        blankText: 'Обязательно для заполнения',
        msgTarget: 'side',
        labelWidth: 320,
        width: '100%'
      },
      items: [
        {
          name: 'adress',
          labelWidth: 190,
          fieldLabel: 'Местонахождение (адрес)',
        },
        // {
        //   xtype: 'panel',
        //   layout: {
        //     type: 'table',
        //     tdAttrs: {
        //       valign: 'top'
        //     }
        //   },
        //   defaults: {
        //     xtype: 'textfield',
        //     allowBlank: false,
        //     allowOnlyWhitespace: false,
        //     blankText: 'Обязательно для заполнения',
        //     msgTarget: 'side',
        //     labelWidth: 190,
        //     width: '95%'
        //   },
        //   items: [
        //     {
        //       name: 'OKPO-code',
        //       fieldLabel: 'Код по ОКПО',
        //     },
        //     {
        //       name: 'OKVED2-code',
        //       labelWidth: 320,
        //       width: '100%',
        //       fieldLabel: 'Код вида экономической деятельности по ОКВЭД 2'
        //     }
        //   ]
        // }
        {
          name: 'OKVED2-code',
          fieldLabel: 'Код вида экономической деятельности по ОКВЭД 2'
        },
        {
          name: 'OKPO-code',
          fieldLabel: 'Код по ОКПО'
        },
        {
          name: 'OKFS-code',
          fieldLabel: 'Форма собственности (по ОКФС)'
        },
        {
          name: 'OKOPF-code',
          padding: '0 0 20 0',
          fieldLabel: 'Организационно-правовая форма (по ОКОПФ)'
        },
        {
          xtype: 'fieldset',
          title: 'Сведения о лице подписавшем документ',
          padding: '5 5 10 10',
          collapsible: false,
          defaultType: 'textfield',
          layout: 'fit',
          defaults: {
            allowBlank: false,
            allowOnlyWhitespace: false,
            padding: '5 0 0 0',
            blankText: 'Обязательно для заполнения',
            msgTarget: 'side',
            labelWidth: 310,
            width: '100%'
          },
          items: [
            {
              xtype: 'combobox',
              name: 'feature-face',
              fieldLabel: 'Признак лица подписавшего документ',
              store: {
                fields: ['id', 'name'],
                data: [
                  { 'id': 1, 'name': 'руководитель' },
                  { 'id': 2, 'name': 'уполномоченный представитель' }
                ]
              },
              editable: false,
              forceSelection: true,
              queryMode: 'local',
              displayField: 'name',
              valueField: 'id',
              value: 1,
              listConfig: {
                xtype: 'boundlist',
                itemSelector: 'div',
                itemTpl: [
                  '<span> {id} - {name} </span>'
                ]
              },
              displayTpl: new Ext.XTemplate(
                '<tpl for="."> {id} - {name} </tpl>'
              )
            },
            {
              name: 'last-name',
              fieldLabel: 'Фамилия'
            },
            {
              name: 'first-name',
              fieldLabel: 'Имя'
            },
            {
              name: 'middle-name',
              fieldLabel: 'Отчество'
            }
          ]
        }
      ]
    }
  ]
});