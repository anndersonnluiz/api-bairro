const http = require("http");
const express = require('express') //importacao do pacote
const app = express() //instanciando express
var nomeBairroExterno;
var codigoBairro;
var popularBairroLocal;

 


// Inicio
app.get('/codigoBairro', function (req, res) {
    this.nomeBairroExterno = req.query.nomeBairro;
    
    //Popular array bairro junto com o código
    popularBairro(function popularBairro() {

    });

    //Percorre o array bairro e compara com o nome do bairro passado por parâmetro até o encontrar
    percorrerLista(function percorrerLista() {
        res.send(this.codigoBairro);
    });

    //Retorna Json com nome e código do bairro solicitado
    res.send(this.codigoBairro);
        return this.codigoBairro;
})
http.createServer(app).listen(3001, () => console.log("Servidor rodando local na porta 3001"));


function percorrerLista() {
    var nomeBairro = this.nomeBairroExterno.toLowerCase();
    for (let index = 0; index < this.popularBairroLocal.length; index++) {
        var str = this.popularBairroLocal[index].VALUE.toLowerCase();
        if (str == nomeBairro) {
            this.codigoBairro = 
                {
                    "ID":this.popularBairroLocal[index].ID,
                    "Bairro":this.popularBairroLocal[index].VALUE
                },
            
            index = this.popularBairroLocal.lenght;
            return this.codigoBairro;
        }
    }
}


function popularBairro() {
    this.popularBairroLocal = [
        {
            "ID": "3180",
            "VALUE": "Não se aplica"
        },
        {
            "ID": "3182",
            "VALUE": "Abraão"
        },
        {
            "ID": "3184",
            "VALUE": "Agronômica"
        },
        {
            "ID": "3186",
            "VALUE": "Alto Aririu"
        },
        {
            "ID": "3188",
            "VALUE": "Areias"
        },
        {
            "ID": "3190",
            "VALUE": "Areias de Cima"
        },
        {
            "ID": "3192",
            "VALUE": "Aririú da Formiga"
        },
        {
            "ID": "3194",
            "VALUE": "Aririu"
        },
        {
            "ID": "3196",
            "VALUE": "Armaçãoo do Pântano do Sul"
        },
        {
            "ID": "3198",
            "VALUE": "Balneário"
        },
        {
            "ID": "3200",
            "VALUE": "Balneário Ponta do Papagaio"
        },
        {
            "ID": "3202",
            "VALUE": "Barra da Lagoa"
        },
        {
            "ID": "3204",
            "VALUE": "Barra do Aririú"
        },
        {
            "ID": "3206",
            "VALUE": "Barreiros"
        },
        {
            "ID": "3208",
            "VALUE": "Beira Rio"
        },
        {
            "ID": "3210",
            "VALUE": "Bela Vista"
        },
        {
            "ID": "3212",
            "VALUE": "Boa Vista"
        },
        {
            "ID": "3214",
            "VALUE": "Bom Abrigo"
        },
        {
            "ID": "3216",
            "VALUE": "Bom Viver"
        },
        {
            "ID": "3218",
            "VALUE": "Bosque das Mansões"
        },
        {
            "ID": "3220",
            "VALUE": "Brejarú"
        },
        {
            "ID": "3222",
            "VALUE": "Córrego Grande"
        },
        {
            "ID": "3224",
            "VALUE": "Cachoeira do Bom Jesus"
        },
        {
            "ID": "3226",
            "VALUE": "Cachoeiras"
        },
        {
            "ID": "3228",
            "VALUE": "Cacupé"
        },
        {
            "ID": "3230",
            "VALUE": "Caminho Novo"
        },
        {
            "ID": "3232",
            "VALUE": "Campeche"
        },
        {
            "ID": "3234",
            "VALUE": "Campinas"
        },
        {
            "ID": "3236",
            "VALUE": "Canasvieiras"
        },
        {
            "ID": "3238",
            "VALUE": "Canto"
        },
        {
            "ID": "3240",
            "VALUE": "Capoeiras"
        },
        {
            "ID": "3242",
            "VALUE": "Carianos"
        },
        {
            "ID": "3244",
            "VALUE": "Carvoeira"
        },
        {
            "ID": "3246",
            "VALUE": "Centro"
        },
        {
            "ID": "3248",
            "VALUE": "Cidade Universitária Pedra Branca"
        },
        {
            "ID": "3250",
            "VALUE": "Códigos Postais"
        },
        {
            "ID": "3252",
            "VALUE": "Colônia Santana"
        },
        {
            "ID": "3254",
            "VALUE": "Coloninha"
        },
        {
            "ID": "3256",
            "VALUE": "Coqueiros"
        },
        {
            "ID": "3258",
            "VALUE": "Costeira do Pirajubaé"
        },
        {
            "ID": "3260",
            "VALUE": "Daniela"
        },
        {
            "ID": "3262",
            "VALUE": "Distrito Industrial"
        },
        {
            "ID": "3264",
            "VALUE": "Encruzilhada"
        },
        {
            "ID": "3266",
            "VALUE": "Enseada do Brito"
        },
        {
            "ID": "3268",
            "VALUE": "Estiva"
        },
        {
            "ID": "3270",
            "VALUE": "Estreito"
        },
        {
            "ID": "3272",
            "VALUE": "Fazenda Santo Antônio"
        },
        {
            "ID": "3274",
            "VALUE": "Flor de Nápolis"
        },
        {
            "ID": "3276",
            "VALUE": "Forquilhas"
        },
        {
            "ID": "3278",
            "VALUE": "Forquilhinha"
        },
        {
            "ID": "3280",
            "VALUE": "Fundos"
        },
        {
            "ID": "3282",
            "VALUE": "Guarda do Cubatão"
        },
        {
            "ID": "3284",
            "VALUE": "Guarda do Embaú"
        },
        {
            "ID": "3286",
            "VALUE": "Ingleses"
        },
        {
            "ID": "3288",
            "VALUE": "Ingleses do Rio Vermelho"
        },
        {
            "ID": "3290",
            "VALUE": "Ipiranga"
        },
        {
            "ID": "3292",
            "VALUE": "Itacorubi"
        },
        {
            "ID": "3294",
            "VALUE": "Itaguaçu"
        },
        {
            "ID": "3296",
            "VALUE": "Jardim Aquarius"
        },
        {
            "ID": "3298",
            "VALUE": "Jardim Atlântico"
        },
        {
            "ID": "3300",
            "VALUE": "Jardim Cidade de Florianópolis"
        },
        {
            "ID": "3302",
            "VALUE": "Jardim Coqueiros"
        },
        {
            "ID": "3304",
            "VALUE": "Jardim das Palmeiras"
        },
        {
            "ID": "3306",
            "VALUE": "Jardim Eldorado"
        },
        {
            "ID": "3308",
            "VALUE": "Jardim Janaína"
        },
        {
            "ID": "3310",
            "VALUE": "Jardim Santiago"
        },
        {
            "ID": "3312",
            "VALUE": "João Paulo"
        },
        {
            "ID": "3314",
            "VALUE": "José Mendes"
        },
        {
            "ID": "3316",
            "VALUE": "Jurerê"
        },
        {
            "ID": "3318",
            "VALUE": "Jurerê Internacional"
        },
        {
            "ID": "3320",
            "VALUE": "Kobrasol"
        },
        {
            "ID": "3322",
            "VALUE": "Lagoa da Conceição"
        },
        {
            "ID": "3324",
            "VALUE": "Mar Azul"
        },
        {
            "ID": "3326",
            "VALUE": "Mar das Pedras"
        },
        {
            "ID": "3328",
            "VALUE": "Monte Cristo"
        },
        {
            "ID": "3330",
            "VALUE": "Monte Verde"
        },
        {
            "ID": "3332",
            "VALUE": "Morro da Bina"
        },
        {
            "ID": "3334",
            "VALUE": "Morro das Pedras"
        },
        {
            "ID": "3336",
            "VALUE": "Nossa Senhora do Rosário"
        },
        {
            "ID": "3338",
            "VALUE": "Pântano do Sul"
        },
        {
            "ID": "3340",
            "VALUE": "Pacheco"
        },
        {
            "ID": "3342",
            "VALUE": "Pantanal"
        },
        {
            "ID": "3344",
            "VALUE": "Passa Vinte"
        },
        {
            "ID": "3346",
            "VALUE": "Passagem de Maciambú"
        },
        {
            "ID": "3348",
            "VALUE": "Pedra Branca"
        },
        {
            "ID": "3350",
            "VALUE": "Pedregal"
        },
        {
            "ID": "3352",
            "VALUE": "Picadas do Sul"
        },
        {
            "ID": "3354",
            "VALUE": "Pinheira"
        },
        {
            "ID": "3356",
            "VALUE": "Ponta das Canas"
        },
        {
            "ID": "3358",
            "VALUE": "Ponta de Baixo"
        },
        {
            "ID": "3360",
            "VALUE": "Ponte do Imaruim"
        },
        {
            "ID": "3362",
            "VALUE": "Potecas"
        },
        {
            "ID": "3364",
            "VALUE": "Prado"
        },
        {
            "ID": "3366",
            "VALUE": "Prado de Baixo"
        },
        {
            "ID": "3368",
            "VALUE": "Praia Brava"
        },
        {
            "ID": "3370",
            "VALUE": "Praia Comprida"
        },
        {
            "ID": "3372",
            "VALUE": "Praia de Fora"
        },
        {
            "ID": "3374",
            "VALUE": "Praia do Meio"
        },
        {
            "ID": "3376",
            "VALUE": "Praia do Sonho"
        },
        {
            "ID": "3378",
            "VALUE": "Praia João Rosa"
        },
        {
            "ID": "3380",
            "VALUE": "Ratones"
        },
        {
            "ID": "3382",
            "VALUE": "Real Parque"
        },
        {
            "ID": "3384",
            "VALUE": "Ribeirão da Ilha"
        },
        {
            "ID": "3386",
            "VALUE": "Rio Caveiras"
        },
        {
            "ID": "3388",
            "VALUE": "Rio Grande"
        },
        {
            "ID": "3390",
            "VALUE": "Rio Tavares"
        },
        {
            "ID": "3392",
            "VALUE": "Roçado"
        },
        {
            "ID": "3394",
            "VALUE": "São João do Rio Vermelho"
        },
        {
            "ID": "3396",
            "VALUE": "São Luiz"
        },
        {
            "ID": "3398",
            "VALUE": "São Sebastião"
        },
        {
            "ID": "3400",
            "VALUE": "Saco dos Limões"
        },
        {
            "ID": "3402",
            "VALUE": "Saco Grande"
        },
        {
            "ID": "3404",
            "VALUE": "Sambaqui"
        },
        {
            "ID": "3406",
            "VALUE": "Santa Mônica"
        },
        {
            "ID": "3408",
            "VALUE": "Santo Antônio de Lisboa"
        },
        {
            "ID": "3410",
            "VALUE": "São Miguel"
        },
        {
            "ID": "3412",
            "VALUE": "Saudade"
        },
        {
            "ID": "3414",
            "VALUE": "Saveiro"
        },
        {
            "ID": "3416",
            "VALUE": "Serraria"
        },
        {
            "ID": "3418",
            "VALUE": "Sertão do Maruim"
        },
        {
            "ID": "3420",
            "VALUE": "Tapera"
        },
        {
            "ID": "3422",
            "VALUE": "Tijuquinhas"
        },
        {
            "ID": "3424",
            "VALUE": "Trindade"
        },
        {
            "ID": "3426",
            "VALUE": "Universitário"
        },
        {
            "ID": "3428",
            "VALUE": "Vargem do Bom Jesus"
        },
        {
            "ID": "3430",
            "VALUE": "Vargem Grande"
        },
        {
            "ID": "3432",
            "VALUE": "Vargem Pequena"
        },
        {
            "ID": "3434",
            "VALUE": "Vendaval"
        }
    ]
}




