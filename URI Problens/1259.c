#include <stdio.h>
int main(){
    int tamP = 0, tamI = 0, casos, valor, aux, par[100001], impar[100001];
    scanf("%d", &casos);
    while(casos--){
        scanf("%d", &valor);
        if(valor%2 == 0){
        	if(!tamP){
        		par[0] = valor;
        	}else{
		        aux = tamP - 1;
		        while(aux >= 0){
		            if(par[aux] > valor){ 
				        par[aux + 1] = par[aux];
				        aux--;
				    }else{
				    	break;
				    }
		        }
		        par[aux + 1] = valor;
		        
            }
            tamP++;
        }else{
		    if(!tamP){
	    		par[0] = valor;
	    	}else{
			    aux = tamI - 1;
			    while(aux >= 0){
					if(impar[aux] < valor){ 
					    impar[aux + 1] = impar[aux];
					    aux--;
					}else{
						break;
					}
	        }
	        impar[aux + 1] = valor;
	        
	        }
	        tamI++;
        }
    }
    for(aux = 0; aux < tamP; aux++){
        printf("%d\n", par[aux]);
    }


    for(aux = 0; aux < tamI; aux++){
        printf("%d\n", impar[aux]);
    }
    
    
    return 0;
}
