/*
 *  Licensed Materials - Property of IBM
 *  5725-I43 (C) Copyright IBM Corp. 2011, 2013. All Rights Reserved.
 *  US Government Users Restricted Rights - Use, duplication or
 *  disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
 */

/************************************************************************
 * Implementation code for procedure - 'procedure1'
 *
 *
 * @return - invocationResult
 */
 
var procedure1Statement = WL.Server.createSQLStatement("select count(*) as count from registers");
function ViewCustomers() {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure1Statement,
		parameters : []
	});
}

/************************************************************************
 * Implementation code for procedure - 'procedure2'
 *
 *
 * @return - invocationResult
 */
 


var deleted = WL.Server.createSQLStatement("Delete from registers where Acc_No=?");
function DeleteCustomers(Acc_No) {
	return WL.Server.invokeSQLStatement({
		preparedStatement :deleted,
		parameters : [Acc_No]
	});
}

