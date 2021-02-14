Ext.define('Fns.view.forms.knd_0710096.sub_forms.report_details.ReportDetails', {
  extend: 'Ext.form.Panel',
  alias: 'widget.report-details',
  title: 'Реквизиты отчёта',
  bodyPadding: 5,
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
            blankText: 'Обезательно для заполнения',
            msgTarget: 'side',
            labelWidth: 50,
            width: '100%',
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
        }
      ]
    },
    {
      xtype: 'container',
      style: {
        color: '#747474',
        'font-size': '11px',
        'font-weight': 'bold'
      },
      html: 'Форма по КНД 0710096'
    }
  ]
});