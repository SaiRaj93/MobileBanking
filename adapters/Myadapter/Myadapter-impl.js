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
 
var insertdata=WL.Server.createSQLStatement("insert into registers values(?,?,?,?,?,?,?,?,?,?,1000)");
function insertData(Acc_No,Acc_Fullname,Date_Of_Brith,Mobile_Number,Email,password,Acc_Branch,Id_Type,Id_Number,Date_Of_Register) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : insertdata,
		parameters : [Acc_No,Acc_Fullname,Date_Of_Brith,Mobile_Number,Email,password,Acc_Branch,Id_Type,Id_Number,Date_Of_Register]
	});
}
