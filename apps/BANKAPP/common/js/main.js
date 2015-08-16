var Acc_No;
var Email;
var password;



function wlCommonInit(){
	require([ "layers/core-web-layer", "layers/mobile-ui-layer" ], dojoInit);

	/*
	 * Application is started in offline mode as defined by a connectOnStartup property in initOptions.js file.
	 * In order to begin communicating with Worklight Server you need to either:
	 * 
	 * 1. Change connectOnStartup property in initOptions.js to true. 
	 *    This will make Worklight framework automatically attempt to connect to Worklight Server as a part of application start-up.
	 *    Keep in mind - this may increase application start-up time.
	 *    
	 * 2. Use WL.Client.connect() API once connectivity to a Worklight Server is required. 
	 *    This API needs to be called only once, before any other WL.Client methods that communicate with the Worklight Server.
	 *    Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 *    
	 *    WL.Client.connect({
	 *    		onSuccess: onConnectSuccess,
	 *    		onFailure: onConnectFailure
	 *    });
	 *     
	 */
	
	// Common initialization code goes here

}

function dojoInit() {
	require([ "dojo/ready", "dojo/parser", "dojox/mobile", "dojo/dom", "dijit/registry", "dojox/mobile/ScrollableView", "dojox/mobile/TabBar", "dojox/mobile/TabBarButton" ], function(ready) {
		ready(function() {
		});
	});
}

function registerData(){
	

	alert("hello");
	var Acc_No=document.getElementById("Acc_No").value;
	var Acc_Fullname=document.getElementById("Acc_Fullname").value;
	var Date_Of_Birth=document.getElementById("Date_Of_Birth").value;
	var Mobile_Number=document.getElementById("Mobile_Number").value;
	var Email=document.getElementById("Email").value;
	var password=document.getElementById("password").value;
	var Acc_Branch=document.getElementById("Acc_Branch").value;
	var Id_Type=document.getElementById("Id_type").value;
	var Id_Number=document.getElementById("Id_Number").value;
	var Date_Of_Register=new Date();
	
	
	if(Acc_No==null || Acc_No==""){
		alert("Account  should not be empty");
		return false;
	}
	
	if(Email==null ||Email==""){
		alert("Id should not be empty");
		return false;
	}
	
	
	if(password==null || password==""){
		alert("Password should not be empty");
		return false;
	}
	
		
	
	
	if(Mobile_Number==null ||Mobile_Number==""){
		alert("mobile no should not be empty");
		return false;
	}
	
	
	if(Acc_Branch==null ||Acc_Branch==""){
		alert("branch should not be empty");
		return false;
	}
	
	
	if(Id_Type==null || Id_Type==""){
		alert("Id_Type should not be empty");
		return false;
	}
	
	if(Id_Number==null || Id_Number==""){
		alert("Id_Numbere should not be empty");
		return false;
	}
	if(Acc_Fullname==null || Acc_Fullname==""){
		alert("Acc_Fullname should not be empty");
		return false;
	}
	

	var invocationData={
			adapter: "Myadapter",
			procedure: "insertData",
			parameters:[Acc_No,Acc_Fullname,Date_Of_Birth,Mobile_Number,Email,password,Acc_Branch,Id_Type,Id_Number,Date_Of_Register]
			
			};
	alert("inside client side");
	WL.Client.invokeProcedure(invocationData, {
		
		onSuccess:getResult,
		onFailure:getFail
	});
	
	
}


//function for login

function getResult(response){
	
	alert("getjava_Callback response :: " + JSON.stringify(response));
	document.writeln('<h1>sucessfully registered</h1><br><b>click here to</b> <br> <a href="./index.html">continue...</a>');	
	

}
function getFail(response){
	
	alert("getjava_Callback response :: " + JSON.stringify(response));
	document.writeln('<h1>sucessfully Not registered</h1><br><b>Please click here to register again</b> <br> <a href="./index.html" target="_blank"><button>continue...</button></a>');	
	

}



function Login(){
	

	
	 Acc_No=document.getElementById("Acc_No").value;
	 Email=document.getElementById("x").value;
	 password=document.getElementById("password").value;
	
	alert(Email);
	
	var invocationData={
			adapter: "login",
			procedure: "Login",
			parameters:[Email]
			
			};
	alert("inside client side");
	WL.Client.invokeProcedure(invocationData, {
		
		onSuccess:logResult,
		onFailure:logFail
	});
	
		
}

function logResult(response)
{
	
	  if(password == response.invocationResult.resultSet[0].PASSWORD)
	  {
		  
		  
		  alert("success");
	  }
		
	
	alert("getjava_Callback response :: " + JSON.stringify(response));
	
	

}

function logFail(response){
	
	 document.getElementById("suc").innerHTML="login fail";
	alert("getjava_Callback response :: " + JSON.stringify(response));
	
	
}




//ADMIN LOGIN




function AdminLogin(){
	

	
	var y=document.getElementById("x").value;
	var p=document.getElementById("password").value;
	
	
	var z=anuraag;
	alert("VVHH");
	var q=password;
	/*if(Email==null ||Email=="")
	{
		alert("Id should not be empty");
		return false;
	}
	
	
	if(password==null || password==""){
		alert("Password should not be empty");
		return false;
	}
	*/
		
    	if(y==z && p==q)	
    		
		document.writeln('<H1>Admin Succesfully Login</H1>click here to continue <br> <a href="./Admin.html"><button>continue...</button></a>');	
		else 
		document.writeln('<H1>Invalid AdminLogin </H1>please login again to continue <br> <a href="./index.html" target="_blank"><button>continue...</button></a>');	
		
	   
	
		
}

//view profile


function getProfile()
{
	
	var Acc_No=document.getElementById("Acc_No").value;
	
	
	if(Acc_No=="" || Acc_No==null)
	{
	
	alert("please enter Acc_No");
	return false;
	}	
	
	var invocationData={
			adapter: "login",
			procedure: "getProfile",
			parameters:[Acc_No]
			};
	
	WL.Client.invokeProcedure(invocationData, {
		
		onSuccess:getProfileResult,
		onFailure:getProfileFail
	});
	
		
}

function getProfileResult(response){
	var d=new Date();
	document.getElementById("my").innerHTML =response.invocationResult.resultSet;
	alert("getjava_Callback response :: " + JSON.stringify(response));
	document.writeln(d+'<br> <a href="./customeroperation.html"><button>Back</button></a><br><h1>: </h1>'+Acc_No+'<brcustomers profile> <a href="./customeroperation.html"><button>Back </button></a>');	
	

}

function getProfileFail(response){
	
	alert("getjava_Callback response :: " + JSON.stringify(response));
	document.writeln('<H1>Problem in retriving</H1>click here to Try again <br> <a href="./customeroperation.html"><button>continue...</button></a>');	
	
}







//transactions 

// check balnce


function GetAcc()

{
	Acc_No=document.getElementById("Acc_No").value;
	
	
	var invocationData={
			adapter: "Transaction",
			procedure: "GetAcc",
			parameters:[Acc_No]
			
			};
	alert("inside client side");
	WL.Client.invokeProcedure(invocationData, {
		
		onSuccess:getResult,
		onFailure:getfailResult
	});

}

function getResult(response){
	document.getElementById("my").innerHTML =response.invocationResult.resultSet.AMOUNT;

	
	alert("getjava_Callback response :: " + JSON.stringify(response));
	

}

function getfailResult(response){
	
	alert("getjava_Callback response :: " + JSON.stringify(response));
	document.writeln('<H1>password has  not changed</H1>click here to Try again <br> <a href="./customeroperation.html"><button>continue...</button></a>');	
	
}




function GetAcc()

{
	Acc_No=document.getElementById("Acc_No").value;
	
	
	var invocationData={
			adapter: "Transaction",
			procedure: "GetAcc",
			parameters:[Acc_No]
			
			};
	alert("inside client side");
	WL.Client.invokeProcedure(invocationData, {
		
		onSuccess:getResult,
		onFailure:getfailResult
	});

}

function getResult(response){
	document.getElementById("my").innerHTML =response.invocationResult.resultSet.AMOUNT;

	
	alert("getjava_Callback response :: " + JSON.stringify(response));
	

}

function getfailResult(response){
	
	alert("getjava_Callback response :: " + JSON.stringify(response));
	document.writeln('<H1>password has  not changed</H1>click here to Try again <br> <a href="./customeroperation.html"><button>continue...</button></a>');	
	
}



//transaction




function Transaction()

{  var Tid="AT"+Math.round(Math.random(45466666677)*1000);
	var FromAcc=document.getElementById("id1").value;
	var ToAcc=document.getElementById("id2").value;
	var Amount=document.getElementById("amount").value;
	var Tdate=new Date();
	
	if(Tid!=null &&  FromAcc!=null && ToAcc!=null )
		{
		
		var invocationData={
				adapter: "Transaction",
				procedure: "TransactionVerify",
				parameters:[FromAcc,Amount]
				
				};
		alert("inside verify side");
		WL.Client.invokeProcedure(invocationData, {
			
			onSuccess:verifyResult,
			onFailure:verifyfailResult
		});
		
		
		
		}
	function verifyResult(response){
		var amount1 =response.invocationResult.resultSet.AMOUNT;

		Amount=Amount-amount1;
		
		alert("getjava_Callback response :: " + JSON.stringify(response));
		

	}

	function verifyfailResult(response){
		
		alert("getjava_Callback response :: " + JSON.stringify(response));
		document.getElementById("my").innerHTML="you do not have sufficient balance to transfer";	
	}
		
	var invocationData={
			adapter: "Transaction",
			procedure: "Transaction",
			parameters:[Tid,FromAcc,ToAcc,Amount,Tdate]
			
			};
	alert("inside client side");
	WL.Client.invokeProcedure(invocationData, {
		
		onSuccess:trResult,
		onFailure:trfailResult
	});

}

function trResult(response){
	document.getElementById("done").innerHTML=response.invocationResult.resultSet;
	alert("getjava_Callback response :: " + JSON.stringify(response));
	

}

function trfailResult(response){
	
	alert("getjava_Callback response :: " + JSON.stringify(response));
	document.getElementById("done").innerHTML="sorry transaction failed";	
}








//mini statement




function getAccStatement()

{
	Acc_No=document.getElementById("Acc_No").value;
	
	
	var invocationData={
			adapter: "Transaction",
			procedure: "getAccStatement",
			parameters:[Acc_No]
			
			};
	alert("inside client side");
	WL.Client.invokeProcedure(invocationData, {
		
		onSuccess:statementResult,
		onFailure:statementfailResult
	});

}

functionstatementResult(response){
	document.getElementById("my").innerHTML =response.invocationResult.resultSet;

	
	alert("getjava_Callback response :: " + JSON.stringify(response));
	

}

function statementfailResult(response){
	
	alert("getjava_Callback response :: " + JSON.stringify(response));
	document.getElementById("my").innerHTML="sorry couldntfound";
}











//password


function ChangePassword(){
	

	
	password=document.getElementById("pwd").value;
	var password1=document.getElementById("pwd1").value;
	var password2=document.getElementById("pwd2").value;
	 Acc_No=document.getElementById("Acc_No").value;
	
	
	if(Acc_No==null || Acc_No==""){
		alert("Account  should not be empty");
		return false;
	}
	
	
	if(password==null || password==""){
		alert("Password should not be empty");
		return false;
	}
	
	if(password1!=password2||password1==""||password2=="")
		{
		
		alert("please check password entered corrctly");
		return false;
		
		}
	if(password="")
		{alert("please your old password");
		return false;
		}
	if(password1==password2)
		{
		password=password1;
		}
	
	var invocationData={
			adapter: "Mobile_Number",
			procedure: "Password",
			parameters:[password,Acc_No]
			
			};
	
	WL.Client.invokeProcedure(invocationData, {
		
		onSuccess:ChangePassResult,
		onFailure:ChangepassFail
	});
	
		
}

function ChangePassResult(response){
	
	alert("getjava_Callback response :: " + JSON.stringify(response));
	document.writeln('<h1>SUCESSFULly Changed</h1> please click here for return back<br> <a href="./customeroperation.html"><button>continue...</button></a>');	
	

}

function ChangepassFail(response){
	
	alert("getjava_Callback response :: " + JSON.stringify(response));
	document.writeln('<H1>password has  not changed</H1>click here to Try again <br> <a href="./customeroperation.html"><button>continue...</button></a>');	
	
}



//chamge mobile
function Changemb()
{
	

	
	var Mobile_Number=document.getElementById("Mobile_Number").value;
	var Mobile_Number1=document.getElementById("Mobile_Number1").value;
	var Mobile_Number2=document.getElementById("Mobile_Number2").value;
	 Acc_No=document.getElementById("Acc_No").value;
	
	
	if(Acc_No==null || Acc_No==""){
		alert("Account  should not be empty");
		return false;
	}
	
	
	
	
	
	
	if(Mobile_Number1!=Mobile_Number2||Mobile_Number1.length<=9||Mobile_Number2.lenth<=9)
		{
		
		alert("please check MOBILE NUMBER entered corrctly");
		return false;
		
		}
	if(Mobile_Number==" "|| Mobile_Number.length<=9)
		{alert("please your old MOBILE NUMBER");
		return false;
		}
	if(Mobile_Number1==Mobile_Number2)
		{
		Mobile_Number=Mobile_Number1;
		return false;
		}
	
	var invocationData={
			adapter: "Mobile_Number",
			procedure: "Mobile_Number",
			parameters:[Mobile_Number,Acc_No]
			
			};
	
	WL.Client.invokeProcedure(invocationData, {
		
		onSuccess:ChangemobResult,
		onFailure:ChangemobsFail
	});
	
		
}

function ChangemobResult(response){
	
	alert("getjava_Callback response :: " + JSON.stringify(response));
	document.writeln('<h1>SUCESSFULly Changed</h1> please click here for return back<br> <a href="./customeroperation.html"><button>continue...</button></a>');	
	

}

function ChangemobsFail(response){
	
	alert("getjava_Callback response :: " + JSON.stringify(response));
	document.writeln('<H1>MOBILE NO has  not changed</H1>click here to Try again <br> <a href="./customeroperation.html"><button>continue...</button></a>');	
	
}


//EMAIL CHANGE

function ChangeEmail(){
	

	var Acc_No=document.getElementById("Acc_No").value;
	var Email=document.getElementById("Email").value;
	var Email1=document.getElementById("Email").value;
	
	
	if(Acc_No==null || Acc_No==""){
		alert("Account  should not be empty");
		return false;
	}
	
	if(Email==null ||Email==""){
		alert("OLD Id should not be empty");
		return false;
	}
	
	
	

	if(Email1==null ||Email1==""){
		alert(" NEW Id should not be empty");
		return false;
	}
	

	     Email=Email1;

	
	var invocationData={
			adapter: "Mobile_Number",
			procedure: "Email",
			parameters:[Email,Acc_No]
			
			};
	
	WL.Client.invokeProcedure(invocationData, {
		
		onSuccess:ChangeEmailResult,
		onFailure:ChangeEmailsFail
	});
	
		
}

function ChangeEmailResult(response){
	
	alert("getjava_Callback response :: " + JSON.stringify(response));
	document.writeln('<h1>Email SUCESSFULly Changed</h1> please click here for return back<br> <a href="./customeroperation.html"><button>continue...</button></a>');	
	

}

function ChangeEmailsFail(response){
	
	alert("getjava_Callback response :: " + JSON.stringify(response));
	document.writeln('<H1>Email has  not changed</H1>click here to Try again <br> <a href="./customeroperation.html"><button>continue...</button></a>');	
	
}



// admin functions
//customer view



function ViewCustomers(){
	

	
	var invocationData={
			adapter: "Admin",
			procedure: "ViewCustomers",
			parameters:[]
			
			};
	
	WL.Client.invokeProcedure(invocationData, {
		
		onSuccess:ViewCustomersResult,
		onFailure:ViewCustomersFail
	});
	
		
}

function ViewCustomersResult(response){
	
	document.getElementById("my").innerHTML= response.invocationResult.resultSet[0].COUNT;
	alert("getjava_Callback response :: " + JSON.stringify(response));
	

}

function ViewCustomersFail(response){
	
	alert("getjava_Callback response :: " + JSON.stringify(response));
	document.writeln('<H1>problem in retriving</H1>click here to Try again <br> <a href="./Admin.html"><button>continue...</button></a>');	
	
}

//delete customer


function DeleteCustomers(){
	
	var Acc_No=document.getElementById("Acc_No").value;
	
	
	if(Acc_No==null || Acc_No==""){
		alert("Account  should not be empty");
		return false;
	}
	
	
	
	var invocationData={
			adapter: "Admin",
			procedure: "DeleteCustomers",
			parameters:[Acc_No]
			
			};
	
	var invokeProcedure=WL.Client.invokeProcedure(invocationData, {
		
		onSuccess:DeleteCustomersResult,
		onFailure:DeleteCustomersFail
	});
	
		
}

function DeleteCustomersResult(response){
	
	alert("getjava_Callback response :: " + JSON.stringify(response));
	document.writeln(' <a href="./Admin.html"><button>Back</button></a><br><h1>suceesfully deleted: </h1>'+Acc_No+'<br> <a href="./Admin.html"><button>Back to Admin panel</button></a>');	
	

}

function DeleteCustomersFail(response){
	
	alert("getjava_Callback response :: " + JSON.stringify(response));
	document.writeln('<H1>Problem in deleting</H1>click here to Try again <br> <a href="./Admin.html"><button>continue...</button></a>');	
	
}


//settings

function AChangePassword(){
	

	
	var password=document.getElementById("pwd").value;
	var password1=document.getElementById("pwd1").value;
	var password2=document.getElementById("pwd2").value;
	var Acc_No=document.getElementById("Acc_No").value;
	
	
	if(Acc_No==null || Acc_No==""){
		alert("Account  should not be empty");
		return false;
	}
	
	
	if(password==null || password==""){
		alert("OLD Password should not be empty");
		return false;
	}
	
	if(password1!=password2||password1==""||password2=="")
		{
		
		alert("please check password entered corrctly");
		return false;
		
		}
	
	if((password1==password2)==0)
		{
		password=password1;
		}
	
	var invocationData={
			adapter: "Mobile_Number",
			procedure: "Password",
			parameters:[password,Acc_No]
			
			};
	
	WL.Client.invokeProcedure(invocationData, {
		
		onSuccess:AChangePassResult,
		onFailure:AChangepassFail
	});
	
		
}

function AChangePassResult(response){
	
	alert("getjava_Callback response :: " + JSON.stringify(response));
	document.writeln('<h1>SUCESSFULly Changed</h1> please click here for return back<br> <a href="./Admin.html"><button>continue...</button></a>');	
	

}

function AChangepassFail(response){
	
	alert("getjava_Callback response :: " + JSON.stringify(response));
	document.writeln('<H1>password has  not changed</H1>click here to Try again <br> <a href="./Admin.html"><button>continue...</button></a>');	
	
}



//chamge mobile
function AChangemb(){
	

	
	var Mobile_Number=document.getElementById("Mobile_Number").value;
	var Mobile_Number1=document.getElementById("Mobile_Number1").value;
	var Mobile_Number2=document.getElementById("Mobile_Number2").value;
	var Acc_No=document.getElementById("Acc_No").value;
	
	
	if(Acc_No==null || Acc_No==""){
		alert("Account  should not be empty");
		return false;
	}
	
	if(Mobile_Number==null ||Mobile_Number==""){
		alert("Id should not be empty");
		return false;
	}
	
	
	
	
	if(Mobile_Number1!=Mobile_Number2||Mobile_Number1==""||Mobile_Number2=="")
		{
		
		alert("please check MOBILE NUMBER entered corrctly");
		return false;
		
		}
	
	if((Mobile_Number1==Mobile_Number2)==0)
		{
		Mobile_Number=Mobile_Number1;
		}
	
	var invocationData={
			adapter: "Mobile_Number",
			procedure: "Mobile_Number",
			parameters:[Mobile_Number,Acc_No]
			
			};
	
	WL.Client.invokeProcedure(invocationData, {
		
		onSuccess:AChangemobResult,
		onFailure:AChangemobsFail
	});
	
		
}

function AChangemobResult(response){
	
	alert("getjava_Callback response :: " + JSON.stringify(response));
	document.writeln('<h1>SUCESSFULly Changed</h1> please click here for return back<br> <a href="./Admin.html"><button>continue...</button></a>');	
	

}

function AChangemobsFail(response){
	
	alert("getjava_Callback response :: " + JSON.stringify(response));
	document.writeln('<H1>MOBILE NO has  not changed</H1>click here to Try again <br> <a href="./Admin.html"><button>continue...</button></a>');	
	
}


//EMAIL CHANGE

function AChangeEmail(){
	

	var Acc_No=document.getElementById("Acc_No").value;
	var Email=document.getElementById("Email").value;
	var Email1=document.getElementById("Email").value;
	
	if(Acc_No==null || Acc_No==""){
		alert("Account  should not be empty");
		return false;
	}
	
	if(Email==null ||Email==""){
		alert("Id should not be empty");
		return false;
	}
	
	
	
	
	
	
	if(Email1==null ||Email1==""){
		alert("Id should not be empty");
		return false;
	}
	
	
	
	
	     Email=Email1;

	
	var invocationData={
			adapter: "Mobile_Number",
			procedure: "Email",
			parameters:[Email,Acc_No]
			
			};
	
	WL.Client.invokeProcedure(invocationData, {
		
		onSuccess:AChangeEmailResult,
		onFailure:AChangeEmailsFail
	});
	
		
}

function AChangeEmailResult(response){
	
	var t=new Date();
	
	alert("getjava_Callback response :: " + JSON.stringify(response));
	document.writeln(t+'<h1>Email SUCESSFULly Changed</h1> please click here for return back<br> <a href="./Admin.html"><button>continue...</button></a>');	
	

}

function AChangeEmailsFail(response){
	
	alert("getjava_Callback response :: " + JSON.stringify(response));
	document.writeln('<H1>Email has  not changed</H1>click here to Try again <br> <a href="./Admin.html"><button>continue...</button></a>');	
	


}S