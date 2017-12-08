/*
** signe: '*', '+', '-', '/'
** gauche: un nombre non negatif
** droite: un nombre plus petit que 430
**
** La fonction renvoie le resultat du calcul
**
** La fonction renvoie null en cas d'erreur
*/
function calculatrice(signe, gauche, droite) {
  var result;
    if (typeof gauche === 'number' && typeof droite === 'number') {
	   	if (gauche>=1 && droite<430 && droite!=0) {
		    switch (signe) {
		   		case "*":
		   			result = parseFloat(gauche)*parseFloat(droite);
		   			return result;
		   		break;
		   		case "+":
		   			result = parseFloat(gauche)+parseFloat(droite);
		   			return result;
		   		break;
		   		case "-":
		   			result = parseFloat(gauche)-parseFloat(droite);
		   			return result;
		   		break;
		   		case "/":
		   			result = parseFloat(gauche)/parseFloat(droite);
		   			return result;
		   		break;
		   		default:
		   			result=null;
		   			return result;
		    }
		} else {
		   	result = null;
		   	return result;
		}
	}else{
		result=null;
		return result;
	}
}
 
module.exports = calculatrice;
