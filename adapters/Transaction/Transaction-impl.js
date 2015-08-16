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
 
var procedure1Statement = WL.Server.createSQLStatement("select Amount from FundTransfer where FromAcc=(select Acc_No from registers where Acc_No=?)");
function TransactionVerify(FromAcc) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : procedure1Statement,
		parameters : [Amount]
	});
}

/************************************************************************
 * Implementation code for procedure - 'procedure2'
 *
 *
 * @return - invocationResult
 */
 
var transfer = WL.Server.createSQLStatement(" insert into FundTransfer values(?,?,?,?,?) ");
function Transaction(Tid,FromAcc,ToAcc,Amount,Tdate) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : transfer,
		parameters : [Tid,FromAcc,ToAcc,Amount,Tdate]
	});
}








var getacc= WL.Server.createSQLStatement("select Amount from FundTransfer where FromAcc=(select Acc_No from registers where Acc_No=?)");

function GetAcc(Acc_No) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : getacc,
		parameters : [Acc_No]
	});
}



var getAccStatement= WL.Server.createSQLStatement("select * from FundTransfer where FromAcc=(select Acc_No from registers where Acc_No=?)");

function getAccStatement(Acc_No) {
	return WL.Server.invokeSQLStatement({
		preparedStatement :getAccStatement,
		parameters : [Acc_No]
	});
}
