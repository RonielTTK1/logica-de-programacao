let VooNorEcoAdu = 1200;      //Declaração de Variáveis para passagens Nacionais-Norte com seus devidos preços
let VooNorEcoCri= 900;
let VooNorExeAdu= 2500;     
let VooNorExeCri= 2200;

let VooSulEco= 2200;          //Declaração de Variáveis para passagens Nacionais-Sul com seus devidos preços
let VooSulExe= 3400;

let ContAsiEco= 3600;         //Declaração de Variáveis para passagens Internacionais-Ásia com seus devidos preços
let ContAsiExe= 5000;

let ContEuroEco= 5800;        //Declaração de Variáveis para passagens Internacionais-Europa com seus devidos preços
let ContEuroExe= 7300;

let ContAfrEco= 2200;         //Declaração de Variáveis para passagens Internacionais-África com seus devidos preços
let ContAfrExe= 3900;

let regiao = "BR"             //Declaração de Voo Internacional ou Nacional, Norte ou Sul/Ásia, Europa ou África, Econômica ou Executiva
let localizacao = "No"
let passagem = "Exe"

let passageiros_adultos = 5   //Declaração de Passageiros Adultos e Crianças
let passageiros_crianças = 5

 if (regiao == "BR" & localizacao == "No" & passagem == "Eco" ) { 
    console.log ("O valor total de vendas das passagens é de", ((VooNorEcoAdu * passageiros_adultos) +  (VooNorEcoCri * passageiros_crianças)))
    console.log ("A quantidade de crianças no voo é de", passageiros_crianças, "passageiros e a quantidade de passageiros adultos é de", passageiros_adultos, "pasageiros")
    console.log ("Este voo é da Classe Econômica, com destino ao Norte do Brasil")  
    
 } else if (regiao == "BR" & localizacao == "No" & passagem == "Exe")  {
 console.log ("O valor total de vendas das passagens é de", (((VooNorExeAdu * 0.20) + VooNorExeAdu) * passageiros_adultos) + ((VooNorExeCri * 0.10) + VooNorExeCri)  * passageiros_crianças);
 console.log ("A quantidade de crianças no voo é de", passageiros_crianças, "passageiros e a quantidade de passageiros adultos é de", passageiros_adultos, "passageiros")
 console.log ("Este voo é da Classe Executiva, com destino ao Norte do Brasil")

} else if (regiao == "BR" & localizacao == "Sul" & passagem == "Eco") {
    console.log ("O valor total de vendas das passagens é de", (passageiros_adultos + passageiros_crianças) * VooSulEco)
    console.log ("A quantidade de crianças no voo é de", passageiros_crianças, "passageiros e a quantidade de passageiros adultos é de", passageiros_adultos, "passageiros")
    console.log ("Este voo é da Classe Econômica, com destino ao Sul do Brasil ")

} else if (regiao == "BR" & localizacao == "Sul" & passagem == "Exe") {
    console.log ("O valor total de vendas das passagens é de", (passageiros_adultos + passageiros_crianças) * VooSulExe)
    console.log ("A quantidade de crianças no voo é de", passageiros_crianças, "passageiros e a quantidade de passageiros adultos é de", passageiros_adultos, "passageiros")
    console.log ("Este voo é da Classe Executiva, com destino ao Sul do Brasil")

} else if (regiao == "Int" & localizacao == "Ásia" & passagem == "Eco") {
    console.log ("O valor total de vendas das passagens é de", (passageiros_adultos + passageiros_crianças) * ContAsiEco)
    console.log ("A quantidade de crianças no voo é de", passageiros_crianças, "passageiros e a quantidade de passageiros adultos é de", passageiros_adultos, "passageiros")
    console.log ("Este voo Internacional é de Classe Econômica, com destino à Ásia ")

} else if (regiao == "Int" & localizacao == "Ásia" & passagem == "Exe") {
    console.log ("O valor total de vendas das passagens é de", (passageiros_adultos + passageiros_crianças) * ContAsiExe)
    console.log ("A quantidade de crianças no voo é de", passageiros_crianças, "passageiros e a quantidade de passageiros adultos é de", passageiros_adultos, "passageiros")
    console.log ("Este voo Internacional é de Classe Executiva, com destino à Ásia")

} else if (regiao == "Int" & localizacao == "Euro" & passagem == "Eco") {
    console.log ("O valor total de vendas das passagens é de", (passageiros_adultos + passageiros_crianças) * ContEuroEco)
    console.log ("A quantidade de crianças no voo é de", passageiros_crianças, "passageiros e a quantidade de passageiros adultos é de", passageiros_adultos, "passageiros")
    console.log ("Este voo Internacional é de Classe Econômica, com destino à Europa")

} else if (regiao == "Int" & localizacao == "Euro" & passagem == "Exe") {
    console.log ("O valor total de vendas das passagens é de", (passageiros_adultos + passageiros_crianças) * ContEuroExe)
    console.log ("A quantidade de crianças no voo é de", passageiros_crianças, "passageiros e a quantidade de passageiros adultos é de", passageiros_adultos, "passageiros")
    console.log ("Este voo Internacional é de Classe Executiva, com destino à Europa")

} else if (região == "Int" & localizacao == "Afri" & passagem == "Eco") {
    console.log ("O valor total de vendas das passagens é de", (passageiros_adultos + passageiros_crianças) * ContAfrEco)
    console.log ("A quantidade de crianças no voo é de", passageiros_crianças, "passageiros e a quantidade de passageiros adultos é de", passageiros_adultos, "passageiros")
    console.log ("Este voo Internacional é de Classe Econômica, com destino à África")

} else if (regiao == "Int" & localizacao == "Afri" & passagem == "Exe") {
    console.log ("O valor total de vendas das passagens é de", (passageiros_adultos + passageiros_crianças) * ContAsiExe)
    console.log ("A quantidade de crianças no voo é de", passageiros_crianças, "passageiros e a quantidade de passageiros adultos é de", passageiros_adultos, "passageiros")
    console.log ("Este voo Internacional é de Classe Executiva, com destino à África")
}
//Utilização de vários Else If para determinadas probabilidades de situações, todas as combinações de probabilidades foram analisadas
//Utilização de "&" para facilitar a vida do programador e conseguir utilizar várias funções dentro de apenas um Else If
//Utilização de "==" para demonstrar com exatidão quais variáveis tem que ser ativadas para executar tal probabilidade

