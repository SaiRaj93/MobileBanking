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
 
var procedure1Statement = WL.Server.createSQLStatement("select Acc_No,Email,password from registers where Email= ?");
function Login(Email) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure1Statement,
		parameters : [Email]
	});
}



var pr = WL.Server.createSQLStatement("select * from REGISTERS where Acc_No= ?");
function getProfile(Acc_No) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : pr,
		parameters : [Acc_No]
	});
}