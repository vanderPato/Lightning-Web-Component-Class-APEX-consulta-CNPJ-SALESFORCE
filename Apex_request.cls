public class Apex_request {

    private static final  String URL_REMOTE = 'https://receitaws.com.br/v1/cnpj/';
      
   
	
    @AuraEnabled
    public static CNPJ__c getSalvando(CNPJ__c dadosCnp){
        
        try {
            insert dadosCnp;
            return dadosCnp;
        
    } catch (Exception e) {
        throw new AuraHandledException(e.getMessage());
    }
    }

  
    

    @AuraEnabled(cacheable=true)
    public static List<Object> RequesteApi(String inputCnpj){
       
       
         System.debug( 'Iniciando');
        	Http http = new Http();
            HttpRequest request = new HttpRequest();            
            request.setEndpoint(URL_REMOTE+inputCnpj);            
            request.setMethod('GET');
       
            List<CNPJ__c> cnpjSalva = new List<CNPJ__c>();
     

            HttpResponse response = http.send(request); 

            if(response.getStatusCode() ==  200){
            
              
                    Map<String,Object> mapJson = (Map<String,Object>)JSON.deserializeUntyped(response.getBody());
                
                   List<Object> result = (List<Object>)mapJson.get('atividade_principal');
                   List<Object> result2 =(List<Object>)mapJson.get('atividades_secundarias');
                   String code ;
                   String text ;
                
                String code1 ;
                String text1 ;
                
                 for(Object ob : result2){
                    Map<String, Object> map1 = (Map<String, Object>)ob;                   
                    for(String key : map1.keySet()){
                        code1 = (String)map1.get('code');
                        text1 =  (String)map1.get('text');
                      
                    }
                }

          
                for(Object ob : result){
                    Map<String, Object> map1 = (Map<String, Object>)ob;                   
                    for(String key : map1.keySet()){
                        code = (String)map1.get('code');
                        text =  (String)map1.get('text');
                      
                    }
                }

                    
                  
                    
                    
                	CNPJ__c cnpj = new CNPJ__c();
                    

                	cnpj.Name = (String)mapJson.get('nome');
                    cnpj.Abertura__c = (String)mapJson.get('abertura');
                    cnpj.Situacao__c = (String)mapJson.get('situacao');
                    cnpj.Tipo__c = (String)mapJson.get('tipo');
                    cnpj.Fantasia__c = (String)mapJson.get('fantasia');
                    cnpj.Porte__c = (String)mapJson.get('porte');
                    cnpj.Natureza_juridica__c = (String)mapJson.get('natureza_juridica');
                    cnpj.Logradouro__c = (String)mapJson.get('logradouro');
                    cnpj.Numero__c = (String)mapJson.get('numero');
                    cnpj.Municipio__c = (String)mapJson.get('municipio');
                    cnpj.Bairro__c = (String)mapJson.get('bairro');
                    cnpj.Uf__c= (String)mapJson.get('uf');
                    cnpj.Cep__c= (String)mapJson.get('cep');
                    cnpj.Email__c= (String)mapJson.get('email');
                    cnpj.Telefone__c= (String)mapJson.get('telefone');
                    cnpj.Data_situacao__c= (String)mapJson.get('data_situacao');
                    cnpj.Cnpj__c= (String)mapJson.get('cnpj');
                    cnpj.Ultima_atualizacao__c =(String)mapJson.get('ultima_atualizacao');
                    cnpj.Status__c =(String)mapJson.get('status');

                    cnpj.Code__c = code;
                	cnpj.Texto__c = text;
                	cnpj.Code1__c = code1;
                	cnpj.Texto1__c = text1;
				
                
                               
                      

            

                  

              		cnpjSalva.add(cnpj);

                   



                    
            }else{
                system.debug('Ola erro');
            }

            
        
                 return cnpjSalva;
        }
           
     
    
    

      
    

}