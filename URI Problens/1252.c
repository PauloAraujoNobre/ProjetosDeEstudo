#include <stdio.h>
int main(){
    int QuantNum, aux_QuantNum, Modulo, valor, aux, count, flag, num[10000];
    
    scanf("%d %d", &QuantNum, &Modulo);
    
    while(QuantNum !=  0 && Modulo != 0){
        
        aux_QuantNum = QuantNum;
        
        count = 0;
        
        while(aux_QuantNum--){
            
            flag = 0;
            
            scanf("%d", &valor);
            
            if(!count){
                num[0] = valor;
                
            }else{
                aux = count - 1;
                
                while(aux >= 0 && flag == 0){
                    if(valor%Modulo < num[aux]%Modulo){
                        num[aux + 1] = num[aux];
                        aux--;
                        
                    }else if(valor%Modulo == num[aux]%Modulo){
                        
                        if(valor%2 != 0 && num[aux]%2 != 0 && valor > num[aux]){
                            num[aux + 1] = num[aux];
                            aux--;
                            
                        }else if(valor%2 != 0 && num[aux]%2 == 0){
                            num[aux + 1] = num[aux];
                            aux--;
                            
                        }else if(valor%2 == 0 && num[aux]%2 == 0 && valor < num[aux]){
                            num[aux + 1] = num[aux];
                            aux--;
                            
                        }else{
                            num[aux + 1] = valor;
                            flag = 1;
                        }
                        
                    }else{
                        break;
                    }
                }
                if(!flag){
                    num[aux + 1] = valor;
                }
            }
            count++;
        }
        
        printf("%d %d\n", QuantNum, Modulo);
        
        for(aux = 0; aux < count; aux++){
            printf("%d\n", num[aux]);
        }
        
        scanf("%d %d", &QuantNum, &Modulo);
        
        if(!QuantNum && !Modulo){
            printf("%d %d\n", QuantNum, Modulo);
        }
        
    }
    return 0;
}
