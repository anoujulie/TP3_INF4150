/*
*/

function fctAjouterMembre()
{
	var lenom =  $("#nom").val();
	var leprenom =  $("#prenom").val();
	var lecourriel =  $("#courriel").val();
	var telephone =  $("#phone").val();
	
	if ((lenom =="") || ( leprenom =="") || ( lecourriel =="") )
	{
		alert("Spécifier tous les champs, s'il vous plait.");
		return (false) ; 
	}
	else
	{
		alert("Ajout..."); 
	}
	
	return true ;	
}

/*$(document).ready(function(){
	//lireBdJson() ;
	
	$("#fAjtMembre").submit(function(event){
		return fctAjouterMembre();  
	});
	
});*/