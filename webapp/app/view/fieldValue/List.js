Ext.define('App.view.fieldValue.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.field-value-list',

    title: 'Mediciones autom&aacute;ticas',
	height: 500,
	border: false,
    
    store: 'FieldValues',
    columns: [
		{ text: 'Dispositivo',  dataIndex: 'deviceId' },
		{ text: 'Tag',  dataIndex: 'tag' },
		{ text: 'F. medici&oacute;n',  dataIndex: 'timestamp' },
		{ text: 'Tipo',  dataIndex: 'valueType' },
		{ text: 'Vol. neto hoy [M3]',  dataIndex: 'volumen_neto_hoy' },
		{ text: 'Calif.',  dataIndex: 'volumen_neto_hoy_q' },
		{ text: 'Vol. desplazado [M3]',  dataIndex: 'volumen_desplazado' },
		{ text: 'Calif.',  dataIndex: 'volumen_desplazado_q' },
		{ text: 'Vol. bruto acum. [M3]',  dataIndex: 'volumen_bruto_acumulado' },
		{ text: 'Calif.',  dataIndex: 'volumen_bruto_acumulado_q' },
		{ text: 'Vol. acum. 9300 [M3]',  dataIndex: 'volumen_acumulado_9300' },
		{ text: 'Calif.',  dataIndex: 'volumen_acumulado_9300_q' },
		{ text: 'Vol. hoy 9300 [M3]',  dataIndex: 'volumen_hoy_9300' },
		{ text: 'Calif.',  dataIndex: 'volumen_hoy_9300_q' },
		{ text: 'Temperatura [ºC]',  dataIndex: 'temperatura' },
		{ text: 'Calif.',  dataIndex: 'temperatura_q' },
		{ text: 'SH2 [%]',  dataIndex: 'sh2' },
		{ text: 'Calif.',  dataIndex: 'sh2_q' },
		{ text: 'Pulsos brutos',  dataIndex: 'pulsos_brutos' },
		{ text: 'Calif.',  dataIndex: 'pulsos_brutos_q' },
		{ text: 'Presi&oacute;n [Kg/cm2]',  dataIndex: 'presion' },
		{ text: 'Calif.',  dataIndex: 'presion_q' },
		{ text: 'Poder calor&iacute;fico [Kcal/m3]',  dataIndex: 'poder_calorifico' },
		{ text: 'Calif.',  dataIndex: 'poder_calorifico_q' },
		{ text: 'N2 [%]',  dataIndex: 'n2' },
		{ text: 'Calif.',  dataIndex: 'n2_q' },
		{ text: 'C6 [%]',  dataIndex: 'c6' },
		{ text: 'Calif.',  dataIndex: 'c6_q' },
		{ text: 'MF',  dataIndex: 'mf' },
		{ text: 'Calif.',  dataIndex: 'mf_q' },
		{ text: 'FCV',  dataIndex: 'fcv' },
		{ text: 'Calif.',  dataIndex: 'fcv_q' },
		{ text: 'Factor K [P/lt]',  dataIndex: 'factor_k' },
		{ text: 'Calif.',  dataIndex: 'factor_k_q' },
		{ text: 'Densidad relativa',  dataIndex: 'densidad_relativa' },
		{ text: 'Calif.',  dataIndex: 'densidad_relativa_q' },
		{ text: 'CTSH',  dataIndex: 'ctsh' },
		{ text: 'Calif.',  dataIndex: 'ctsh_q' },
		{ text: 'CTL',  dataIndex: 'ctl' },
		{ text: 'Calif.',  dataIndex: 'ctl_q' },
		{ text: 'CPL',  dataIndex: 'cpl' },
		{ text: 'Calif.',  dataIndex: 'cpl_q' },
		{ text: 'CO2',  dataIndex: 'co2' },
		{ text: 'Calif.',  dataIndex: 'co2_q' },
		{ text: 'Caudal horario 9300 [m3/h]',  dataIndex: 'caudal_horario_9300' },
		{ text: 'Calif.',  dataIndex: 'caudal_horario_9300_q' },
		{ text: 'Caudal horario [m3/h]',  dataIndex: 'caudal_horario' },
		{ text: 'Calif.',  dataIndex: 'caudal_horario_q' },
		{ text: 'C1 [%]',  dataIndex: 'c1' },
		{ text: 'Calif.',  dataIndex: 'c1_q' },
		{ text: 'C2 [%]',  dataIndex: 'c2' },
		{ text: 'Calif.',  dataIndex: 'c2_q' },
		{ text: 'C3 [%]',  dataIndex: 'c3' },
		{ text: 'Calif.',  dataIndex: 'c3_q' },
		{ text: 'IC4 [%]',  dataIndex: 'ic4' },
		{ text: 'Calif.',  dataIndex: 'ic4_q' },
		{ text: 'NC4 [%]',  dataIndex: 'nc4' },
		{ text: 'Calif.',  dataIndex: 'nc4_q' },
		{ text: 'IC5 [%]',  dataIndex: 'ic5' },
		{ text: 'Calif.',  dataIndex: 'ic5_q' },
		{ text: 'NC5 [%]',  dataIndex: 'nc5' },
		{ text: 'Calif.',  dataIndex: 'nc5_q' },
		{ text: 'Altura l&iacute;quida [m]',  dataIndex: 'altura_liquida' },
		{ text: 'Calif.',  dataIndex: 'altura_liquida_q' },
		{ text: '% agua',  dataIndex: 'porcentaje_agua' },
		{ text: 'Calif.',  dataIndex: 'porcentaje_agua_q' },
		{ text: 'Vol. seco ult. transac. [m3]',  dataIndex: 'volumen_seco' },
		{ text: 'Calif.',  dataIndex: 'volumen_seco_q' },
		{ text: 'Inicio transac.',  dataIndex: 'inicio_transac' },
		{ text: 'Calif.',  dataIndex: 'inicio_transac_q' },
		{ text: 'Fin transac.',  dataIndex: 'fin_transac' },
		{ text: 'Calif.',  dataIndex: 'fin_transac_q' },
		{ text: 'Vol. neto acum. [m3]',  dataIndex: 'volumen_neto_acumulado' },
		{ text: 'Calif.',  dataIndex: 'volumen_neto_acumulado_q' },
		{ text: 'Densidad [g/cm3]',  dataIndex: 'densidad' },
		{ text: 'Calif.',  dataIndex: 'densidad_q' },
		{ text: 'Vol. bruto hoy [m3]',  dataIndex: 'volumen_bruto_hoy' },
		{ text: 'Calif.',  dataIndex: 'volumen_bruto_hoy_q' }
    ],
    autoRender: true,
    tbar: {
    	defaults: {
            scale: 'small',
            iconAlign:'left'
        },
    	items: [{
            text: 'Reenviar todo',
            action: 'resend',
            iconCls: 'add16'
        }]
    },
    dockedItems: [{
        xtype: 'pagingtoolbar',
        store: this.store,
        dock: 'bottom',
        displayInfo: true
    }]

});
