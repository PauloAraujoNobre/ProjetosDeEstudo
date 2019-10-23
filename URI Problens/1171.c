#include <stdio.h>
int main(){
    int t, t1, i, count[2001];
    scanf("%d", &t);
    t1 = t;
    for(i = 0; i < 2001; i++){
    	count[i] = 0;
    }
    while(t > 0){
        scanf("%d", &i);
        count[i]++;
        t--;
    }
    for(i = 1; i < 2001; i++){
		if(count[i] > 0){
		    printf("%d aparece %d vez(es)\n", i, count[i]);
		}
    }
    
    return 0;
}
