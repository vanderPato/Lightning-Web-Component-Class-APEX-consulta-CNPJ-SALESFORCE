import { LightningElement, api , wire,track} from 'lwc';
import getRequesteApi from '@salesforce/apex/Apex_request.RequesteApi';
import getSalvando from '@salesforce/apex/Apex_request.getSalvando';

export default class Consumindo_api_cnpj extends LightningElement {
    @track cnpj ;
    @track dados;
    @track nome;
    @track abertura;
    @track situacao;
    @track tipo;
    @track fantasia;
    @track porte;
    @track natureza_juridica;
    @track code;
    @track text;
    @track code1;
    @track text1;
    @track logradouro;
    @track numero;
    @track municipio;
    @track uf;
    @track cep;
    @track email;
    @track telefone;
    @track data_situacao;
    @track cnpj;
    @track ultima_atualizacao;
    @track status;


    dadosSalva = {
        Name: this.nome ,
        Abertura__c:this.abertura ,
        Situacao__c:this.situacao,
        Tipo__c: this.tipo,
        Fantasia__c :this.fantasia,
        Porte__c :this.porte,
        Natureza_juridica__c:this.natureza_juridica,
        Code__c:this.code,
        Texto__c:this.text,
        Code1__c:this.code1,
        Texto1__c:this.text1,
        Logradouro__c:this.text1,
        Numero__c:this.numero,
        Municipio__c:this.municipio,
        Bairro__c:this.bairro,
        Uf__c:this.uf,
        Cep__c:this.cep,
        Email__c:this.email,
        Telefone__c:this.telefone,
        Data_situacao__c:this.data_situacao,
        Cnpj__c:this.cnpj,
        Ultima_atualizacao__c:this.ultima_atualizacao,
        Status__c:this.status,

    } 
        
    handleCnpj(event) {
        
        this.cnpj = event.target.value;
        
        console.log(this.cnpj);

    
        }
       async getBuscar(){
           
            await  getRequesteApi({inputCnpj:this.cnpj}).then(result =>{

              
                    
                    this.dadosSalva = {
                        Name: this.nome = result[0].Name,
                        Abertura__c:this.abertura = result[0].Abertura__c,
                        Situacao__c:this.situacao = result[0].Situacao__c,
                        Tipo__c:this.tipo = result[0].Tipo__c,
                        Fantasia__c:this.fantasia = result[0].Fantasia__c,
                        Porte__c:this.porte = result[0].Porte__c,
                        Natureza_juridica__c:this.natureza_juridica = result[0].Natureza_juridica__c,
                        Code__c: this.code = result[0].Code__c,
                        Texto__c: this.text = result[0].Texto__c,
                        Code1__c: this.code1 = result[0].Code1__c,
                        Texto1__c: this.text1 = result[0].Texto1__c,

                        Logradouro__c: this.logradouro = result[0].Logradouro__c,
                        Numero__c: this.numero = result[0].Numero__c,
                        Municipio__c: this.municipio= result[0].Municipio__c,
                        Bairro__c: this.bairro = result[0].Bairro__c,
                        Uf__c: this.uf = result[0].Uf__c,
                        Cep__c: this.cep= result[0].Cep__c,
                        Email__c: this.email= result[0].Email__c,
                        Telefone__c: this.telefone = result[0].Telefone__c,
                        Data_situacao__c: this.data_situacao= result[0].Data_situacao__c,
                        Cnpj__c: this.cnpj= result[0].Cnpj__c,
                        Ultima_atualizacao__c: this.ultima_atualizacao= result[0].Ultima_atualizacao__c,
                        Status__c: this.status = result[0].Status__c,



                       // Atividade_principal__c:this.atividade_principal = result[0].Atividade_principal__c,
                       

                    }
                    //console.log('Dados do result' , result[0].Atividade_principal__c );
                   
            }).catch(erro =>{
           
                    console.log('Aqui esta o erro' , erro)
    
            })


             

        }

        getSalvando(){
            getSalvando({dadosCnp:this.dadosSalva}).then(resolt =>{
                if(resolt){
                    console.log('dados salvos', resolt);
                }
            }).catch(err =>{
                console.log('Erro no sistema' , err);
            })
           

        }
    
    



}