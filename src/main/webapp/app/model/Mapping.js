Ext.define('App.model.Mapping', {
    extend: 'Ext.data.Model',
    fields: [
		'id', 
    	'name', 
    	'code',
    	'timeOffset',
    	'presion',
		'temperatura',
		'caudal_horario',
		'volumen_bruto_acumulado',
		'volumen_neto_hoy',
		'caudal_horario_9300',
		'volumen_acumulado_9300',
		'volumen_desplazado',
		'altura_liquida',
		'mf',
		'ctl',
		'cpl',
		'factor_k',
		'pulsos_brutos',
		'fcv',
		'ctsh',
		'porcentaje_agua',
		'poder_calorifico',
		'densidad_relativa',
		'co2',
		'n2',
		'sh2',
		'c1',
		'c2',
		'c3',
		'ic4',
		'nc4',
		'ic5',
		'nc5',
		'c6',
		'volumen_seco',
		'inicio_transac',
		'fin_transac',
		'volumen_hoy_9300',
		'densidad',
		'volumen_bruto_hoy',
		'volumen_neto_acumulado', 
    	'creationDate', 
    	'createdBy'
    ]
});