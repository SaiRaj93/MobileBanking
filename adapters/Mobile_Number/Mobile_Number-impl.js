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
 
var procedure1Statement = WL.Server.createSQLStatement("update registers set Mobile_Number=? where Acc_No=?");
function Mobile_Number(Mobile_Number,Acc_No) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure1Statement,
		parameters : [Mobile_Number,Acc_No]
	});
}

/************************************************************************
 * Implementation code for procedure - 'procedure2'
 *
 *
 * @return - invocationResult
 */
 
var procedure1Statement1 = WL.Server.createSQLStatement("update registers set Email=? where Acc_No=?");
function Email(Email,Acc_No) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure1Statement1,
		parameters : [Email,Acc_No]
	});
}


var procedure1Statement2 = WL.Server.createSQLStatement("update registers set password=? where Acc_No=?");
function Password(password,Acc_No) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure1Statement2,
		parameters : [password,Acc_No]
	});
}