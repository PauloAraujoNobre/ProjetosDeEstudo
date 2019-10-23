#include<stdio.h>
#include<string.h>
int SomaDeDigitos(int j){
    int x = 0;
    while(j > 0){
        x += j%10;
        j = j/10;
    }
    return x;
}
int main(){
    unsigned long int i, j, t, len, zero = 0, um = 0;
    
    while(1){
        scanf("%lu", &t);
        getchar();
        if(t == 0){
            break;
        }
        while (t--){
            char soma[1001];
            int count = 0;
            scanf("%s", soma);
            len = strlen(soma);
            for(i = 0, zero = 0; i < len; i += 2){
                zero += soma[i] - '0';
            }
            for(i = 1, um = 0; i < len; i += 2){
                um += soma[i] - '0';
            }
            count += SomaDeDigitos(um);
            count += SomaDeDigitos(zero);
            
            printf("%lu\n", count);
        }
    }
    
    return 0;
}
