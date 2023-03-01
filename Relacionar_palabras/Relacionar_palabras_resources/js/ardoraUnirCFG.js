//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=70; timeIni=70; timeBon=0;
var successes=0; successesMax=9; attempts=0; attemptsMax=5;
var score=0; scoreMax=10; scoreInc=10; scoreDec=5
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#F1AA87"; colorButton="#DFA9E7"; colorText="#000000"; colorSele="#8981BA";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Georgia, Serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="¡Felicidades, lo lograste!<3 "; messageTime="Se acaba el tiempoooo"; messageError="Lo importante es que lo intentaste:'("; messageErrorG="Lo importante es que lo intentaste:'("; messageAttempts="Llegaste al límite de intentos, lo siento "; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#5AE857"; borderTime="#F20000";borderError="#1C1CD7"; borderAttempts="#9542B0";
var wordsGame="UmVsYWNpb25hcl9wYWxhYnJhcw=="; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var joinPar=[["RmVsaXBlIFZJIGRlIEVzcGHDsWE=", "wr9DdcOhbCBlcyBlbCBub21icmUgZGVsIHJleSBkZSBFc3Bhw7FhPw=="],["wr9RdWnDqW4gZXMgbGEgcmVpbmEgZGUgRXNwYcOxYQ==", "TGV0aXppYSBkZSBCb3Jiw7Nu"],["UmVpbm8gZGUgRXNwYcOxYQ==", "Tm9tYnJlIG9maWNpYWwgZGUgRXNwYcOxYQ=="],["Q2FudGlkYWQgZGUgY29tdW5pZGFkZXMgYXV0w7Nub21hcw==", "MTc="],["Q2V1dGEgeSBNZWxpbGxh", "Q3VpZGFkZXMgYXV0w7Nub21hcw=="],["TsO6bWVybyBkZSBwcm92aW5jaWFzIGRlIEVzcGHDsWE=", "NTA="],["TWVzZXRhIENlbnRyYWw=", "UHJpbmNpcGFsIHVuaWRhZCBkZSByZWxpZXZlIGRlIEVzcGHDsWE="],["TsO6bWVybyBkZSByw61vcyBwcmluY2lwYWxlcw==", "MzQ="],["NA==", "TsO6bWVybyBkZSBsZW5ndWFzIG9maWNpYWxlcw=="]];
var c=[[19,37],[28,17],[15,24],[33,2],[15,18],[30,2],[14,37],[26,2],[1,27]];
var con1=["¿Quién es la reina de España","Cantidad de comunidades autónomas","Número de provincias de España","Número de ríos principales"];
var con2=["Felipe VI de España","Letizia de Borbón","Reino de España","17","Ceuta y Melilla","50","Meseta Central","34","4"];
var con3=["¿Cuál es el nombre del rey de España?","Nombre oficial de España","Cuidades autónomas","Principal unidad de relieve de España","Número de lenguas oficiales"];
var sel1=""; join1=[]; join2=[];
